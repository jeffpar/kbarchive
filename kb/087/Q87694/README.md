---
layout: page
title: "Q87694: PRB: Menu Appears, Then Application Exits to Operating System"
permalink: /kb/087/Q87694/
---

## Q87694: PRB: Menu Appears, Then Application Exits to Operating System

	Article: Q87694
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft FoxPro menu program works in the development version of FoxPro.
	However, if you are using the distribution version of the files (a stand-alone
	executable), the menu appears, then the application exits to the main operating
	system environment, either MS-DOS, Windows or the Macintosh desktop.
	
	CAUSE
	=====
	
	When a menu is generated, running the .MPR file does not put you in an event
	loop or a wait state.
	
	RESOLUTION
	==========
	
	Incorporate a Foundation READ command into the application.
	
	NOTE: Although the Foundation READ can be used in Visual FoxPro, the preferred
	method is to incorporate a READ EVENT.
	
	MORE INFORMATION
	================
	
	Foundation READ
	---------------
	
	To incorporate a foundation READ command in an application, do the following:
	
	1. In FoxPro 2.x, in the Setup section of the menu or program, include the
	  following code:
	
	        PUBLIC m.xxx
	        m.xxx = .F.
	
	  In Visual FoxPro, in the Cleanup section of the menu or program, include the
	  following code prior to any other code:
	
	                READ EVENTS
	
	2. In FoxPro 2.x, in the Cleanup section of the menu or program, include the
	  following code prior to any other code:
	
	        READ VALID m.xxx
	
	3. In FoxPro 2.x, execute the following code when the user chooses the Quit menu
	  option:
	
	        m.xxx = .T.
	        CLEAR READ ALL
	
	  In Visual FoxPro, execute the following code when the user chooses the Quit
	  menu option:
	
	                CLEAR EVENTS
	
	For additional information, see the EX1.PJX example in the GOODIES\FNDATION
	subdirectory and the section on the READ command in the FoxPro version 2.0
	"Commands & Functions" or the FoxPro version 2.5 "Language Reference"
	manual.
	
	REFERENCES
	==========
	
	FoxPro for Windows Distribution Kit "User's Guide," page 12. FoxPro for MS-DOS
	Distribution Kit "User's Guide," page 10.
	
	Additional query words: VFoxMac FoxDos FoxWin FoxMac VFoxWin 2.50 2.50a kbvfp300 kbvfp500 kbvfp600 2.50b 2.50c 2.60 dos prompt .exe dk
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Version           : 2.00 2.5x 2.6x | 2.5x 2.6x 3.00
	
	=============================================================================
	
