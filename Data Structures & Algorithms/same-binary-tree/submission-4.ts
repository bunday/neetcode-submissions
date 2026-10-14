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
        
        const stack = []
        stack.push([p,q])
        while (stack.length > 0) {
            const [x, y] = stack.pop()!
            if (!x && !y) continue
            if (!x || !y || x.val !== y.val) return false
            stack.push([x.left, y.left], [x.right, y.right])
        }
        return true
    }
}
