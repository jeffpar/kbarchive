---
layout: page
title: "Q125464: How to Call SetCursorPos() API to Move Mouse Pointer in FoxPro"
permalink: /kb/125/Q125464/
---

## Q125464: How to Call SetCursorPos() API to Move Mouse Pointer in FoxPro

	Article: Q125464
	Product(s): Microsoft FoxPro
	Version(s): 2.60a 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can reposition the mouse pointer (cursor) by using the Windows API function
	SetCursorPos(). This function is documented on page 833 of the Windows SDK
	Programmer's Reference, Volume 2: Functions manual.
	
	MORE INFORMATION
	================
	
	The SetCursorPos() function sets the position, in screen coordinates, of the
	mouse pointer. Here's the function syntax:
	
	     void SetCursorPos(x,y)
	
	Here x and y are integers; x is the horizontal position and y is the vertical
	position. The function is void, so it does not return any value.
	
	Below are code examples for Visual FoxPro using the DECLARE command, and FoxPro
	2.x using FOXTOOLS.FLL, that demonstrate how to move the mouse pointer to
	position 20,20.
	
	NOTE: For backward compatibility, Visual FoxPro still supports FOXTOOLS.FLL
	(included in earlier FoxPro versions), the Visual FoxPro API library that allows
	calls to 16-bit .DLL functions. However, in Visual FoxPro, the DECLARE command
	is the preferred method for calling .DLL functions.
	
	Visual FoxPro Example Using DECLARE
	-----------------------------------
	
	     DECLARE integer SetCursorPos in WIN32API integer, integer
	     =SetCursorPos(20,20)
	     CLEAR DLLS
	
	FoxPro 2.x Example Using FOXTOOLS.FLL
	-------------------------------------
	
	     * Set library to FoxTools.FLL so we can call the Windows
	     * API function.
	     SET LIBRARY TO SYS(2004)+"foxtools.fll"
	
	     * Register the SetCursorPos with having two integer inputs
	     * and void return value.
	     setcurpos=REGFN("SetCursorPos","II","")
	
	     * Call the function and move the mouse to position 20,20.
	     callsetc=CALLFN(setcurpos,20,20)
	
	     * Release the FoxTools.FLL library.
	     SET LIBRARY TO
	
	Additional query words: VFoxWin FoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : 2.60a 3.00
	
	=============================================================================
	
