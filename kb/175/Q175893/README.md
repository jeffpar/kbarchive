---
layout: page
title: "Q175893: LexMark Monitor Hangs Spoolss and Creates 100 Percent CPU Usage"
permalink: /kb/175/Q175893/
---

## Q175893: LexMark Monitor Hangs Spoolss and Creates 100 Percent CPU Usage

	Article: Q175893
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	
	When you use LexMark TCP/IP print monitor with a computer running Windows
	NT 4.0, you may experience very slow printing and Spoolss.exe seems to stop
	responding (hang).
	
	CAUSE
	=====
	
	The problem has been experienced using 80 LexMark computers to connect printers
	to a Token Ring network.
	
	A user-mode dump of Spoolss shows 85 spooler threads, of which 28 run in a tight
	loop in LexMark print monitor. The threads looping in LexMark monitor wait for
	20 minutes on an incoming printer message and compete for CPU cycles during this
	time. This slows down the Spoolss process. The problem increases when adding
	LexMark computers to the network.
	
	RESOLUTION
	==========
	
	There is a new LexMark print monitor (version 3.03) available on LexMark's Web
	site. If you need help on setup of the new print monitor, call LexMark's
	Technical Support Center.
	
	
	The LexMark products discussed here are manufactured by LexMark Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
