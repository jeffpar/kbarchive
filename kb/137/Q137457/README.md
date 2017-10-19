---
layout: page
title: "Q137457: How to Move to the Next Column in a Grid When Using Check Box"
permalink: /kb/137/Q137457/
---

## Q137457: How to Move to the Next Column in a Grid When Using Check Box

	Article: Q137457
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how, when using a check box in a column on a grid, you can
	move to the next column immediately on clicking the check box. The default
	behavior is to remain in the current column.
	
	MORE INFORMATION
	================
	
	By placing code in the Valid event procedure of the check box object, you can
	programmatically determine the current column and then move to the next column
	using the SetFocus method. The following code illustrates one way to do this.
	
	  FOR myctlcntr=1 TO this.parent.parent.columncount && cycle through columns
	     IF THIS.PARENT.PARENT.COLUMNS(myctlcntr).CONTROLS(2).NAME = THIS.NAME
	
	        * In the next line columns(myctlcntr+1) comes beforem controls(2)
	        * because the column header is the first control and data is the
	        * second control.
	
	        THIS.PARENT.PARENT.COLUMNS(myctlcntr+1).CONTROLS(2).SETFOCUS
	        EXIT
	
	     ENDIF
	  ENDFOR
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
