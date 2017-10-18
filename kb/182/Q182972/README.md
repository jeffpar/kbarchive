---
layout: page
title: "Q182972: Stepping Levels That Do Not Match May Cause Problems in WinNT"
permalink: kb/182/Q182972/
---

## Q182972: Stepping Levels That Do Not Match May Cause Problems in WinNT

	Article: Q182972
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding an additional processor to Windows NT, you may experience
	unpredictable behavior, such as poor performance, random hangs, data corruption,
	and STOP error messages.
	
	
	CAUSE
	=====
	
	These problems may occur if the Stepping levels of the processors in the
	computer do not match. To determine the Stepping levels, perform the following
	steps:
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  then click Windows NT Diagnostics.
	
	2. Click the System tab to view the properties of the processor(s).
	
	RESOLUTION
	==========
	
	To resolve this problem, remove or replace the processor.
	
	Additional query words: uniprocessor multiprocessor
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
