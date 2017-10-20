---
layout: page
title: "Q104180: Err Msg: Error writing to LPT1:"
permalink: /kb/104/Q104180/
---

## Q104180: Err Msg: Error writing to LPT1:

{% raw %}

	Article: Q104180
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when trying to print under Windows NT or
	Windows NT Advanced Server:
	
	  Error writing to LPT1:
	  The system cannot find the file specified.
	  Do you wish to retry or cancel the job?
	
	NOTE: This problem may occur with communications ports as well (COM1: for
	example).
	
	CAUSE
	=====
	
	The above error message may appear when the CMOS settings are not correctly set
	for your local print port. Even if a local print port is disabled in your
	computer CMOS settings, Windows NT still allows you to install and share a local
	printer.
	
	RESOLUTION
	==========
	
	To resolve the error, activate the print port in your CMOS settings. See your
	computer documentation for details.
	
	Additional query words: prodnt COM1 COM COMM
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

{% endraw %}
