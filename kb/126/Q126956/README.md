---
layout: page
title: "Q126956: How to Return a Value from a Form"
permalink: kb/126/Q126956/
---

## Q126956: How to Return a Value from a Form

	Article: Q126956
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a way to obtain a return value from a Form called with a
	DO FORM command.
	
	MORE INFORMATION
	================
	
	Some operations require a return value from a Form. For example, a dialog box
	typically returns an answer from user input. The DO FORM command is used to
	instantiate a form designed with the Form Designer. The TO clause of the DO FORM
	command allows to specify a return variable. For example:
	
	     DO FORM frmtest1 TO cOkvar
	
	This statement returns a value to the cOkvar variable if a RETURN statement is
	placed in the Unload method of a Form and the form is modal
	(WindowType=1-Modal).
	
	For more information about the DO FORM command, search using DO FORM in the
	FoxPro Help system.
	
	For information on calling a form as if it were a function, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129648 Calling a Form as If It Were a Function to Return a Value
	
	The following step-by-step example illustrates how you can use a property to hold
	the return value of a form.
	
	Step-by-Step Example
	--------------------
	
	1. Create a form and place a text box on the form.
	
	2. Add a command button to the form. Place the following command in the Click
	  method of the form.
	
	       THISFORM.Release
	
	3. Set the WindowType property of the form to Modal.
	
	4. Click New Property from the Form menu to add a Custom Property to the form.
	  Call this property lRetVal.
	
	5. In the Click method of the command button, store the value of the text box to
	  the lRetVal property.
	
	        THISFORM.lRetVal = THISFORM.Text1.Value
	        *-- 'text1' refers to the text box
	
	6. Place the following command in the Unload method of the form:
	
	        RETURN THISFORM.lRetVal
	
	7. Call the form by using the following command:
	
	        DO FORM MyForm TO lMyRetVal
	
	8. Type a value in the text box, and close the form. To verify the return value
	  type the following command in the Command window.
	
	        = MessageBox(lMyRetVal)
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
