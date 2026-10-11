class MinStack {
    stackA = new Array<number>()
    stackB = new Array<number>()
    head = -1
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.head++
        this.stackA[this.head] = val
        if(this.head === 0) {
            this.stackB[this.head] = val
        } else {
            if(val < this.stackB[this.head-1]) {
                this.stackB[this.head] = val
            } else {
                this.stackB[this.head] = this.stackB[this.head-1]
            }
        }
        
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.head--
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stackA[this.head]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stackB[this.head]
    }
}
