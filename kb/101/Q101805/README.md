---
layout: page
title: "Q101805: Using .DBF-Style Help in FoxPro for Windows"
permalink: /kb/101/Q101805/
---

## Q101805: Using .DBF-Style Help in FoxPro for Windows

	Article: Q101805
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro for Windows uses the Windows-style Help system by default. However, if
	you prefer, you can use the .DBF-style Help system. To do so, enter the
	following command in the Command window:
	
	  SET HELP TO FOXHELP.DBF
	
	Pressing F1 or choosing Contents from the menu will then open the .DBF-style Help
	system.
	
	To return to the Windows-style Help system, enter the following command in the
	Command window:
	
	  SET HELP TO FOXHELP.HLP
	
	To permanently change to the .DBF-style Help system, add this statement to your
	CONFIG.FPW file:
	
	  HELP=FOXHELP.DBF
	
	REFERENCES
	==========
	
	For more information, see the "SET Commands" section of the "Installation and
	Configuration Guide." There is also a "Customizing Help" chapter in the
	"Developer's Guide" that explains how to create a personalized Help system. The
	FoxPro for Windows Distribution Kit (DK) includes a "Help Compiler Guide" to
	assist you in creating a personalized Windows Help system.
	
	Additional query words: VFoxWin FoxWin 2.50 HELP CONFIG.FPW FOXHELP
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
