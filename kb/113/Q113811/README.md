---
layout: page
title: "Q113811: PRB: TAB Key Does Not Trigger List Box's VALID Clause"
permalink: /kb/113/Q113811/
---

## Q113811: PRB: TAB Key Does Not Trigger List Box's VALID Clause

	Article: Q113811
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Contrary to expectation, the TAB key does not trigger a list box's VALID clause.
	
	CAUSE
	=====
	
	Unlike most screen GET objects, in order for its VALID clause to be executed, a
	list box requires a selection be made with a press of the ENTER key or a
	double-click of the mouse. Even though positioning the highlight bar on a
	particular entry in a list box and pressing the TAB key updates the list-box
	variable's value, the VALID clause is ignored.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, page L3-77
	"Commands & Functions," version 2.0, page C3-50
	The "@ ... GET - List Boxes Command" topic of Visual FoxPro online Help,
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60 listbox
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
