---
layout: page
title: "Q255187: Migrating a Print Server Between Windows NT 4.0 Server Computers"
permalink: /kb/255/Q255187/
---

## Q255187: Migrating a Print Server Between Windows NT 4.0 Server Computers

	Article: Q255187
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to migrate a print server configuration between
	Microsoft Windows NT Server 4.0-based computers without having to reinstall the
	printer.
	
	MORE INFORMATION
	================
	
	Use the Printmig.exe utility from Windows NT 4.0 Resource Kit Supplement 3 to
	first back up the print server configuration on the current print server and
	then restore the configuration to the other Windows NT Server 4.0-based
	computer.
	
	You cannot use the Printmig.exe utility to migrate a print server configuration
	between Windows NT 3.51-based computers or from a Windows NT 3.51-based computer
	to a Windows NT 4.0-based computer because the two versions use different print
	subsystems.
	
	For additional information using the Printmig.exe utility, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q214795 How to Back Up and Restore a Print Server Configuration
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
