---
layout: page
title: "Q179220: XADM: Error Trying to Delete Mailbox from Mailbox Resources"
permalink: /kb/179/Q179220/
---

## Q179220: XADM: Error Trying to Delete Mailbox from Mailbox Resources

{% raw %}

	Article: Q179220
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Microsoft Exchange Server, version 5.0, and you try to
	delete a mailbox from the Mailbox Resources leaf under Server, Private
	Information Store, you will receive the following error message:
	
	  The object is no longer available. Press F5 to refresh the display, and then
	  try again.
	  Microsoft Exchange Administrator
	  ID no: C1030745
	
	CAUSE
	=====
	
	The Exchange Server Administrator program does not allow the object to be
	deleted in this way.
	
	WORKAROUND
	==========
	
	To delete the mailbox, select it from the global address list (GAL) or a valid
	Recipients Container, and then select Delete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Administrator
	program version 5.0. This has been fixed in Microsoft Exchange version 5.5.
	
	MORE INFORMATION
	================
	
	In Exchange version 5.5, under Server, Private Information Store, Mailbox
	Resources, the Edit, Delete menu item is dimmed, and the Delete button is
	disabled.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
