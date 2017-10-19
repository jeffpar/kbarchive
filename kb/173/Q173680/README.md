---
layout: page
title: "Q173680: XADM: New User Inherits Permissions of Deleted User"
permalink: /kb/173/Q173680/
---

## Q173680: XADM: New User Inherits Permissions of Deleted User

	Article: Q173680
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Client Permissions dialog box of the EventConfig_ServerName system folder
	contains Distinguished Names (DNs) of users that have been deleted from the
	Directory. If a new user is added with the same DN, he or she will assume the
	permissions that belonged to the deleted user.
	
	RESOLUTION
	==========
	
	This is by design. This is consistent with all other Client Permission dialog
	boxes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
