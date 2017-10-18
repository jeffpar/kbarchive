---
layout: page
title: "Q108623: Forcing FoxPro Window to Always Remain on Top"
permalink: kb/108/Q108623/
---

## Q108623: Forcing FoxPro Window to Always Remain on Top

	Article: Q108623
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below forces the main FoxPro window to remain on top of all
	other windows. It demonstrates how to use the FOXTOOLS.FLL library commands to
	call the SetWindowPos() Microsoft Windows application programming interface
	(API) function.
	
	MORE INFORMATION
	================
	
	The program first declares some compile-time constants (to improve readability)
	and loads the FOXTOOLS.FLL library that is supplied with FoxPro for Windows. It
	then retrieves the handle to the main FoxPro window using a call to MainHWND(),
	which is a function residing in the FOXTOOLS.FLL library. It then calls the
	SetWindowPos() function and passes the handle to the main FoxPro window and the
	HWND_TOPMOST constant to make sure that window always remains on top.
	
	     *** Define compile-time constants
	     #DEFINE HWND_TOPMOST -1
	     #DEFINE HWND_NOTOPMOST -2
	     #DEFINE SWP_NOSIZE 1
	     #DEFINE SWP_NOMOVE 2
	
	     *** Load FoxTools library
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS"
	
	     *** Register the Windows API function
	     setwin=RegFn("SetWindowPos","IIIIIII","I")
	
	     *** Obtain handle to main FoxPro window
	     handle=mainhwnd()
	
	     *** Call SetWindowPos() API function
	     =CallFn(setwin,handle,HWND_TOPMOST,0,0,0,0,SWP_NOMOVE+SWP_NOSIZE)
	
	     *** Release the FoxTools library
	     SET LIBRARY TO
	
	In order to remove the "always on top" attribute from the main FoxPro window, the
	program above could be modified to make the CallFn() line use the constant
	HWND_NOTOPMOST instead of HWND_TOPMOST as the third argument.
	
	REFERENCES
	==========
	
	Microsoft Windows Software Development Kit, "Programmer's Reference, Volume 2:
	Functions," page 892
	
	FOXTOOLS.WRI located in the C:\FOXPROW\GOODIES\FOXTOOLS subdirectory
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a SDK
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
