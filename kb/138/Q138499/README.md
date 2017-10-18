---
layout: page
title: "Q138499: How to Limit the Number of Characters Typed in a Combo Box"
permalink: kb/138/Q138499/
---

## Q138499: How to Limit the Number of Characters Typed in a Combo Box

	Article: Q138499
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can limit the number of characters that a user can type into a text box by
	using the InputMask property. However, this property does not exist for a combo
	box. This article shows shows by example how to limit the number of characters
	typed in a combo box by placing code in the KeyPress event.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. On the Form menu, click New Property, and name the new property numb.
	
	3. Place a combo box on the form, and set its ControlSource, RowSourceType, and
	  RowSource properties.
	
	4. Place at least one other control on the form.
	
	5. Place the following code in the KeyPress event for the combo box to limit the
	  number of characters entered into the combo box to 3:
	
	    IF nKeyCode=13 OR nKeyCode=9   && test for ENTER or TAB
	       THISFORM.numb=0              && and reset numb
	     ELSE
	       IF !(nkeyCode=127 OR ;       &&  BACKSPACE
	         nkeyCode=7 OR ;            &&  DELETE
	         nkeyCode=6 OR ;            &&  END key
	         nkeyCode=19 OR ;           &&  LEFT ARROW
	         nkeyCode=4 OR ;            &&  RIGHT ARROW
	         nkeyCode=1)                &&  HOME key
	         THISFORM.numb=THISFORM.numb+1  && if not one of the above increment
	
	           IF THISFORM.numb=4       && When 4 characters have been entered
	             THISFORM.numb=0        && reset numb to zero and flash a message
	             ?? CHR(7)              && ring the bell
	             =MESSAGEBOX("Enter only 3 characters")
	             NODEFAULT              &&  do not enter the character typed.
	           ENDIF
	       ENDIF
	     ENDIF
	
	Additional query words: VFoxWin mask format
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
