class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {

        const bag = new Map<number, number>()
        const state:number[][] = []
        const stack = new Array<number[]>()
        for(let i=0; i<position.length; i++) {
            state.push([position[i],speed[i]])
        }
        state.sort((a, b) => b[0] - a[0])
        console.log(state)

        let index = 0;
        while(index < state.length){
            const [currPos, currSpeed] = state[index]
            if(stack.length === 0) {
                stack.push([currPos, currSpeed])
            } else {
                const [stackPos, stackSpeed] = stack[stack.length-1]
                const stackTime = (target - stackPos)/stackSpeed

                const currentTime = (target - currPos)/currSpeed

                if(currentTime > stackTime) {
                    stack.push([currPos, currSpeed])
                }
            }


            index++
        }

        return stack.length
    }
}
