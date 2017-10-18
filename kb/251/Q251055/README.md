---
layout: page
title: "Q251055: XADM: Error Message: Account Information Is Bad"
permalink: kb/251/Q251055/
---

## Q251055: XADM: Error Message: Account Information Is Bad

	Article: Q251055
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are installing Exchange Server 5.5 on a Windows 2000-based member
	server, you receive the following error message after you enter the service
	account information:
	
	  Account information is bad.
	
	CAUSE
	=====
	
	The Exchange Server service account does not have the required permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, add the Exchange Server service account to the local
	Power Users group or local Administrators group on a member server. On a domain
	controller, add the account to the built-in Administrators group.
	
	MORE INFORMATION
	================
	
	The minimum rights necessary for the Exchange Server service account on a member
	server are Power Users rights. However, if installation problems occur when you
	use the local Power Users group, add the Exchange Server service account to the
	local Administrators group. Also, if the local Power Users group is not
	available because of the type of installation that was performed, use the local
	Administrators group.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
