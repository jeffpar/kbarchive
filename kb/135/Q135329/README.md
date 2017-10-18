---
layout: page
title: "Q135329: BUG: Pressing PAGE UP or PAGE DOWN Moves to New Code Window"
permalink: kb/135/Q135329/
---

## Q135329: BUG: Pressing PAGE UP or PAGE DOWN Moves to New Code Window

	Article: Q135329
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbfixlist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If procedure code is short enough that all code fits in a single page of the
	Code Window, pressing the PAGE UP or PAGE DOWN key moves to the previous or next
	populated procedure rather than moving to the beginning or end of the currently
	edited procedure.
	
	WORKAROUND
	==========
	
	Press CTRL+HOME or CTRL+END to move to the beginning or end of the currently
	edited procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form.
	
	2. Type the following two lines in the Code window for the Init procedure of the
	  form:
	
	        This.Height=300
	        This.Width=500
	
	3. Type the following two lines in the Code window for the DblClick procedure of
	  the form:
	
	        WAIT WINDOW STR(This.Height) TIMEOUT 1
	        WAIT WINDOW STR(This.Width) TIMEOUT 1
	
	4. Double-click the upper-left corner of the Code window to close it.
	
	5. Open the DblClick Procedure by double-clicking anywhere on the form in the
	  Form Designer.
	
	6. Press the PAGE DOWN key.
	
	Notes
	-----
	
	- The actual behavior is that the next populated procedure (in this case, the
	  Init Procedure) displays in the Code Window.
	
	- The insertion point should advance to the end of the current procedure when
	  you first press PAGE DOWN and to the beginning of the next populated
	  procedure when you next press PAGE DOWN.
	
	- If the procedure code fills more than one page in the Code window, the first
	  time you press PAGE DOWN will move the pointer to the beginning of the next
	  page of the current procedure, as expected.
	
	- Pressing PAGE UP when at the end of a procedure should move the pointer to
	  the beginning of the current procedure. Instead, it displays the previously
	  populated procedure. If, however, the pointer is on page 2 or higher of a
	  procedure that is longer than a page in the Code Window, the pointer moves to
	  the previous page of the current procedure.
	
	- Pressing CTRL+END moves the pointer to the end of the current procedure, and
	  pressing CTRL+HOME moves the pointer to the beginning of the current
	  procedure. These behaviors occur regardless of the length of the procedure in
	  the Code Window.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
