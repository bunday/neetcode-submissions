class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {

        const bag = new Map<number, number>()
        const stack = new Array<number>()
        let index = 0;
        while(index < position.length) {
            bag.set(position[index], speed[index])
            index++
        }

        position.sort((a,b)=> b-a)
        console.log(position, bag)

        index = 0;
        while(index < position.length){
            const current = position[index]
            if(stack.length === 0) {
                stack.push(current)
            } else {
                const topOfStack = stack[stack.length-1]
                const tosSpeed = (target - topOfStack)/bag.get(topOfStack)

                const currentSpeed = (target - current)/bag.get(current)

                if(currentSpeed > tosSpeed) {
                    stack.push(current)
                }
            }


            index++
        }


        // const map = new Map<string, number[]>()

        // let index = 0;
        // while(index < position.length) {
        //     const trials = ((target - position[index])/speed[index]).toString()

        //     const current = map.get(trials) ?? []
        //     current.push(index)
        //     map.set(trials, current)

        //     index++
        // }

        // return [...map.values()].length
        return stack.length
    }
}
