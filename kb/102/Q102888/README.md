---
layout: page
title: "Q102888: Saving from Word or Excel Resets NTFS Security Permissions"
permalink: /kb/102/Q102888/
---

## Q102888: Saving from Word or Excel Resets NTFS Security Permissions

	Article: Q102888
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NTFS security permissions are reset when you save a file from Microsoft Word for
	Windows or Microsoft Excel.
	
	CAUSE
	=====
	
	When Word or Excel opens a file for editing, it saves a copy of the original
	file as a temporary file, and uses the temporary file for storing modifications.
	When you issue a Save command, the original file is deleted, and the temporary
	file is renamed to the original file name. Since newly created files in a
	directory inherit the security permissions of that directory, the security
	permissions on the file will be reset to those of the directory.
	
	RESOLUTION
	==========
	
	One possible workaround is to place all public files in the same directory and
	assign the permissions there. If a file needs specific permissions, then this
	file is probably for a specific group or user and should be in the user's home
	directory or a subdirectory of it with special permissions.
	
	Another workaround is to modify the permissions on the directory and the file to
	prevent the user from overwriting the original file. This can be accomplished by
	modifying the permissions on the directory and file to not allow file deletions.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
