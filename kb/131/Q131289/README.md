---
layout: page
title: "Q131289: How to Add to the System Menu as Visual FoxPro Starts"
permalink: /kb/131/Q131289/
---

## Q131289: How to Add to the System Menu as Visual FoxPro Starts

	Article: Q131289
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to add items to the System menu automatically
	as Visual FoxPro version 3.0 starts.
	
	MORE INFORMATION
	================
	
	The Example code adds menu items for the Calculator, Calendar, Filer, and
	Puzzle.
	
	Step-by-Step Example
	--------------------
	
	1. Open the VFPSTART.PRG file:
	  a. To do this from the MENU:
	
	     1. From the File menu, choose Open.
	
	     2. Change the Files of type to Program.
	
	     3. Select VFPSTART.PRG, and choose OK.
	
	  b. To do this from the Command window, issue the following command to bring
	     up the Modify Program window:
	
	        Modify Command VFPSTART.PRG
	
	2. Add the following source code to the beginning of the file:
	
	   DEFINE BAR 7 OF _msystem PROMPT '\-'
	     DEFINE BAR 8 OF _msystem PROMPT 'Ca\<lculator' ;
	        MESSAGE 'Perform calculations'
	     ON SELECTION BAR 8 OF _msystem ACTIVATE WINDOW CALCULATOR
	     DEFINE BAR 9 OF _msystem PROMPT 'Calendar/D\<iary' ;
	        MESSAGE 'Check dates and keep track of appointments'
	     ON SELECTION BAR 9 OF _msystem ACTIVATE WINDOW CALENDAR
	     DEFINE BAR 10 OF _msystem PROMPT '\<Filer' ;
	        MESSAGE 'Manage files and directories'
	     ON SELECTION BAR 10 OF _msystem ACTIVATE WINDOW FILER
	     DEFINE BAR 11 OF _msystem PROMPT 'Pu\<zzle' ;
	        MESSAGE 'Solve a puzzle'
	     ON SELECTION BAR 11 OF _msystem ACTIVATE WINDOW PUZZLE
	     SET SYSMENU SAVE
	
	3. Save the Program.
	
	4. Exit and restart FoxPro to make the changes take effect.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
