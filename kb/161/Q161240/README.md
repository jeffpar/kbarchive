---
layout: page
title: "Q161240: HOWTO: Select All Text in a Field When It Gets the Focus"
permalink: /kb/161/Q161240/
---

## Q161240: HOWTO: Select All Text in a Field When It Gets the Focus

	Article: Q161240
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Automatic highlighting is useful in data entry boxes where you want to give the
	user the option to overwrite the existing contents quickly by pressing any
	character key.
	
	This article demonstrates how to select (highlight) all text in a text box
	automatically whenever the text box gets the focus. This example also applies to
	the ComboBox and Grid control and any other controls that implement the Text,
	SelStart, and SelLength properties.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic, or, if it is already running, click New Project from the
	  File menu.
	
	2. Place two Text Boxes on the Form1 form with the default settings.
	
	3. Copy and paste the following code to the Form1 Code Window:
	
	        Private Sub Text1_GotFocus()
	          Call SelectMe(Me.ActiveControl)
	        End Sub
	
	        Private Sub Text2_GotFocus()
	          Call SelectMe(Me.ActiveControl)
	        End Sub
	
	        Private Sub SelectMe(This As TextBox)
	          This.SelStart = 0
	          This.SelLength = Len(This.Text)
	        End Sub
	
	4. Press the F5 key to run the project, or click Run Project from the Tools
	  menu.
	
	As you move to each text box, the text is highlighted. If you begin typing, the
	text will be replaced with your new entry. To deselect the text after giving
	focus to the text box, you can single-click the text or press any of the TextBox
	navigation keys (Home, End, Arrow-Keys).
	
	REFERENCES
	==========
	
	Visual Basic On-Line Help: Text, SelLength, SelStart Properties
	
	(c) Microsoft Corporation 1996, All Rights Reserved.
	Contributions by Ted Keith, Microsoft Corporation
	
	
	Additional query words: highlight kbVBp600 kbVBp500 kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
