---
layout: page
title: "Q152366: How To Add Calculator, Calendar, Puzzle, Filer to System Menu"
permalink: /kb/152/Q152366/
---

## Q152366: How To Add Calculator, Calendar, Puzzle, Filer to System Menu

{% raw %}

	Article: Q152366
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro applets, Calculator, Calendar, Filer, and Puzzle, are not included on
	any menu. The code below demonstrates how to add these items to the menu.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     DEFINE BAR 9 OF _mwindow PROMPT "\-"
	        DEFINE BAR 10 OF _mwindow PROMPT "Ca\<lculator" ;
	             MESSAGE "Perform calculations"
	        ON SELECTION BAR 10 OF _mwindow ACTIVATE WINDOW CALCULATOR
	        DEFINE BAR 11 OF _mwindow PROMPT "Calendar/D\<iary" ;
	             MESSAGE "Check dates and keep track of appointments"
	        ON SELECTION BAR 11 OF _mwindow ACTIVATE WINDOW CALENDAR
	        DEFINE BAR 12 OF _mwindow PROMPT "\<Filer" ;
	             MESSAGE "Manage files and directories"
	        ON SELECTION BAR 12 OF _mwindow ACTIVATE WINDOW FILER
	        DEFINE BAR 13 OF _mwindow PROMPT "Pu\<zzle" ;
	             MESSAGE "Solve a puzzle"
	        ON SELECTION BAR 13 OF _mwindow ACTIVATE WINDOW PUZZLE
	        SET SYSMENU SAVE
	
	Additional query words: VFoxWin VFoxMac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
