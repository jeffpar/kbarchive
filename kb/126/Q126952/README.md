---
layout: page
title: "Q126952: How to Scope a Variable to a Form"
permalink: kb/126/Q126952/
---

## Q126952: How to Scope a Variable to a Form

	Article: Q126952
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
	
	This article explains how to declare variables that exist and are visible
	throughout a form but are released when the form is released.
	
	MORE INFORMATION
	================
	
	A variable declared in a method of a form is visible while the method is
	executing. Any reference to this variable after the method exits will yield a
	'Variable not Found' error message. In Visual FoxPro, the Form Designer builds a
	Form class, and a Form is an object. Variables declared in a method such as the
	Init or Load are scoped to the method. A variable scoped to a Form object has to
	be a member variable, or property. This differs from the version 2.x model,
	where variables declared in the Setup of a screen would be generated at the
	beginning of the .SPR file, and be available to the program and procedures that
	the program calls.
	
	Use the following steps to add a new property to a Form in the Form Designer:
	
	1. Choose New Property from the Form menu.
	
	2. Type the name of the member variable, and click OK in the dialog. The
	  property is now available at the bottom of the property sheet.
	
	3. To refer to the property from an object in the Form, you can:
	
	   - Use the This object reference at the Form level. For example:
	
	  This.chvar1
	
	   - Use the ThisForm object reference at the Object level. For example:
	
	  ThisForm.chvar2
	
	   - Use the name of the Form reference. For example:
	
	  Frmtest.chvar1
	
	Additional query words: VFoxWin screen private
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
