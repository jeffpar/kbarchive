---
layout: page
title: "Q167746: HOWTO: Arrange Order of List Items within ListBox Control"
permalink: /kb/167/Q167746/
---

## Q167746: HOWTO: Arrange Order of List Items within ListBox Control

	Article: Q167746
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains sample code that illustrates how to arrange the order of
	items within ListBox Control using drag-and-drop. Function ListRowCalc() returns
	the list index by calculating the position using the Windows API SendMessage()
	function with the constant LB_GETITEMHEIGHT and Screen.TwipsPerPixelY. Sub
	ListRowMove inserts the dragged item into the dropped position and re-orders all
	other affected items.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a module to the project. The default is Module1.
	
	3. Paste the following code into the General Declarations section of Module1:
	
	      #If Win16 Then
	        Declare Function SendMessage& Lib "User" (ByVal hWnd%, ByVal _
	                                    wMsg%, ByVal wParam%, lParam As Any)
	      #Else
	        Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	                       (ByVal hWnd As Long, ByVal wMsg As Long, _
	                        ByVal wParam As Long, lParam As Long) As Long
	      #End If
	
	      Function ListRowCalc(lstTemp As Control, ByVal Y As Single) As Integer
	         #If Win16 Then
	             Const WM_USER = &H400
	             Const LB_GETITEMHEIGHT = (WM_USER + 34)
	         #Else
	             Const LB_GETITEMHEIGHT = &H1A1
	             'Determines the height of each item in ListBox control in pixels
	         #End If
	         Dim ItemHeight As Integer
	         ItemHeight = SendMessage(lstTemp.hWnd, LB_GETITEMHEIGHT, 0, 0)
	         ListRowCalc = min(((Y / Screen.TwipsPerPixelY)\ItemHeight)+ _
	                       lstTemp.TopIndex, lstTemp.ListCount - 1)
	      End Function
	
	      Function min(X As Integer, Y As Integer) As Integer
	           If X > Y Then min = Y Else min = X
	      End Function
	
	      Sub ListRowMove(lstTemp As Control, ByVal OldRow As Integer, _
	                      ByVal NewRow As Integer)
	          Dim SaveList As String, i As Integer
	
	          If OldRow = NewRow Then Exit Sub
	          SaveList = lstTemp.List(OldRow)
	          If OldRow > NewRow Then
	             For i = OldRow To NewRow + 1 Step -1
	                 lstTemp.List(i) = lstTemp.List(i - 1)
	             Next i
	          Else
	             For i = OldRow To NewRow - 1
	                 lstTemp.List(i) = lstTemp.List(i + 1)
	             Next i
	          End If
	          lstTemp.List(NewRow) = SaveList
	      End Sub
	
	4. Add a ListBox Control (List1) to Form1.
	
	5. Clear all the code for Form1, and then paste the following code into the
	  General Declarations section of Form1:
	
	      Dim DragIndex As Integer
	      Private Sub Form_Load()
	          List1.Clear
	          List1.AddItem "Adam"
	          List1.AddItem "Bob"
	          List1.AddItem "Charles"
	          List1.AddItem "David"
	          List1.AddItem "Eric"
	          List1.AddItem "Frank"
	          List1.AddItem "George"
	      End Sub
	
	      Private Sub List1_DragDrop(Source As Control, X As Single, Y As Single)
	          ListRowMove Source, DragIndex, ListRowCalc(Source, Y)
	      End Sub
	
	      Private Sub List1_MouseDown(Button As Integer, Shift As Integer, _
	                                 X As Single, Y As Single)
	          If Button = vbRightButton Then
	              DragIndex = ListRowCalc(List1, Y)
	              List1.Drag
	          End If
	      End Sub
	
	6. Assign an icon file to the DragIcon property of List1. Icon files are shipped
	  with Visual Basic 4.0 under \ICONS directory.
	
	7. From the Run menu, choose Start to run the program. Drag-and-drop any list
	  item in List1 using the right-mouse button. The order of list items should be
	  re-arranged accordingly.
	
	REFERENCES
	==========
	
	For additional information on how to drag-and-drop onto a list box, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q80187 : HOWTO: Drop Item into Specified Location in VB List Box
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Adrian Chiang, Microsoft Corporation.
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
