---
layout: page
title: "Q155728: Changing Access Rights for a User Changes Group Rights"
permalink: kb/155/Q155728/
---

## Q155728: Changing Access Rights for a User Changes Group Rights

	Article: Q155728
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the File And Printer Sharing For NetWare Networks service,
	changing the share access rights for a user also changes the rights for a group
	with the same name.
	
	CAUSE
	=====
	
	Although users and groups are listed separately in the access control list for
	the share, only the name is referenced when a change is made. If you change the
	access rights for a user, the access rights for a group with the same name are
	changed. If you change the access rights for a group, the access rights for a
	user with the same name are changed.
	
	RESOLUTION
	==========
	
	To work around this behavior, change the name of a group or user so there are no
	duplicate names.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
