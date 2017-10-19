---
layout: page
title: "Q95243: DEFINE WINDOW IN DESKTOP Documentation Error"
permalink: /kb/095/Q95243/
---

## Q95243: DEFINE WINDOW IN DESKTOP Documentation Error

	Article: Q95243
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page L3-430 of the "Language Reference" manual describes the IN DESKTOP clause
	of the DEFINE WINDOW command. The last sentence of this section incorrectly
	states,
	
	  The position of the window is relative to the Windows desktop, and size of
	  the window is determined by the current font of the main FoxPro window.
	
	This last sentence should instead read:
	
	  The position of the window is relative to the Windows desktop, and the
	  current font of the main FoxPro window.
	
	This statement omits the phrase, "size of the window is determined by." The size
	of the window is determined by the FONT clause, not the font of the main FoxPro
	window. The FONT clause is placed in the DEFINE WINDOW statement itself. If the
	FONT clause is omitted, 10-point FoxFont is used, as stated on page L3-430 of
	the "Language Reference."
	
	Additional query words: VFoxWin FoxWin 2.50 Docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
