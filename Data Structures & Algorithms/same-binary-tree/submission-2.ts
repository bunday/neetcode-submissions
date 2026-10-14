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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if(!p && !q) return true
        if(!p || !q) return false
        const stack = []
        let result = true
        stack.push([p,q])
        while(stack.length > 0 && result) {
            const [x, y] = stack.pop()
            // if(x.val !== y.val) result = false

            if((x.val !== y.val) || (x.left && !y.left) || (!x.left && y.left)
            || (x.right && !y.right) || (!x.right && y.right)) result =false

            if(x.left && y.left) stack.push([x.left, y.left])
            if(x.right && y.right) stack.push([x.right, y.right])
        }
        return result
    }
}
