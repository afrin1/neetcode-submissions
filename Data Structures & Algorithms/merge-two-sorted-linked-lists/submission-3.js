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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let c1 = list1;
        let c2 = list2;
        let prev = null;
        let head = null;

        if (c1 === null && c2 === null) {
            return null;
        }

       

        if (c1 === null && c2 !== null) {
          console.log("cond 4: ", c2)
            head = c2;
            prev = c2;
            c2 = c2.next;
        }

        else if (c1 !== null && c2 === null) {
            head = c1;
            prev = c1;
            c1 = c1.next;
        }
   
    else if (c1 !== null && c2 !== null && c1.val <= c2.val) {
            head = c1;
            prev = c1;
            c1 = c1.next;
        } 
   else if (c1 !== null && c2 !== null && c1.val > c2.val) { 
            head = c2;
            prev = c2;
            c2 = c2.next;
        }
   


        while (c1 !== null && c2 !== null) {
            console.log(`c1: ${c1.val}, c2: ${c2.val}`)
            if (c1.val <= c2.val) {
                prev.next = c1;
                prev = c1;
                c1 = c1.next;
            } else {
                prev.next = c2;
                prev = c2;
                c2 = c2.next;
            }
        }

        while (c1 !== null) {
            console.log(`c1 is not null : ${c1.val}`)
            prev.next = c1;
            prev = c1;
            c1 = c1.next;
        }
        while (c2 !== null) {
            console.log(`c2 is not null : ${c2.val}`)
            prev.next = c2;
            prev = c2;
            c2 = c2.next;
        }

        return head;
    }
}
