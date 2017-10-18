---
layout: page
title: "Q202220: XADM: Using Mailbox Template w/Distribution Lists Between Sites"
permalink: kb/202/Q202220/
---

## Q202220: XADM: Using Mailbox Template w/Distribution Lists Between Sites

	Article: Q202220
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program in an Exchange
	Server version 5.5 site to duplicate a mailbox template with Exchange Server
	version 5.0 site distribution lists, or vice-versa, you get the following error
	message:
	
	  The object 'name' with the directory name 'alias' already exists. Enter a
	  unique alias name on the general property page for this mail recipient.
	
	CAUSE
	=====
	
	If you have a version 5.5 site with a mailbox template that contains a
	distribution list from a version 5.0 site, when you click Duplicate on the File
	menu of the Administrator program on this template to create a new mailbox, the
	mailbox is created, but it is invalid. The new mailbox does not allow the user
	to use it in some cases. These same results occur with a version 5.0 template
	and version 5.5 distribution lists from another site, and you receive the same
	error message.
	
	WORKAROUND
	==========
	
	- Don't use distribution lists in your mailbox templates from other sites of a
	  different version.
	
	-or-
	
	- Upgrade all sites to the same version.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
