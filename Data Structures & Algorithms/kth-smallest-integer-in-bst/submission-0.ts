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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const stack = []
        let curr = root
        let count = 0

        while (curr || stack.length > 0) {
            // go as far left as possible, pushing on the way
            while (curr) {
                stack.push(curr)
                curr = curr.left
            }
            // the top of the stack is the next smallest
            const node = stack.pop()!
            count++
            if (count === k) return node.val
            // then move to the right subtree
            curr = node.right
        }
    }
}
