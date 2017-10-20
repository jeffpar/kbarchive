---
layout: page
title: "Q178490: PRB: &quot;Can't Assign To Read-Only Property&quot; Error Message"
permalink: /kb/178/Q178490/
---

## Q178490: PRB: &quot;Can't Assign To Read-Only Property&quot; Error Message

{% raw %}

	Article: Q178490
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
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error when you attempt to programmatically set a
	control property:
	
	  Compile Error:
	  Can't assign to read-only property
	
	CAUSE
	=====
	
	You are attempting to programmatically change a read-only property of a control
	at run-time.
	
	RESOLUTION
	==========
	
	If you need to change a read-only property at run-time, create another copy of
	the control and set the read-only property at design-time. Then, display the
	copy of the control THAT is appropriate to your task.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Controls can have properties that can only be set during design-time. For
	example, the Style property of a Combo box control can only be changed at
	design-time. Properties are usually read-only at run-time because the style is
	inherent to the window created by the control. Control developers call this a
	"pre-hWnd" property.
	
	The following section demonstrates how you can simulate changing a read- only
	property of a control at run-time. In this example, a control array of three
	combo boxes is used. Each member of the combo box array has a different style
	property. When you click a command button, one member of the combo box array is
	displayed and the other two members are hidden.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton, a label control, and an array of three combo boxes to
	  Form1. Set the following properties for the combo box controls:
	
	  Control           Default Name     Property        Setting
	  --------------------------------------------------------------------
	  ComboBox          Combo1(0)        Style           0-DropDown Combo
	  ComboBox          Combo2(1)        Style           1-Simple Combo
	  ComboBox          Combo3(2)        Style           2-Dropdown List
	
	3. Copy the following code to the Code window of Form1 form:
	
	        Option Explicit
	
	        Dim bytCount As Byte
	        Dim captions(0 To 2) As String
	
	        Private Sub Form_Load()
	           Dim i As Integer
	           bytCount = 0
	           Command1.Caption = "Change Style"
	           captions(0) = "Dropdown Combo"
	           captions(1) = "Simple Combo"
	           captions(2) = "Dropdown List"
	           Label1.AutoSize = True
	           For i = 0 To 2
	              With Combo1(i)
	                    .Left = 2400
	                    .Top = 360
	                    .Visible = False
	              End With
	           Next i
	           Label1.Caption = captions(bytCount)
	           Combo1(bytCount).Visible = True
	           Combo1(1).Height = 2000
	           For i = 1 To 10
	              Combo1(0).AddItem i
	              Combo1(1).AddItem i
	              Combo1(2).AddItem i
	           Next i
	        End Sub
	
	        Private Sub Command1_Click()
	           Combo1(bytCount).Visible = False
	           bytCount = (bytCount + 1) Mod 3
	           Combo1(bytCount).Visible = True
	           Label1.Caption = captions(bytCount)
	        End Sub
	
	4. On the Run menu, click Start, or press the F5 key to start the program. Click
	  on a CommandButton to change the style.
	
	REFERENCES
	==========
	
	"Can't make an assignment to a read-only property" topic in the Visual Basic
	Online Reference
	
	(c) Microsoft Corporation 1997. All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl read only run time design time runtime readonly
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
