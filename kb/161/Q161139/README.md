---
layout: page
title: "Q161139: PRB: Custom ActiveX Property Sheet Entries Are Not Saved"
permalink: /kb/161/Q161139/
---

## Q161139: PRB: Custom ActiveX Property Sheet Entries Are Not Saved

	Article: Q161139
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	ActiveX control property changes entered via a property page are not saved.
	However, if you enter the properties via the standard property pane that comes
	with Visual Basic, the changes are saved.
	
	CAUSE
	=====
	
	The UserControl needs to explicitly inform the host development environment of
	any property changes that are made via property pages or are side effects of
	other property changes.
	
	RESOLUTION
	==========
	
	To tell the host development environment of property changes, the UserControl
	must invoke the PropertyChanged method of the Extender object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When entering properties via the standard property pane, the host application is
	setting the properties for your control and, therefore, knows they have been
	changed.
	
	The host application knows nothing about changes you make via property pages or
	that there are side effects of other property changes. The user control needs to
	explicitly tell the host application that properties have been changed, so it
	can see the changes and save them.
	
	The following example illustrates setting properties:
	
	------ in the property page ------
	
	        Private Sub LabelCaption_Changed()
	          Changed = True     ' Enable Apply button
	        End Sub
	
	        Private Sub ApplyChanges()
	        Dim X As Variant
	          For Each X In SelectedControls
	            X.Caption = LabelCaption.Text
	          Next X
	        End Sub
	
	------ in the user control ------
	
	        Public Property Let Caption(ByVal NewVal As String)
	          lblMain.Caption = NewVal
	          PropertyChanged "Caption"
	        End Sub
	
	This code assumes that you have all other supporting code working, such as the
	InitProperties, ReadProperties, and WriteProperties events.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Online Help, PropertyChanged Method
	
	Microsoft Visual Basic Component Tools Guide, Chapter 9, Building ActiveX
	Controls, Adding Properties to Controls, Implement Control Properties Using
	Property Procedures
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp VBCCE kbActiveX
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
