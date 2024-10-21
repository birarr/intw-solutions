var middleNode = function(head) {
    let ahead = head
    let slow = head

    while(ahead && ahead.next && slow) {
        ahead = ahead.next.next
        slow = slow.next
    }

    return slow
};