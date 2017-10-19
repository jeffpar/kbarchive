---
layout: page
title: "Q200500: XADM: Move Server Stops When It Detects Duplicate Names"
permalink: /kb/200/Q200500/
---

## Q200500: XADM: Move Server Stops When It Detects Duplicate Names

	Article: Q200500
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Move Server Wizard doesn't finish, and you receive the following error
	message:
	
	  There were unexpected duplicate collisions with objects encountered in the
	  site the server attempted to join. Please resolve these duplicates and rerun
	  the Move Server Wizard.
	
	The application event log also registers an accompanying warning with the
	following description:
	
	  The object <object name> caused a collision with an object in the site
	  the server attempted to join.
	
	CAUSE
	=====
	
	When you run the Move Server Wizard, if a Recipient container that is being
	moved has the same name as a mailbox in the site where the server is being moved
	to, a "collision" occurs during the mapping phase when the directory name
	duplicates are actually detected. The collision causes the Move Server operation
	to end.
	
	WORKAROUND
	==========
	
	Remove either the mailbox or container that has the same name as the one being
	moved.
	
	A point to remember: If you are removing a container, all objects in that
	container are removed also. In that case, it may be easier to remove one mailbox
	and then recreate it later rather than removing the container with the same name
	and have all objects in that container be removed also.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
