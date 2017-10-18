---
layout: page
title: "Q161052: HOWTO: Create a Default Value for Custom Controls and Classes"
permalink: kb/161/Q161052/
---

## Q161052: HOWTO: Create a Default Value for Custom Controls and Classes

	Article: Q161052
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic 5.0 and 6.0 allow you to create custom controls and
	Classes that have a default property. This behavior is similar to the intrinsic
	TextBox control. The TextBox control has a default value that corresponds to the
	string value of its Text property. This allows the following code to behave
	identically:
	
	     MsgBox Text1.Text
	
	-and-
	
	     MsgBox Text1
	
	Both will display a dialog box containing the Text shown within the TextBox.
	
	MORE INFORMATION
	================
	
	To set an existing property as the default value for a custom control or Class,
	do the following:
	
	1. Load your custom control project into Microsoft Visual Basic.
	
	2. In the Project window, right-click your custom control or Class. Click View
	  Code.
	
	3. On the Tools menu, click Procedure Attributes.
	
	4. In the Name field, select the property you wish to set as the default.
	
	5. Click Advanced.
	
	6. In the Procedure ID field, select Default. Click OK.
	
	The selected property is now automatically returned when you reference an
	instance of your control:
	
	     Msgbox UserControl1.MyProperty
	
	-and-
	
	     Msgbox UserControl1
	
	are equivalent statements.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic version 5.0 Books Online
	Component Tools Guide. "General Principles of Component Design"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
