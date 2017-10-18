---
layout: page
title: "Q161208: HOWTO: Create a Default Property For a User Control"
permalink: kb/161/Q161208/
---

## Q161208: HOWTO: Create a Default Property For a User Control

	Article: Q161208
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB kbCtrlCreat
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a default property for your User Control. A default property is
	the property selected when you select the control in design mode. For example,
	when you select a Label, the highlighted property is Caption. Therefore, Caption
	is the default property for the Label. This article will explain how to create a
	default property for a User Control that you create.
	
	MORE INFORMATION
	================
	
	To create a default property, first you must create the property by doing the
	following:
	
	1. Start a new ActiveX Control project in Visual Basic.
	
	2. From the View menu, select Code to open the control's code window.
	
	3. From the Tools menu, select Add Procedure.
	
	4. In the Add Procedure dialog box, enter the property name, and check the
	  Property option in the Type frame.
	
	5. Click OK.
	
	After the property is created, follow these steps to make the property the
	default property:
	
	1. From the Tools menu, select Procedure Attributes.
	
	2. In the Procedure Attributes dialog box, select the property name you
	  previously created.
	
	3. Add a Description, if desired, and select Advanced>>.
	
	4. Select the User Interface Default check box in the Attributes frame.
	
	5. Click OK.
	
	When using the User Control in designing a Visual Basic form, the default
	property will be highlighted when the User Control is selected.
	
	You can only have one default property for each control. Therefore, you can only
	select the "User Interface Default" checkbox for one property. If you select
	this checkbox for another property, it will ask you if you want to make the
	newly-selected property the default property.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161156 How to Create a Default Event for a UserControl
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB kbCtrlCreat 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
