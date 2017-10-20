---
layout: page
title: "Q153928: HOWTO: Put a ComboBox into a Toolbar"
permalink: /kb/153/Q153928/
---

## Q153928: HOWTO: Put a ComboBox into a Toolbar

{% raw %}

	Article: Q153928
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Toolbar control in the 32-bit version of
	Visual Basic 4.0 to allow programmers to add buttons to the Toolbar but not
	ComboBoxes. If you create a ComboBox at design time and place it on top of the
	Toolbar, the ComboBox will not appear when the program is run. This behavior
	occurs because the Toolbar has a higher precedence than the ComboBox on the
	Z-order.
	
	To put a ComboBox on a Toolbar, create a button on the Toolbar to act as a place
	holder, and position the ComboBox above the place holder in the Z-order, because
	you cannot place the ComboBox inside the place holder directly.
	
	The following code sample showing how this effect can be achieved.
	
	MORE INFORMATION
	================
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Place a ComboBox on the form.
	
	3. Place a Toolbar on the form.
	
	4. Add the following code to the Form1 code window:
	
	     Option Explicit
	
	     Private Sub Form_Load()
	        Dim btn As Button
	        Me.Show
	        Set btn = Toolbar1.Buttons.Add()
	        btn.Style = tbrSeparator
	        Set btn = Toolbar1.Buttons.Add()
	        btn.Style = tbrPlaceholder
	        btn.Key = "ComboBox"
	        btn.Width = 2000
	
	        DoEvents
	
	        With Combo1     
	           .ZOrder 0
	           .Width = Toolbar1.Buttons("ComboBox").Width
	           .Top = Toolbar1.Buttons("ComboBox").Top
	           .Left = Toolbar1.Buttons("ComboBox").Left
	        End With
	     End Sub
	
	5. Press the F5 key to run the project. The Form should load with a ComboBox in
	  the Toolbar.
	
	Additional query words: kbVBp400 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
