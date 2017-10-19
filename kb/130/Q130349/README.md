---
layout: page
title: "Q130349: PRB: Cannot Change ActivePage of a PageFrame with a Hot Key"
permalink: /kb/130/Q130349/
---

## Q130349: PRB: Cannot Change ActivePage of a PageFrame with a Hot Key

	Article: Q130349
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the activepage of a pageframe object doesn't change
	when you press a hot key combination for a page.
	
	CAUSE
	=====
	
	The pageframe is not the only object on the form.
	
	WORKAROUND
	==========
	
	The pageframe container does not have a keypress method, so you need to modify
	the keypress method of the form to handle specific hot key combinations as in
	this example:
	
	1. Create a new form.
	
	2. Add a pageframe control, and change the name property to pgfexample.
	
	3. Set the caption of page1 in pgfexample to Page\<1.
	
	4. Set the caption of page2 in pgfexample to Page\<2.
	
	5. Add the following code to the keypress method of the form:
	
	     LPARAMETERS nKeyCode, nShiftAltCtrl
	     DO CASE
	
	        *Check to see if ALT+1 is pressed
	        CASE nKeyCode=120 and nShiftAltCtrl=4
	           this.pgfexample.activepage=1
	
	        *Check to see if ALT+2 is pressed
	        CASE nKeyCode=121 and nShiftAltCtrl=4
	           this.pgfexample.activepage=2
	
	     ENDCASE
	
	6. Run the Form. Press ALT+1 to change the active page of the pageframe to
	  page1. Press ALT+2 to change the active page of pgfexample to page2.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This particular issue occurs only if the form contains objects other than the
	pageframe. In the example, pressing ALT+1 or ALT+2 would select page1 or page2
	without the code if there were no other objects on the form. The code in the
	keypress event is useful when the form contains objects outside of the
	pageframe.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
