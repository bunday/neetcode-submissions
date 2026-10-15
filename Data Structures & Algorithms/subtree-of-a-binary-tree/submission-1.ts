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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root) return !subRoot

        return this.isSame(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

    isSame(a: TreeNode | null, b: TreeNode | null){
        if(!a && !b) return true
        if( (a &&!b) || (!a && b)) return false
        if(a.val !== b.val) return false

        return this.isSame(a.left, b.left) && this.isSame(a.right, b.right)
    }
}
