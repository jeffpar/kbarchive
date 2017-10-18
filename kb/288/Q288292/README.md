---
layout: page
title: "Q288292: Managing File and Folder Permissions with Command Line Utility"
permalink: kb/288/Q288292/
---

## Q288292: Managing File and Folder Permissions with Command Line Utility

	Article: Q288292
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the command line utility to take ownership of
	all files and subdirectories in a folder, and to grant the Administrators group
	Full Control of these objects.
	
	MORE INFORMATION
	================
	
	1. Start a command prompt.
	
	2. To set ownership of a folder and all of its contents, run the following
	  command:
	
	  "subinacl /subdirectories *.* /setowner=domainname\user" (without the
	  quotation marks)
	
	3. To grant the Administrators group Full Control permissions to the folder and
	  its contents, run the following command:
	
	  "cacls *.* /t /e /g domainname\administrator:f" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
