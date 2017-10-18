---
layout: page
title: "Q136279: PRB: Program Error While Using Search in Wizard-Generated Form"
permalink: kb/136/Q136279/
---

## Q136279: PRB: Program Error While Using Search in Wizard-Generated Form

	Article: Q136279
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking the Find button on a Wizard-generated form and selecting an operator
	(or typing a value) that is not compatible with the data type of the selected
	field results in this error message:
	
	  Function argument value, type, or count is invalid
	
	CAUSE
	=====
	
	The Visual FoxPro Form Wizard does not implicitly call an error-handling
	procedure.
	
	RESOLUTION
	==========
	
	The developer needs to implement an error-handling routine to trap for any
	errors that occur, call it in the Init event procedure of the Wizard- generated
	form, and set it back to the default in the Destroy event. The procedure itself
	can be contained in a .prg file that also calls the form.
	
	Step-by-Step Example
	--------------------
	
	The following example shows how to implement a simple error-handling routine
	similar to the FoxPro version 2.6 Screen Wizard.
	
	1. Create a form by using the Form Wizard.
	
	2. Modify the form, and in the form's Init event procedure, add this code:
	
	     On Error Do MyErrorHandler in CallProg
	
	3. In the form's Destroy event procedure, add "On Error" (without the quotation
	  marks). Now, closing the form will reset the error routine to the one Visual
	  FoxPro uses by default.
	
	4. Exit and save the form.
	
	5. Create the following program, and name it CallProg:
	
	     DO FORM <formname>
	
	     PROCEDURE MyErrorHandler
	        WAIT WINDOW MESSAGE()
	
	6. Close and save the program. Use the DO command to run it. Cause the the
	  error. Now the error message is displayed in the Wait window. The user is no
	  longer given options that could disable the form's functionality.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin handler
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
