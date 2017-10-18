---
layout: page
title: "Q110851: Erratic Mouse with Gateway 2000 P5-60 Computer"
permalink: kb/110/Q110851/
---

## Q110851: Erratic Mouse with Gateway 2000 P5-60 Computer

	Article: Q110851
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Windows NT or Windows NT Advanced Server on a Gateway
	2000 P5-60 the mouse appears jumpy, hesitant, or stops working altogether.
	
	CAUSE
	=====
	
	According to Gateway 2000 technical support the Advanced ISA Timing on the P5-60
	should be disabled by default. However, it is enabled on many of their
	computers.
	
	RESOLUTION
	==========
	
	To correct the erratic mouse behavior, change the Enhanced ISA Timing setting in
	the Advanced CMOS setup to disabled.
	
	For additional information on Gateway computers, contact Gateway 2000 technical
	support at (800) 846-2301.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt pentium
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
