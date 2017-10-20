---
layout: page
title: "Q161161: HOWTO: Search a ListBox Control Quickly"
permalink: /kb/161/Q161161/
---

## Q161161: HOWTO: Search a ListBox Control Quickly

{% raw %}

	Article: Q161161
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A popular item in a user interface is to "link" a text box to a list box so the
	nearest match in the list box is selected when the user types text into the text
	box. This technique can be implemented using pure Visual Basic code, but the
	Windows API provides a quicker and easier way to do this.
	
	MORE INFORMATION
	================
	
	The technique calls the Windows API SendMessage function using the LB_FINDSTRING
	message for a list box to locate a partial match for a string in the list box.
	SendMessage requires the following parameters:
	
	     SendMessage(hWnd, LB_FINDSTRING, wParam, lParam) where
	
	        hWnd    - is the hWnd of the list box.
	        wParam  - is a long that specifies the starting point for the
	                  search. Use -1 to search the whole list box.
	        lParam  - is a long pointer to the string to find.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a TextBox control (Text1) and a ListBox control (List1) to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Const LB_FINDSTRING = &H18F
	        Private Declare Function SendMessage Lib "User32" _
	               Alias "SendMessageA" _
	           (ByVal hWnd As Long, _
	            ByVal wMsg As Integer, _
	            ByVal wParam As Integer, _
	            lParam As Any) As Long
	
	        Private Sub Form_Load()
	           List1.Clear
	           List1.AddItem "Apples"
	           List1.AddItem "Banana"
	           List1.AddItem "Bread"
	           List1.AddItem "Break"
	           Text1.Text = ""
	        End Sub
	
	        Private Sub Text1_Change()
	           List1.ListIndex = SendMessage(List1.hWnd, LB_FINDSTRING, -1, _
	              ByVal Text1.Text)
	        End Sub
	
	4. Press the F5 key to run the program. Typing text into the text box selects
	  the first item in the list box which matches the text in the text box.
	
	REFERENCES
	==========
	
	See the Help topic "Control Limitations" in the Visual Basic documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
