---
layout: page
title: "Q203620: XADM: NT Account for DL Owner Is Not Added to Permissions"
permalink: kb/203/Q203620/
---

## Q203620: XADM: NT Account for DL Owner Is Not Added to Permissions

	Article: Q203620
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 28-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the Owner mailbox when you create a Distribution List (DL), the
	primary Windows NT account of the Owner mailbox is placed in the "Windows NT
	accounts with permissions" list for the DL with the role of "User."
	
	If the Owner mailbox is assigned at a later date, or changed to another mailbox
	with a different primary Windows NT account, the "Windows NT accounts with
	permissions" list may not be updated to reflect the new primary Windows NT
	account.
	
	CAUSE
	=====
	
	The administrator modifying the DL does not have the Modify Permissions right
	for the site level naming context. The Modify Permissions right is granted only
	to administrators who have the Permissions Admin. role (that is, an
	administrator who has the Admin. role does not have the "right" to modify
	permissions).
	
	An administrator who does not have the right to modify permissions may only set
	permissions at object creation. All subsequent modifications to the object that
	require alterations to the "Windows NT accounts with permissions" list must be
	done by an administrator who has the right to modify permissions.
	
	WORKAROUND
	==========
	
	Give administrators who need the ability to modify the permissions of DLs or any
	other object in the site naming context the role of Permissions Admin. for the
	site naming context.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
