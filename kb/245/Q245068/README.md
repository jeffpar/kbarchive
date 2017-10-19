---
layout: page
title: "Q245068: Err Msg: Access Is Denied. You Don't Have Permissions Or..."
permalink: /kb/245/Q245068/
---

## Q245068: Err Msg: Access Is Denied. You Don't Have Permissions Or...

	Article: Q245068
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a file, you may receive the following error message:
	
	  Access is denied. You don't have permissions or the file is in use.
	
	CAUSE
	=====
	
	This behavior can occur if the file you are deleting is in use or damaged, or if
	you do not have permission to change the file.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Make sure you have the necessary NTFS file system permissions:
	
	  a. In Windows NT Explorer, right-click the file, and then click Properties.
	
	  b. On the Security tab, click Permissions.
	
	  c. In the Type Of Access box, click Change.
	
	2. If your permissions are correct but you still cannot gain access to the file,
	  use Systems Internals' Handle utility to troubleshoot the issue with this
	  file. The Handles utility lists information about open handles and files. To
	  obtain this utility, download it from the following Systems Internals Web
	  site:
	
	  http://www.sysinternals.com/nthandle.htm
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: handles ntfs permissions
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
