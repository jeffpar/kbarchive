---
layout: page
title: "Q141317: How to Change the Color of Edit Boxes on a Wizard Form"
permalink: /kb/141/Q141317/
---

## Q141317: How to Change the Color of Edit Boxes on a Wizard Form

	Article: Q141317
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After Creating a form with the Screen Wizard, you may want to change the colors
	of text boxes and edit boxes. The colors displayed by the text boxes can be
	changed by editing the backcolor, forecolor, disabledbackcolor, and
	disabledforecolor properties on the property sheet. However, edit boxes are not
	disabled and enabled by the edit button as are text boxes. The Readonly property
	of the edit box is changed when the edit/revert or add/save buttons are clicked.
	
	MORE INFORMATION
	================
	
	Edit box colors can be changed by adding code to the Click events of the
	add/save and edit/revert buttons as in the following example:
	
	1. Use the employee table, and build a wizard form using the last_name field and
	  the notes memo field.
	
	2. Add the following code to the Click event of the edit/revert button:
	
	   TXTBTNS.CMDEDIT::CLICK   && scope resolution operator
	                              && to make sure Wizstyle.vcx code is executed
	     If !THISFORM.notes1.READONLY
	       THISFORM.notes1.FORECOLOR= THISFORM.last_name1.FORECOLOR
	       THISFORM.notes1.backcolor= THISFORM.last_name1.BACKCOLOR
	     ELSE
	       THISFORM.notes1.FORECOLOR= THISFORM.last_name1.DISABLEDFORECOLOR
	       THISFORM.notes1.BACKCOLOR= THISFORM.last_name1.DISABLEDBACKCOLOR
	     ENDIF
	
	  In this code, the edit box is called notes1 and the text box is called
	  last_name1.
	
	3. Place the same code in the add/save button. Replace cmdEdit with cmdAdd. This
	  code will allow the edit box colors to stay in sync with the text box colors.
	  Alternate colors may be used by specifying RGB colors in the code instead of
	  forecolor, backcolor, disabledforecolor, or disabledbackcolor.
	
	4. If you changed the disabled colors of the text boxes in the Property sheet,
	  add the following two lines of code to the Init event of the form:
	
	     THISFORM.notes1.FORECOLOR= THISFORM.last_name1.DISABLEDFORECOLOR
	     THISFORM.notes1.BACKCOLOR= THISFORM.last_name1.DISABLEDBACKCOLOR
	
	Additional query words: VFoxwin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
