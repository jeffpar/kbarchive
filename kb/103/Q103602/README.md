---
layout: page
title: "Q103602: PRB: Menu Popups Not Appearing in FoxPro for Windows"
permalink: /kb/103/Q103602/
---

## Q103602: PRB: Menu Popups Not Appearing in FoxPro for Windows

	Article: Q103602
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Menu popups will not appear under certain circumstances when the number of
	options in a popup exceeds a certain limit in FoxPro for Windows.
	
	For example, using the CUSTOMER.DBF file (500 records) located in the
	FOXPRO25\TUTORIAL directory, the following program will work in FoxPro for
	MS-DOS but not in FoxPro for Windows:
	
	     SET SYSMENU TO
	     SET SYSMENU AUTOMATIC
	   
	     USE customer
	   
	     DEFINE PAD test OF _msysmenu PROMPT "Test"
	     ON SELECTION PAD test OF _msysmenu ACTIVATE POPUP test
	     DEFINE POPUP test PROMPT FIELD company
	     ON SELECTION POPUP test WAIT WINDOW PROMPT()
	
	Additional query words: FoxWin FoxMac VFoxWin 2.50 2.50a 2.50b 2.50c 2.60
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
