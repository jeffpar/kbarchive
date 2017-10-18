---
layout: page
title: "Q134881: FIX: WAIT WINDOW AT Clause Puts WAIT WINDOW on Windows Desktop"
permalink: kb/134/Q134881/
---

## Q134881: FIX: WAIT WINDOW AT Clause Puts WAIT WINDOW on Windows Desktop

	Article: Q134881
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Contrary to the information in the Help file, the WAIT WINDOW AT nRow,nCol
	clause introduced in Visual FoxPro for Windows places a WAIT WINDOW at the
	specified position on the Windows desktop, not in the main Visual FoxPro
	window.
	
	The Help file specifies that the AT clause determines the position of the WAIT
	WINDOW in the following manner:
	
	     AT nRow, nColumn
	
	  Specifies the position of the message window on the main Visual FoxPro
	  window.
	
	WORKAROUND
	==========
	
	Specify the position of the WAIT WINDOW AT with respect to the Windows global
	desktop row and column positions rather than the main Visual FoxPro window.
	
	A general pattern for one solution to the problem of determining the value of the
	AT coordinates is shown in the following example. Remember that this is only one
	example. The correct solution in your case will depend on font, screen
	resolution, and scalemode.
	
	Assuming Visual FoxPro is maximized, the main screen's fontname is Arial, the
	fontsize is 10, and fontbold is false (.f.), here's an example AT clause:
	
	     _SCREEN.FONTBOLD=.F.
	     _SCREEN.FONTSIZE=10
	     _SCREEN.FONTNAME="ARIAL"
	     WAIT WINDOW "Hello" AT _SCREEN.TOP+8.25,_SCREEN.LEFT+4
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	In the Visual FoxPro Command window, enter this command:
	
	     WAIT WINDOW AT 0,0 "Hello World"
	
	Observe that the resulting WAIT WINDOW appears at the upper-left corner of the
	Windows display area.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
