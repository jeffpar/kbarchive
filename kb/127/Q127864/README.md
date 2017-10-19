---
layout: page
title: "Q127864: User Manager for Domains Does Not Set Correct Access"
permalink: /kb/127/Q127864/
---

## Q127864: User Manager for Domains Does Not Set Correct Access

	Article: Q127864
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run User manager on a computer running Windows NT and create a new user
	account with the Profile Local Path specifying <DRIVE>%USERNAME% (where
	<drive> is NTFS formatted), the directory that is created matches the
	username and the permissions are set so that only the specified user can access
	the directory.
	
	When you run Windows NT Server Tools User Manager for Domains on a computer
	running Windows 3.1 or Windows for Workgroups and create a new user account with
	the Profile Local Path specifying <DRIVE>%USERNAME% (where <drive>
	is NTFS formatted), the directory that is created has the permissions set so
	that everyone has access to the user's directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server Tools. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, create new users from a computer running Windows NT
	Workstation or Server in the domain.
	
	You can still use Windows NT Server Tools to administer existing users.
	
	Additional query words: prodnt wfw wfwg user name file system
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
