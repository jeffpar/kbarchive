---
layout: page
title: "Q159840: Access Violation in Services.exe Clearing Event Log"
permalink: kb/159/Q159840/
---

## Q159840: Access Violation in Services.exe Clearing Event Log

	Article: Q159840
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an application opens the event log file, and then someone tries to clear the
	event log, either interactively or by using an application, while the
	application still has the event log file open, Services.exe may quit with an
	access violation.
	
	After Services.exe quits, RPC will no longer be available. After this occurs,
	%SystemRoot%\Drwtsn32.log will be created or updated. Often, NET USE sessions
	provided by the server remain active and new sessions can be established. The
	following messages may be returned to client requests involving the RPC
	services:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	-or-
	
	  Error 1722: The RPC server is unavailable.
	
	-or-
	
	  Error 1721: Not enough resources are available to complete this operation.
	
	RESOLUTION
	==========
	
	Be sure the application closes the event log file before clearing the event
	log.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: eventlog
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
