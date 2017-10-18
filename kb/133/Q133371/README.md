---
layout: page
title: "Q133371: Encarta: Title Bar Overlaps Windows 95/98-Style Title Bar"
permalink: kb/133/Q133371/
---

## Q133371: Encarta: Title Bar Overlaps Windows 95/98-Style Title Bar

	Article: Q133371
	Product(s): Microsoft Home Kids Products
	Version(s): 1995 edition; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Encarta, the Microsoft Windows version 3.x title bar is
	displayed over the Windows 95/98 style title bar, preventing use of the
	Microsoft Encarta menu bar selections.
	
	CAUSE
	=====
	
	Terminate-and-stay-resident (TSR) programs that modify the title bar of
	Microsoft Encarta may cause this problem. Typically, these TSRs add information
	to the title bar, such as the current time or the amount of available system
	resources.
	
	The problem occurs with the following programs:
	
	- Winbar: A Windows shareware application.
	
	- Title Bar Clock: A Visual Basic utility distributed as part of Chapter 2 of
	  Paul Bonner's "PC Magazine Visual Basic Utilities" book.
	
	- Winexit: A Windows shareware application.
	
	
	RESOLUTION
	==========
	
	Disable the problem-causing TSRs.
	
	Win.ini
	-------
	
	NOTE: These steps involve modifying .ini files. For more information about
	accomplishing this task in Windows, see your Windows printed documentation or
	online Help.
	
	To disable TSRs in the Win.ini file, do the following:
	
	1. Open the WIN.INI file in a text editor such as Notepad.
	
	2. For testing purposes, place a ";" (without the quotes) at the beginning of
	  the lines
	
	  Load=
	  Run=
	
	  to prevent the information on these lines from executing.
	
	3. Restart Microsoft Windows. If the problem no longer occurs, add one entry at
	  a time back to each line and restart Microsoft Windows. Adding one entry at a
	  time isolates the problem to a particular TSR program.
	
	MORE INFORMATION
	================
	
	Do not load these TSR programs in conjunction with Microsoft Encarta 1995. These
	types of TSRs will normally load either through the Run= or Load= lines in the
	Win.ini file, or through the Startup group in Windows.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1995 95 Encarta95 VB multi media multimedia multi-media terminate and stay resident bar
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996 kbEncartaEnCyc1995Mac
	Version           : :1995 edition; WINDOWS:
	
	=============================================================================
	
