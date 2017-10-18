---
layout: page
title: "Q136566: How to Use the DECLARE-DLL Command to Call Win32 SDK Functions"
permalink: kb/136/Q136566/
---

## Q136566: How to Use the DECLARE-DLL Command to Call Win32 SDK Functions

	Article: Q136566
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use the DECLARE-DLL command in Visual
	FoxPro to call functions that are part of the WIN32 Software Development Kit
	(SDK). The example code shows you how to use DECLARE-DLL to set up functions
	that you can use to swap the Foreground window to another application.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  * DECLARE is used to make connections to two SDK functions. It
	  * uses the keyword WIN32API for the LibraryName to tell Visual FoxPro
	  * to search for the 32-bit Windows .dll function in Kernel32.dll,
	  * Gdi32.dll, User32.dll, Mpr.dll, and Advapi32.dll.
	  *
	  * FindWindow takes two parameters and returns the HWND of the application
	  * window if found.
	
	  DECLARE INTEGER FindWindow IN WIN32API AS findw STRING,STRING
	
	  * SetForegroundWindow takes one parameter and returns true(1) or false(0)
	  * depending upon its ability to switch to the other window.
	
	  DECLARE INTEGER SetForegroundWindow IN WIN32API INTEGER
	
	  * GetFocus takes no parameters and returns the HWND
	  * of the window that currently has the focus.
	
	  DECLARE INTEGER GetFocus IN WIN32API
	
	  mynull = .NULL.       && You need a NULL when you do not know the
	                        && the class name of the window.
	
	  winname = "File Manager"  && This should be the name of another window that
	                            && is open on the Windows desktop.
	
	  * First call FindWindow to get the HWNDs for the application you want
	  * to switch to. It is important that Visual FoxPro has the focus when this
	  * is run and that you know the exact name of the window that you want to
	  * switch to. For more info Please see the Note later in this code.
	
	  foxhand= getfocus()
	  pmhand = findw(mynull,winname)
	
	  IF pmhand<>0   && If you have an HWND, switch
	     WAIT WINDOW "Press Any Key to Switch to another window and then back;
	                  after a short interval."
	     switched = setforegroundwindow(pmhand)
	     IF switched = 1  && If switched, count for a while and switch back
	        ii=1
	        DO WHILE ii<50000
	           ii=ii+1
	        ENDDO
	        switched = setforegroundwindow(foxhand)
	        WAIT WINDOW "I'm back now"
	     ELSE
	        WAIT WINDOW  "Switch failed"
	     ENDIF
	  ELSE
	     WAIT WINDOW "Cannot find that window"
	  ENDIF
	
	NOTE: Under Windows NT and Windows 95, if a child window is maximized, its name
	is added to the name of the parent window in the Title Bar of the Parent Window.
	For example, when you run Microsoft Word it automatically opens an empty
	document. If this document (call it Document1), is not maximized, the title of
	the main Microsoft Word window is "Microsoft Word." If Document1 is maximized,
	the title is "Microsoft Word - Document1." In the example code, if you want to
	switch to the Microsoft Word session, set the winname variable to "Microsoft
	Word - Document1."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
