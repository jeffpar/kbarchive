---
layout: page
title: "Q141027: HOWTO: How to Quickly Search a List Box"
permalink: kb/141/Q141027/
---

## Q141027: HOWTO: How to Quickly Search a List Box

	Article: Q141027
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A popular item in a user interface is to "link" a text box to a list box so that
	as the user types text into the text box, the nearest match in the list box is
	selected. Although this technique can be implemented fairly easily using pure
	Visual Basic code, the Windows API provides a quick and easy way of doing this.
	
	MORE INFORMATION
	================
	
	The following technique uses the LB_FINDSTRING message for a list box to locate
	a partial match for a string in a list box. To do this, call the Windows API
	SendMessage function. The SendMessage function requires the following parameters
	to list the files:
	
	  SendMessage   (hWnd,LB_FINDSTRING, wParam, lparam)
	
	where:
	
	  hWnd     is the hWnd of the list box.
	  wParam   is an integer that specifies the starting point for the search.
	
	           Use -1 to search the whole list box.
	
	  Lparam   is a long pointer to the string to find.
	
	Example to Demonstrate Searching a List Box
	-------------------------------------------
	
	1. Start a new project in Visual Basic. Add a text box (Text1) and a list box
	  (list1) to Form1.
	
	2. On the Visual Basic Insert menu, choose module to add a new code module to
	  the project. Add the following code to the General declarations section of
	  module1:
	
	      #If Win32 Then
	
	         Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	         (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As _
	         Integer, ByVal lParam As Any) As Long
	      #Else
	         Declare Function SendMessage Lib "user" (ByVal hwnd As Integer, _
	         ByVal wMsg As Integer, ByVal wp As Integer, lp As Any) As Long
	      #End If
	
	      Public Const LB_FINDSTRING = &H18F
	
	3. In the Form_Load method for the form, add the following items to the list box
	  using the following code:
	
	      Sub Form_Load()
	         List1.Clear
	         List1.AddItem "Apples"
	         List1.AddItem "Banana"
	         List1.AddItem "Bread"
	         List1.AddItem "Break"
	      End Sub
	
	4. In the Change method of the text box, add the following code:
	
	      Sub Text1_Change()
	         List1.ListIndex = SendMessage(List1.hWnd, LB_FINDSTRING, -1, _
	         ByVal Cstr(Text1.Text))
	      End Sub
	
	If you run the code, typing text into the text box selects the first item in the
	list that matches the text in the text box.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
