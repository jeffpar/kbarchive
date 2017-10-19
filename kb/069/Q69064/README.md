---
layout: page
title: "Q69064: BUG: Brown Screen Color May Change to Yellow After Running PWB"
permalink: /kb/069/Q69064/
---

## Q69064: BUG: Brown Screen Color May Change to Yellow After Running PWB

	Article: Q69064
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1,2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running the Programmer's WorkBench (PWB), the brown screen color may
	change to yellow until the system is rebooted or the video mode is reset.
	
	For example, if you run PWB and then run the Microsoft (M) Editor, the brown
	characters will appear yellow.
	
	To work around this problem, you can create a batch file called PWB.BAT. In this
	file, you can start PWB and then reset the video mode. For example:
	
	  pwb.bat
	  pwb %1 %2 %3 %4
	  mode co80,25
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 1.0 and 1.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 1.00 1.10 2.00 2.10.49 buglist1.00 buglist1.10 buglist2.00 buglist2.10.49
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:1.0,1.1,2.0,2.1.49
	
	=============================================================================
	
