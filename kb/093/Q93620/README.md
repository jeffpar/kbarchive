---
layout: page
title: "Q93620: PRB: Cannot Find Transport Program"
permalink: /kb/093/Q93620/
---

## Q93620: PRB: Cannot Find Transport Program

{% raw %}

	Article: Q93620
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to open a label, screen, or report fails and FoxPro displays one of
	the following messages on the screen:
	
	In FoxPro 2.x for Windows:
	
	  Cannot find the transport program
	
	  -or-
	
	  File \TRANSPRT.PRG not found
	
	In Visual FoxPro for Windows:
	
	  File 'convert.app' does not exist.
	
	CAUSE
	=====
	
	A file created on one FoxPro platform or prior version has been transported to
	another or Visual FoxPro for Windows, and FoxPro cannot locate the conversion
	utility.
	
	RESOLUTION
	==========
	
	To solve the problem, do the following:
	
	1. Make sure that the conversion utility is installed on your machine.
	
	2. If the conversion utility is installed in a directory other then the main
	  FoxPro directory or has a name other than TRANSPRT.PRG (FoxPro 2.x) or
	  CONVERT.APP (Visual FoxPro for Windows), specify the path to the conversion
	  utility in the _TRANSPORT (FoxPro 2.x) or _CONVERTER (Visual FoxPro for
	  Windows) system variable in the FoxPro configuration file (CONFIG.FP for
	  FoxPro for MS-DOS or CONFIG.FPW for FoxPro for Windows). For example, one of
	  the following:
	
	     _TRANSPORT="C:\FOXPROW\TEST\TRANSPRT.FXP"  && FoxPro 2.x
	
	  -or-
	
	     _CONVERTER="C:\VFP\CONVERT.APP"            && Visual FoxPro
	
	MORE INFORMATION
	================
	
	By default, the transport utility is named TRANSPRT.PRG in FoxPro 2.x, and
	CONVERT.APP in Visual FoxPro for Windows. FoxPro runs the conversion utility for
	a label, screen, or report under the following circumstances:
	
	- When a file developed in FoxPro 2.0 for MS-DOS is run with FoxPro 2.5x for
	  Windows
	
	- When a file developed in FoxPro 2.0 for MS-DOS is run with FoxPro 2.5x, or
	  2.6x for MS-DOS
	
	- When a file developed in FoxPro 2.5x or 2.6x for MS-DOS is run with FoxPro
	  2.x for Windows
	
	- When a file developed in FoxPro 2.x for Windows is run with FoxPro 2.5x or
	  2.6x for MS-DOS
	
	- When a file developed in FoxPro 2.x (any platform) is opened in Visual
	  FoxPro.
	
	Additional query words: XPlatForm VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b errmsg err msg converter
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbVFP300
	Version           : MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
