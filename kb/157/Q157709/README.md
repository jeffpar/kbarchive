---
layout: page
title: "Q157709: XCON: No Notification when Resource Cannot Accept Invitation"
permalink: kb/157/Q157709/
---

## Q157709: XCON: No Notification when Resource Cannot Accept Invitation

	Article: Q157709
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Microsoft Schedule+ version 1.x and Microsoft Mail and you
	attempt to invite a resource when creating an appointment, you may not be
	notified if a conflicting appointment exists in the resource's appointment book.
	This problem occurs when the resource account is managed by Microsoft Exchange
	Server and the resource account has been configured to automatically accept
	meeting requests.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0.
	This problem has been corrected in the latest U.S. Service Pack for Exchange
	Server version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After you install the Service Pack, you are notified when the resource account
	must decline the invitation because a conflicting appointment exists. However,
	you are not notified if the appointment cannot be accepted because of network
	problems or because the Microsoft Exchange Server computer is not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
