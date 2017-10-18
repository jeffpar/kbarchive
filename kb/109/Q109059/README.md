---
layout: page
title: "Q109059: HOWTO: Prevent Multiple Instances of an Application"
permalink: kb/109/Q109059/
---

## Q109059: HOWTO: Prevent Multiple Instances of an Application

	Article: Q109059
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbvfp300 kbvfp500
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The program shown below demonstrates how to stop a second instance of the same
	FoxPro window from being started by using the Windows application programming
	interface (API) function FindWindow() to test if a given window name already
	exists. The FindWindow() function can be accessed by including FOXTOOLS.FLL, the
	library file that is supplied with FoxPro for Windows and documented in the
	Foxtools.hlp file.
	
	NOTE: This method does not prevent multiple instances of FoxPro for Windows from
	starting.
	
	MORE INFORMATION
	================
	
	NOTE: This works in Windows for Workgroups 3.00, Windows 95, and Windows NT.
	
	Copy this code into a program file in FoxPro for windows. The first time you call
	the program, you will notice the main FoxPro window title change. The second
	time you run it, you will get the message that you cannot start another instance
	of the window.
	
	NOTE: Set the window name after you check for its existence.
	
	  
	
	     SET LIBRARY TO SYS(2004)+"foxtools.fll" ADDITIVE
	     * FindWindow() takes two parameters and returns the handle of the
	     * window, HWND, if it was found.
	     GetWind = RegFn("FindWindow", "CC", "I")
	     *Set the first parameter of the call to getwind to 0, null.
	     wclass=0
	     winname="My Application"
	     apphand=CallFn(GetWind,wclass ,winname)
	     *If the call was successful, stop processing.
	     IF apphand<>0
	        WAIT WINDOW ;
	          "You cannot start another instance of the window 'My Application'!"
	        QUIT
	     ENDIF
	     MODIFY WINDOW screen TITLE "My Application"
	     WAIT WINDOW ;
	       "The first instance of the window 'My Application' is running."
	
	REFERENCES
	==========
	
	Microsoft Windows Software Development Kit, "Programmer's Reference, Volume 2:
	Functions," page 309
	
	Foxtools.hlp, located in the C:\Vfp\Tools
	
	Additional query words: foxtools sdk fll api recursive recursion loaded twice
	
	======================================================================
	Keywords          : kbcode kbinterop kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	
