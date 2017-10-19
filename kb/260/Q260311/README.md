---
layout: page
title: "Q260311: XADM: Mailbox Manager Stops Responding Clicking the Policies Tab"
permalink: /kb/260/Q260311/
---

## Q260311: XADM: Mailbox Manager Stops Responding Clicking the Policies Tab

	Article: Q260311
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the Policies tab in Mailbox Manager, the information
	is not displayed and you do not receive an error message or any response from
	the Exchange Administrator program.
	
	CAUSE
	=====
	
	When you create a recipient container object in an invalid location in the
	Exchange hierarchy, the .dll file for mailbox manager is unable to display any
	valid recipient containers on the Policies tab. Because the Exchange
	Administrator program has more strict rules than the Exchange Server directory,
	the object cannot be created by the Exchange Administrator program. You can,
	however, create the object by using a client such as a writeable Lightweight
	Directory Access Protocol (LDAP) client or third-party Directory Application
	Programming Interface (DAPI) utility.
	
	RESOLUTION
	==========
	
	To get a response back from the Mailbox Manager program, you must remove the
	invalid object. It may be possible to remove this object with the Exchange
	Administrator program, but it may be necessary to use the utility that created
	the object.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
