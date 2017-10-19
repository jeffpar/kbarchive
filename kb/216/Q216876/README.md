---
layout: page
title: "Q216876: PRB: Moving Code Does Not Preserve Procedure Attributes"
permalink: /kb/216/Q216876/
---

## Q216876: PRB: Moving Code Does Not Preserve Procedure Attributes

	Article: Q216876
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-defined function, procedure, property, or event in a class module
	contains user-defined Procedure Attributes, such as text in the Description text
	box of the Procedure Attributes dialog box. This text in the Description field
	is visible in the Details Pane of the Object Browser.
	
	The Procedure Attributes are deleted when you perform one of the following tasks
	on your user-defined function, procedure, property, or event code in the class
	module code window:
	
	- You change the position of the code.
	- You cut out the code and then paste the code back in the class module code
	  window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that demonstrates this
	behavior. The section assumes you are familiar with the Object Browser, setting
	Procedure Attributes, and creating user-defined functions, procedures, events or
	properties.
	
	1. Start a new ActiveX DLL project in Visual Basic. Class1 is created by
	  default.
	
	2. Open the code window for the Class1 class module.
	
	3. Create a user-defined function called MyFunction in the code window of the
	  Class1 class module.
	
	4. In the Description text box of the Procedure Attributes dialog box for
	  MyFunction, enter some text, such as "This is my function."
	
	5. Open the Object Browser and set the position so that the Details Pane is
	  visible. Select MyFunction in the Class1 class of your project. Note that the
	  text in the Description text box is visible in the Details pane.
	
	6. In the Code Window for the Class1 class, select all the code for MyFunction
	  and move the code to another position in the code window. Note that the
	  Description text in the Details Pane of the Object Browser is deleted as soon
	  as you move the code.
	
	7. Open the Procedure Attributes for MyFunction. The Description text box is
	  blank.
	
	
	REFERENCES
	==========
	
	For additional information about Procedure Attributes, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q189623 HOWTO: Give Descriptions to Private Procedures
	
	  Q161094 HOWTO: Use the Procedure Attributes Dialog Box
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
