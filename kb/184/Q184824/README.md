---
layout: page
title: "Q184824: NTReskit Supp 3: Printmig.exe v1.02 Hangs When Starting Spooler"
permalink: kb/184/Q184824/
---

## Q184824: NTReskit Supp 3: Printmig.exe v1.02 Hangs When Starting Spooler

	Article: Q184824
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Resource Kit utility Microsoft Printer Migrator ver 1.02 stops responding
	(hangs) when it tries to start the Spooler Service. The only way to exit the
	application is to terminate the process.
	
	CAUSE
	=====
	
	If the Microsoft Printer Migrator version 1.02 is started from a sub directory
	that has a long file name (LFN), the application will stop responding (hang).
	This behavior will occur with Windows NT Explorer or File Manager.
	
	RESOLUTION
	==========
	
	Run the application from a sub directory that follows the 8.3 naming convention.
	Or run the application from an MS-DOS command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Printer Migrator
	version 1.02. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: reskit printmig printmig.exe pm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
