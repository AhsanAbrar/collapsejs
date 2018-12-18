class Item {
	/**
	 * Instantiate the collapse item class
	 */
	constructor(collapse, header, body) {
		this.collapse = collapse
		this.header = header
		this.body = body
		this.isActive = true

		this.assignEvents()
	}

	/**
	 * Initialize Event Listeners
	 */
	assignEvents() {
		this.header.addEventListener('click', this.onClick.bind(this))
	}

	/**
	 * Handle OnClick Event
	 */
	onClick() {
		if ((!this.collapse.multiple && !this.collapse.collapsible) || (this.collapse.collapsible && !this.isActive))
			this.collapse.openCloseAll()

		this.toggle()
	}

	/**
	 * Toggle
	 */
	toggle() {
		this.isActive ? this.close() : this.open()
	}

	/**
	 * Open
	 */
	open() {
		this.body.style.height = this.body.scrollHeight + 'px'

		this.header.classList.add('open')

		this.isActive = true
	}

	/**
	 * Close
	 */
	close() {
		this.body.style.height = 0

		this.header.classList.remove('open')

		this.isActive = false
	}
}

export default Item
