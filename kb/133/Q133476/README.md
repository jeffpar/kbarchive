---
layout: page
title: "Q133476: Windows NT Mail Err Msg: Initialization of the Dynamic Link..."
permalink: kb/133/Q133476/
---

## Q133476: Windows NT Mail Err Msg: Initialization of the Dynamic Link...

	Article: Q133476
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	The following error message appears:
	
	  Initialization of the Dynamic Link Library OLECLI32.dll failed Abnormally
	
	CAUSE
	=====
	
	This problem occurs when you schedule Windows NT Mail (MSMAIL32.EXE) to start
	and Schedule Service is logged on as something other than system.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Set the Schedule Service to log on as a system account.
	
	2. Save key HKEY_USERS\<SID>\Software\Microsoft\mail.
	
	3. Restore to HKEY_USERS\default\Software\Microsoft\mail.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
