---
layout: page
title: "Q105046: HOWTO: How to Quit Windows from Within a FoxPro Application"
permalink: kb/105/Q105046/
---

## Q105046: HOWTO: How to Quit Windows from Within a FoxPro Application

	Article: Q105046
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming kbtool
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can quit Microsoft Windows from within an application written in FoxPro by
	using the Windows Application Programming Interface (API) through Foxtools.fll,
	a library file included with FoxPro.
	
	This code does not work under Windows 95, Windows 98, and Windows NT 4.0 because
	there is no ExitWindows entry point in User32.exe on Win32 Operating Systems.
	
	MORE INFORMATION
	================
	
	NOTE: While it is possible to quit Windows from within a FoxPro program by
	making use of the Windows API function ExitWindows(), FoxPro will not do a
	complete cleanup and can leave .TMP files in your TEMP subdirectory.
	
	1. In a program, open the FOXTOOLS.FLL external library. To do this, use the SET
	  LIBRARY TO command as follows to ensure that the program finds the
	  FOXTOOLS.FLL library in the FoxPro directory: SET LIBRARY TO
	  SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	
	2. Register the Windows API functions that you would like to call. In this case,
	  use the ExitWindows() API call: getout=REGFN("ExitWindows","II","I")
	
	3. To completely quit Microsoft Windows and all applications running under
	  Windows, issue the following command: =CALLFN(getout,0,0)
	
	NOTE: In Windows 95, this procedure displays the Shut Down the Computer dialog
	box, then exits from Windows.
	
	REFERENCES
	==========
	
	For more information about ExitWindows(), see the Microsoft Windows Software
	Development Kit (SDK) "Programmer's Reference, Volume 2: Functions" manual. It
	contains information about the return values for ExitWindows() and their
	meanings.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a exit windows
	
	======================================================================
	Keywords          : kbinterop kbprogramming kbtool 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
