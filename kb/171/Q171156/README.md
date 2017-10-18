---
layout: page
title: "Q171156: Admin Wizard Creates Home Directories with Incorrect Permissions"
permalink: kb/171/Q171156/
---

## Q171156: Admin Wizard Creates Home Directories with Incorrect Permissions

	Article: Q171156
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Administrative Wizard under Windows NT Server 4.0, the Add User
	Accounts option creates a User's Home Directory. The directory is created with
	the Everyone group having Full Control rights. It should be created with only
	the Owner having Full Control permissions.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Use User Manager for Domains to create the User's Home Directory; it will
	  give the directory the correct permissions, and the user will have Full
	  Control.
	
	  -or-
	
	- After creating the directory with the Administrative Wizard, use Explorer to
	  modify the permissions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt usrmgr admin tools
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
