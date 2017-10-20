---
layout: page
title: "Q236168: XADM: Administrator Able to Change Mailbox Permissions"
permalink: /kb/236/Q236168/
---

## Q236168: XADM: Administrator Able to Change Mailbox Permissions

{% raw %}

	Article: Q236168
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	An Exchange Server administrator with the Admin. role can edit and change
	mailbox permissions on the Permissions tab when the mailbox is initially
	created. If the same administrator attempts to modify or change the same
	attributes on an existing mailbox at a later time, he or she receives an error
	stating that he or she has insufficient access rights.
	
	While creating the mailbox, the assignment of permissions and other operations
	are treated as a single task. Because users with the Admin. role can create
	mailboxes, they can assign permissions while creating mailboxes.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
