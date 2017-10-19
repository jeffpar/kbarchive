---
layout: page
title: "Q152280: How To Call a Visual FoxPro Application Using AppleScript"
permalink: /kb/152/Q152280/
---

## Q152280: How To Call a Visual FoxPro Application Using AppleScript

	Article: Q152280
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Since Visual FoxPro for Macintosh does not create stand-alone executables as
	FoxPro 2.6 did, AppleScript will not be able to directly call the executable
	with the TELL statement. This behavior occurs because the executable will
	require the use of one of the Visual FoxPro Support Library files to run.
	AppleScript will have to TELL the Visual FoxPro Support Library.
	
	MORE INFORMATION
	================
	
	The sample AppleScript below will TELL the Visual FoxPro Support Library to open
	a Visual FoxPro executable named "MyProgram.exe" that is located in the MyApps
	folder on the Macintosh HD, activate it, and then have it display a Wait Window
	containing the text "Hello World!":
	
	     tell application "VFP Support Library PPC"
	        open "Macintosh HD:MyApps:MyProgram.Exe"
	        activate
	        Do Script "WAIT WINDOW 'Hello World!'"
	     end tell
	
	Note that the Visual FoxPro executable must have a READ EVENTS in it so it does
	not quit as soon as it is finished launching.
	
	The main program of the MyProgram.Exe file should contain code similar to the
	following:
	
	          Do Mymenu.mpr
	          READ EVENTS
	
	The Mymenu.mpr program has an option to CLEAR EVENTS to allow the executable to
	be exited. For more information on READ EVENTS and CLEAR EVENTS, see Microsoft
	Visual FoxPro Online Help.
	
	Applescript is manufactured by Apple Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
