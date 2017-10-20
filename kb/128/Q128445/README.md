---
layout: page
title: "Q128445: Network Clients Cannot Print to Server LPR Printers"
permalink: /kb/128/Q128445/
---

## Q128445: Network Clients Cannot Print to Server LPR Printers

{% raw %}

	Article: Q128445
	Product(s): Microsoft Windows NT
	Version(s): 3.11 3.5 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user without administrator rights sends a print job from a client
	computer to a Windows NT computer that is using Line Printer Remote (LPR), Print
	Manager displays errors and does not print the jobs.
	
	CAUSE
	=====
	
	This problem occurs when an administrator has denied non-administrator users
	read and write permissions in the %SystemRoot% and SYSTEM32 directories.
	
	RESOLUTION
	==========
	
	To correct this problem, give non-administrators both read and write permissions
	in the %SystemRoot% and SYSTEM32 directories.
	
	Additional query words: prodnt queue
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11 3.5 4.0
	
	=============================================================================
	

{% endraw %}
