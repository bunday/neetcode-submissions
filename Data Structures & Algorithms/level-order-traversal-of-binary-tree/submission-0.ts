/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return []
        const map = new Map<number, number[]>()
        const stack = []
        stack.push([root, 0])
        while(stack.length > 0) {
            const [curr, currLevel] = stack.pop()
            const arr = map.get(currLevel) ?? []
            arr.push(curr.val)
            map.set(currLevel, arr)
            
            if(curr.right) stack.push([curr.right, currLevel+1])
            if(curr.left) stack.push([curr.left, currLevel+1])
        }

        return [...map.values()]
    }
}
