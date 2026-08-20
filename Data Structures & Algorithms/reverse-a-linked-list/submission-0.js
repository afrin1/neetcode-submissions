/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head;
        let prev = null;
        let result = current;

        if (head === null) {
            return head;
        }

        while (current != null) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
            if (current !== null) {
                result = current;
            }
        }

        return result;
    }
}
