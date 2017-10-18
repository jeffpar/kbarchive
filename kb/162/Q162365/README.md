---
layout: page
title: "Q162365: How to Delete Print Jobs That Will Not Print"
permalink: kb/162/Q162365/
---

## Q162365: How to Delete Print Jobs That Will Not Print

	Article: Q162365
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A print job is stuck in the printer queue of the Windows NT print server and
	cannot be deleted.
	
	RESOLUTION
	==========
	
	To remove the print job, follow these steps. On the print server:
	
	1. Close Print Manager in Windows NT 3.5x. Close the Printers Folder in Windows
	  NT 4.0.
	
	2. In Control Panel, double-click the Services icon, click the Spooler Service,
	  and then click Stop. If you are using TCP/IP Printing Services, click it and
	  then click Stop.
	
	3. Delete the *.spl and *.shd files that show the approximate time and date of
	  the print job causing the problem. They are in the
	  %Winroot%\System32\Spool\Printers directory.
	
	  NOTE: In some cases, Windows NT may not allow the *.spl file(s) to be deleted
	  or renamed. Renaming the *.shd file and restarting the spooler service may be
	  enough to clear the problem.
	
	4. Restart the services stopped in step 2.
	
	MORE INFORMATION
	================
	
	With corrupt or too many .spl and .shd files, a Dr. Watson or Application Error
	in Spools may also occur.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q147347
	  TITLE : Application Error in SPOOLSS.EXE When Printing
	
	Additional query words: spoolss.exe dr watson access violation application error
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
