---
layout: page
title: "Q280527: XADM: Event 1016 Not Logged When Accessing Other User's Mailbox"
permalink: /kb/280/Q280527/
---

## Q280527: XADM: Event 1016 Not Logged When Accessing Other User's Mailbox

{% raw %}

	Article: Q280527
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An event ID 1016 message is not logged in the Application event log when you
	access another user's mailbox or schedule if a primary Windows NT account has
	not been assigned to that user's mailbox.
	
	MORE INFORMATION
	================
	
	When you try to access another user's mailbox or schedule, the following event
	ID is logged in the Application event log:
	
	  Event ID: 1016
	  Source: MSExchangeIS Private
	  Type: Success Audit
	  Category: Logons
	  Windows NT User <DOMAIN\username> logged on to UserA mailbox, and is not
	  the primary Windows NT account on this mailbox.
	
	This event is logged even if you have been granted permission to access the
	mailbox, and even when you successfully access the mailbox. However, this event
	is not logged if a primary Windows NT account is not assigned to the user's
	mailbox. This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
