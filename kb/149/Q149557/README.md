---
layout: page
title: "Q149557: 16 Bit Windows Applications Only Scheduled Under System"
permalink: /kb/149/Q149557/
---

## Q149557: 16 Bit Windows Applications Only Scheduled Under System

	Article: Q149557
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start the AT Scheduler with an account other than the default system
	account, 16-bit Windows applications do not run when scheduled.
	
	CAUSE
	=====
	
	You can schedule a 16-bit Windows application to start interactively if you
	start the AT scheduler with the default system account.
	
	If you do not start the Windows on Windows (WOW) subsystem interactively,
	requests for required resources by the 16-bit Windows application are not
	granted and the application does not start.
	
	RESOLUTION
	==========
	
	To get the application to run under the Scheduler service you must reconfigure
	the Scheduler service to run using the system user account and specify that the
	application is to be run interactively.
	
	Additional query words: AT win16
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
