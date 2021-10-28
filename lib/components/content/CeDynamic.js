// Component to render CE based on type
export default {
  props: {
    /**
     * Content elements data props
     */
    data: {
      type: Object,
      required: true
    },
    /**
     * type of content element
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * index of content element
     */
    index: {
      type: Number,
      default: -1
    }
  },
  render (createElement) {
    const createComponent = () => {
    // content element are registered in PascalCase or kebab-case like "CeMyComponent" or "ce-my-component"
    // but the type is coming as "my_component" so we have to transform the name and the tag
      const typeNameCamelCase = this.type.replace(/_([a-z])/g, (g) => {
        return g[1].toUpperCase()
      })

      let elementTag = `ce-${this.type.replace(/_/g, '-')}`
      const componentName = `Ce${typeNameCamelCase[0].toUpperCase() +
        typeNameCamelCase.slice(1)}`

      // check if global component exist, if not display <ce-default/>
      if (!(this.$nuxt.$options.components[componentName] || this.$nuxt.$options.components[elementTag])) {
        elementTag = 'ce-default'
      }

      return createElement(elementTag, {
        props: {
          ...{
            id: this.data.id,
            type: this.data.type,
            appearance: this.data.appearance,
            index: this.index
          },
          ...this.data.content
        }
      })
    }

    if (this.$nuxt.$typo3.options.debug) {
      return createElement('ce-debug', { props: this.data }, [
        createComponent()
      ])
    }

    return createComponent()
  }
}