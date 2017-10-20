---
layout: page
title: "Q202105: XFOR: Accept/Decline Message ID Mismatch on a Meeting Invitatio"
permalink: /kb/202/Q202105/
---

## Q202105: XFOR: Accept/Decline Message ID Mismatch on a Meeting Invitatio

{% raw %}

	Article: Q202105
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When a meeting invitation is sent from a user on one Exchange server to a user
	on another server, the message ID may be mismatched from the original invitation
	message ID. Consequently, the Accept/Decline message received from the invitee
	does not update the invitee response list.
	
	MORE INFORMATION
	================
	
	If the times of the two Exchange Servers are not synchronized, then the message
	ID of the Accept/Decline message (produced by the invitee when accepting or
	declining the meeting invitation) is mismatched from the original invitation
	message ID.
	
	This problem occurs if the Accept/Decline message is sent within the time
	difference between the two servers. That is, if the time difference between the
	two Exchange servers is five minutes, an Accept/Decline message sent within five
	minutes of receiving the invitation message can result in the behavior reported
	above. In conclusion, the server times need to be synchronized as close as
	possible.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
