import Item from './item'

class Collapse {
	/**
	 * Instantiate the collapse class
	 */
	constructor(options = {}) {
		this.items = []
		this.assignOptions(options)
		this.initCollapse()
		this.assignItems()
		this.init()
	}

	/**
	 * Default Options
	 */
	defaultOptions() {
		return {
			container: 		'',
			header: 		'.collapse__header',
			body: 			'.collapse__body',
			closed: 		false,
			multiple: 		false,
			collapsible: 	false,
			defaultOpen: 	1
		}
	}

	/**
	 * Initialize options
	 */
	assignOptions(options) {
		const userOptions = Object.assign(this.defaultOptions(), options)

		for (const key in userOptions)
			this[key] = userOptions[key]
	}

	/**
	 * Fetch collapse items
	 */
	initCollapse() {
		this.headers = document.querySelectorAll(`${this.container} ${this.header}`)
		this.bodies = document.querySelectorAll(`${this.container} ${this.body}`)
	}

	/**
	 * Initialize collapse items
	 */
	assignItems() {
		for (let i = 0; i < this.headers.length; i++)
			this.items.push(new Item(this, this.headers[i], this.bodies[i]))
	}

	/**
	 * Initialize default
	 */
	init() {
		if (this.closed || !this.multiple)
			this.openCloseAll()

		if (!this.multiple)
			this.openDefault()
	}

	/**
	 * Open Default Tab
	 */
	openDefault() {
		this.items[this.defaultOpen - 1].open()
	}

	/**
	 * Open/Close All
	 */
	openCloseAll(type = 'close') {
		for (let i = 0; i < this.items.length; i++)
			this.items[i][type]()
	}

	/**
	 * Open All
	 */
	openAll() {
		this.openCloseAll('open')
	}

	/**
	 * Close All
	 */
	closeAll() {
		this.openCloseAll()
	}
}

export default Collapse
