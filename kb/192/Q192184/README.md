---
layout: page
title: "Q192184: HOWTO: Add a Horizontal Scroll Bar to a Visual Basic ListBox"
permalink: kb/192/Q192184/
---

## Q192184: HOWTO: Add a Horizontal Scroll Bar to a Visual Basic ListBox

	Article: Q192184
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The normal ListBox that comes with Visual Basic for Windows does not have a
	horizontal scroll bar. This can be a problem when the item in a ListBox extends
	past the boundaries of the ListBox. To add a horizontal scroll bar to the
	control, you can call the Windows API SendMessage function with the
	LB_SETHORIZONTALEXTENT constant.
	
	MORE INFORMATION
	================
	
	This message sets the width in pixels by which a ListBox can scroll
	horizontally. If the width of the ListBox is smaller than this value, a
	horizontal scroll bar will be added to allow horizontally scrolling items in the
	ListBox.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton and a ListBox to Form1.
	
	3. Paste the following code into the general declaration section of Form1:
	
	        Option Explicit
	
	        Private Declare Function SendMessageByNum Lib "user32" _
	          Alias "SendMessageA" (ByVal hwnd As Long, ByVal _
	          wMsg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	        Const LB_SETHORIZONTALEXTENT = &H194
	
	        Private Sub Command1_Click()
	           Dim s As String
	           Static x As Long
	           s = InputBox("Please enter any text", "List scroll", _
	             "this is a simple scrollbar sample for demonstration purposes")
	           List1.AddItem s
	           If x < TextWidth(s & "  ") Then
	              x = TextWidth(s & "  ")
	             If ScaleMode = vbTwips Then _
	                 x = x / Screen.TwipsPerPixelX  ' if twips change to pixels
	             SendMessageByNum List1.hwnd, LB_SETHORIZONTALEXTENT, x, 0
	           End If
	        End Sub
	
	4. Run the project and click on Command1. You will be prompted to enter a text
	  string to be added to the ListBox. Each time you enter a string, the code
	  checks to see if it is longer than the previous longest string and will
	  adjust the scroll bar as necessary.
	
	REFERENCES
	==========
	
	For information on performing this task in 16-bit versions of Visual Basic,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q80190 : HOWTO: Add a Horizontal Scroll Bar to Visual Basic ListBox
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp400 kbVBp500 kbVBp600 kbCtrl kbAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
