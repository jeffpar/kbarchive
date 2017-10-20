---
layout: page
title: "Q124027: Changing Focus from QuickWin Using the Windows API"
permalink: /kb/124/Q124027/
---

## Q124027: Changing Focus from QuickWin Using the Windows API

{% raw %}

	Article: Q124027
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use Windows API calls to switch focus
	between windows.
	
	There are 2 concerns with adding functionality to a QuickWin application with the
	Windows API.
	
	- A large portion of the functionality in a Windows-based application is
	  provided outside the API (by message handling, and so forth). For this
	  reason, much of this functionality can't be provided under QuickWin. To get a
	  full GUI interface, you'll need to use Visual C++ or Visual Basic.
	
	- Many APIs will not behave as expected. In this example, GetFocus() works well
	  at first, but if the user changes focus to a different window while the
	  command setvideomode() is executing, the call to GetFocus() gets the handle
	  of the wrong window. In a Windows-based application, the program would keep
	  track of each window's handle as the window is created, rather than trying to
	  determine the handle of a window by assuming that it currently has the focus.
	
	MORE INFORMATION
	================
	
	The following QuickWin program creates a text window and a graphics window, sets
	focus to the text window, waits for the user response, and then returns focus to
	the graphics window.
	
	This example assumes that the QuickWin Graphics Library update has been made.
	
	To install the graphics update, follow the instructions in the README.TXT file on
	the installation disk labelled "Microsoft FORTRAN, QuickWin Graphics Library"
	(NOTE: The "QuickWin Graphics Library" is in fine print.)
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW
	  C Link with modified library LLIBFEW.LIB
	        interface to integer*2 function getfocus
	       +  [PASCAL,alias:'GetFocus']()
	        end
	        interface to integer*2 function setfocus
	       +  [PASCAL,alias:'SetFocus'](i)
	        integer*2 i
	        end
	        include'fgraph.fi'
	        include'fgraph.fd'
	        integer*2 i, texthandle, graphicshandle, getfocus, setfocus
	  C     Get handle for the current window (assumed to be the text window)
	        texthandle = getfocus()
	  C     Create graphics window and get it's handle
	        i=setvideomode($sres256color)
	  C     This is NOT the same handle as returned from WGGETACTIVEQQ
	        graphicshandle=getfocus()
	
	  C     Set focus to text window
	        i = setfocus(texthandle)
	        write(*,*) "Hit <Enter> to continue"
	        read(*,*)
	
	  C     Set focus to graphics window
	        i=setfocus(graphicshandle)
	        end
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
