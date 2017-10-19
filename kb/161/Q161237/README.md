---
layout: page
title: "Q161237: PRB: Apply Button on Custom OCX Property Page Always Disabled"
permalink: /kb/161/Q161237/
---

## Q161237: PRB: Apply Button on Custom OCX Property Page Always Disabled

	Article: Q161237
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changing properties of a custom ActiveX control via a custom property page,
	the Apply button is never enabled.
	
	CAUSE
	=====
	
	The Changed property is not being set from the property page code.
	
	RESOLUTION
	==========
	
	In the property page code, add the line:
	
	       Changed = True
	
	to all code that changes UserControl properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual Basic IDE or run-time system controls the state of the Apply Button
	on your custom property pages. In order to tell Visual Basic that the user has
	edited one or more properties on a property page, you must set the PropertyPage
	object's Changed property to True. Because there is no way to know which
	property a user might decide to change, you must do this for every property
	displayed on the page.
	
	The following code snippet illustrates using the Changed property in property
	page code:
	
	        Private Sub ControlCaption_Changed()
	          Changed = True
	        End Sub
	
	        Private Sub ApplyChanges()
	        Dim X As Variant
	          For Each X In SelectedControls
	            X.Caption = ControlCaption.Text
	          Next X
	        End Sub
	
	This process can be simplified by using the Property Page Wizard from the Visual
	Basic Add-Ins menu.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Online Help, Changed Property.
	Microsoft Visual Basic User's Guide, Chapter 10, Creating Property Pages for
	ActiveX Controls, Enabling the Applied Button by Setting Changed = True.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbAddIN kbIDE
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
