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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        // base case?
        if(!root) return 0
        const stack = []
        stack.push([root, Number.NEGATIVE_INFINITY])
        let count = 0;
        while(stack.length > 0) {
            const [curr, greatest] = stack.pop()
            if(curr.val >= greatest) count++
            const newGreat = Math.max(curr.val, greatest)
            

            if(curr.left)stack.push([curr.left, newGreat])
            if(curr.right)stack.push([curr.right, newGreat])
        }

        return count
    }
}
