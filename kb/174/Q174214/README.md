---
layout: page
title: "Q174214: PRB: Form with Menu Displays Border w/ Borderstyle Set to None"
permalink: /kb/174/Q174214/
---

## Q174214: PRB: Form with Menu Displays Border w/ Borderstyle Set to None

{% raw %}

	Article: Q174214
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Form with a menu displays a border and a titlebar when the BorderStyle
	property of the form is set to 0-None. The Form displays a border even when the
	Menus it contains are not visible.
	
	CAUSE
	=====
	
	Visual Basic requires a Form with a Menu to have visible borders.
	
	RESOLUTION
	==========
	
	Create a second Form to contain your popup menu and use the PopupMenu method in
	the first Form to access the Menu of the second Form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This section provides instructions on how to create a borderless Form with a
	popup menu.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new in Visual Basic. Form1 is created by default.
	
	2. Set the Form1 BorderStyle property to 0-None.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Form2.Visible = False
	        End Sub
	
	        Private Sub Form_MouseDown(Button As Integer, _
	                                   Shift As Integer, _
	                                   X As Single, _
	                                   Y As Single)
	
	           If Button = vbRightButton Then
	              Form1.PopupMenu Form2.mnuMyMenu
	           End If
	        End Sub
	
	4. Add a second Form to the project.
	
	5. Use the menu editor to add a menu with three menu items to the second form.
	  Name the menu mnuMyMenu.
	
	6. Press the F5 key to run the program. The first form displays without a
	  border. Right-click the form to display the menu items from the second form.
	
	REFERENCES
	==========
	
	PopupMenu method topic in the Online Help
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
