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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        if(!root) return true
        const stack = []
        stack.push([root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])
        

        while(stack.length > 0) {
            const [curr, min, max] = stack.pop()
            if(min < curr.val && curr.val < max) {
                if(curr.left) {
                    stack.push([curr.left, min, curr.val])
                }
                if(curr.right) {
                    stack.push([curr.right, curr.val, max])
                }
            } else return false
            
            
        }
        return true
    }
}
