---
layout: page
title: "Q245174: Account Operators Cannot Administer Certain User Accounts"
permalink: kb/245/Q245174/
---

## Q245174: Account Operators Cannot Administer Certain User Accounts

	Article: Q245174
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to manage certain user accounts from a computer running
	Microsoft Windows NT Server 4.0 and you are a member of the Account Operators
	group for a domain, you may receive an 'Access Denied' error message.
	
	CAUSE
	=====
	
	This behavior can occur if the user accounts that you are trying to manage are
	members of a restricted group.
	
	RESOLUTION
	==========
	
	To work around this behavior, find out which groups the user accounts belong to,
	and ask your system administrator about modifying the security rights.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By default, members of the Account Operators group cannot manage user accounts
	that belong to any of the following groups:
	
	- Account Operators (local)
	
	- Administrators (local)
	
	- Backup Operators (local)
	
	- Print Operators (local)
	
	- Server Operators (local)
	
	- Domain Admins (global)
	
	If one of the user accounts does not belong to any of the listed groups, check
	whether it is a member of some global group that is in turn a member of one of
	the five restricted local groups. If this is the case, you still cannot manage
	that user account.
	
	For more information about the restrictions, see Chapter 2, 'Working With User
	and Group Accounts', in 'Concepts and Planning', a book that is part of the
	Microsoft Windows NT Server 4.0 documentation package.
	
	Additional query words: modify rights
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
