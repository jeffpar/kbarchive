---
layout: page
title: "Q131301: PRB: Pressing ESC Key Clears Contents of Text Box in a Toolbar"
permalink: /kb/131/Q131301/
---

## Q131301: PRB: Pressing ESC Key Clears Contents of Text Box in a Toolbar

	Article: Q131301
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the ESC key before pressing the ENTER key when the insertion point is
	in a text box, clears the content of the text box. However, doing the same thing
	in a combo box does not produce the same behavior.
	
	CAUSE
	=====
	
	The ESC key is seen as a cancel operation for a text box object. In the combo
	box object, the ESC key is a terminator for the drop-down list only.
	
	WORKAROUND
	==========
	
	In the text box object, it is possible to use the Keypress event to trap for the
	ESC key. If the ESC key is pressed, a dialog box prompting the user to save the
	data can be displayed. Please see the "Step-by-Step Example" section of this
	article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following example creates a form with a text box, and traps for the ESC key
	in the text box. When the escape key is pressed, a dialog is displayed, and if
	the user answers No, the data is not cleared from the text box.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form.
	
	2. Place a text box on the form.
	
	3. Place the following code in the Keypress event handler:
	
	     * Visual FoxPro Header file. This file contains named constants for many
	     * Visual FoxPro functions
	     #INCLUDE "FOXPRO.H"
	     IF nkeycode = 27  && The escape key is pressed.
	        nresponse=MESSAGEBOX("Do you want to Cancel?",  MB_YESNO)
	        IF nresponse=IDNO
	          NODEFAULT
	        ENDIF
	     ENDIF
	
	4. Save and run the form. When the form displays, type something in the text
	  box. Then press the ESC key.
	
	Additional query words: VFoxWin escape
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
