---
layout: page
title: "Q136950: Delay in Running Programs If CSNW Cannot Find Preferred Server"
permalink: kb/136/Q136950/
---

## Q136950: Delay in Running Programs If CSNW Cannot Find Preferred Server

	Article: Q136950
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Client Services for NetWare (CSNW) in Windows NT 3.51 Workstation and
	it cannot find the preferred server, any program you launch runs after a
	10-second delay.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Run an executable file multiple times from the same Command Prompt.
	
	  -or-
	
	- From the %SystemRoot%\SYSTEM32\AUTOEXEC.NT file remove the line:
	
	  lh %SystemRoot%\system32\nw16
	
	  NOTE: This option prevents Netware aware programs from running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt slow delay performance
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	
