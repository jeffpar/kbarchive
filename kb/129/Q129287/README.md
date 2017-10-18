---
layout: page
title: "Q129287: INFO: Differences Between Exclamation Mark (!) &amp; Dot (.) Syntax"
permalink: kb/129/Q129287/
---

## Q129287: INFO: Differences Between Exclamation Mark (!) &amp; Dot (.) Syntax

	Article: Q129287
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Visual Basic version 4.0, the exclamation mark (!) syntax is for collection
	lookup, and the dot (.) syntax is for properties and methods.
	
	However, a control can be accessed as a property, and Visual Basic has a Controls
	collection on a form. Because the Controls collection is the default property of
	a form, you can access a control from a Form using by using the exclamation mark
	(!) syntax.
	
	MORE INFORMATION
	================
	
	To obtain direct access to the Ctrl1 property on the form, type this:
	
	     Form1.Ctrl1.Text = "Hello"
	
	This line:
	
	     Form1!Ctrl1.Text = "Hello"
	
	translates into this code:
	
	     Form1.Controls.Item("Ctrl1").Text = "Hello"
	
	Visual Basic for Applications has a specific optimization for Forms that allows
	the compiler to translate this syntax:
	
	     Form1!Ctrl1.Text = "Hello"
	
	into this code:
	
	     Form1.Ctrl1.Text = "Hello"
	
	Therefore the performance of the two statements should be identical. Note that
	this optimization is specific to controls on Visual Basic version 4.0 forms. It
	will not work with any other collection.
	
	WARNING: This optimization may not occur in future versions of Visual Basic
	forms.
	
	
	Steps to Reproduce Behavior in Visual Basic 4.0
	-----------------------------------------------
	
	1. Create a new project, and add a CommandButton to Form1.
	
	2. Double-click Form1 to edit the Form_Load event, and type:
	
	        Form1!Command1.Caption = "Test"
	        Form1.Command1.Caption = "It Works!"
	
	3. Run the project, and notice how both methods work.
	
	Additional query words: bang
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
