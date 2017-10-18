---
layout: page
title: "Q166348: Maximum Number of ACEs in an ACL"
permalink: kb/166/Q166348/
---

## Q166348: Maximum Number of ACEs in an ACL

	Article: Q166348
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add users or groups to the security permissions of an object share,
	file, or directory, you may receive the following error message:
	
	  You have exceeded the operating system's limit on the number of users and
	  groups that can be in a security information structure. Remove some users or
	  groups and try the operation again.
	
	Or, when using Cacls.exe to perform this function, you may receive the following
	error message:
	
	  The parameter is incorrect.
	
	CAUSE
	=====
	
	This error occurs when you reach the maximum number of Access Control Entries
	(ACE) for an object. The number of access control entries is limited to 1,820.
	Access control entries are kept in the Access Control List (ACL).
	
	
	Additional query words: max permission user group unexpected inconsistent unusual ase
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
