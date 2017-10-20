---
layout: page
title: "Q179988: FIX: Problem with ListView's ColumnHeader Width Property"
permalink: /kb/179/Q179988/
---

## Q179988: FIX: Problem with ListView's ColumnHeader Width Property

{% raw %}

	Article: Q179988
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you programmatically set the Width of a ColumnHeader, the width of the
	column may actually appear larger than you expect. This presents a problem when
	you attempt to save the ColumnHeader Width settings so that you can restore them
	at a later time.
	
	CAUSE
	=====
	
	Internally, the Width of a ColumnHeader is padded with some predetermined
	constant when it is changed programmatically. This padding is not in effect if
	the Width of the ColumnHeader is changed through the user interface.
	
	
	RESOLUTION
	==========
	
	To work around this problem, you can set or return a ColumnHeader Width using
	the SendMessage API function with the LVM_SETCOLUMNWIDTH or LVM_GETCOLUMNWIDTH
	messages.
	
	The constant and function declarations are as follows:
	
	       Declare Function SendMessage Lib "user32" Alias "SendMessageA" ( _
	            ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
	            ByVal lParam As Long) As Long
	
	       Const LVM_FIRST = &H1000
	       Const LVM_GETCOLUMNWIDTH = LVM_FIRST + 29
	       Const LVM_SETCOLUMNWIDTH = LVM_FIRST + 30
	
	To set the Width of a Columnheader using the message LVM_SETCOLUMNWIDTH, you
	provide the index of the column (starting with 0) as the wParam and the new
	width as the lParam. For example, the following statement sets the width of the
	second column (index 1) of ListView1 to 150:
	
	      SendMessage ListView1.hWnd, LVM_SETCOLUMNWIDTH, 1, 150
	
	To retrieve the Width of a Columnheader using the message LVM_GETCOLUMNWIDTH, you
	provide the index of the column (starting with 0) as the wParam. The lParam is
	unused and should be set to 0. For example, the following statement returns the
	width of the second column (index 1) of ListView1:
	
	      Dim LVWidth as Long
	      LVWidth = SendMessage (ListView1.hWnd, LVM_GETCOLUMNWIDTH, 1, 0)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Click Components on the Project menu and check "Microsoft Windows Common
	  Controls 5.0."
	
	3. Add a ListView control and two CommandButtons to Form1.
	
	4. Change the Caption property of Command1 to "Save Width" and the Caption
	  property of Command2 to "Restore Width."
	
	5. Add the following code to Form1:
	
	        Dim iWidth1 As Long
	        Dim iWidth2 As Long
	
	        Private Sub Command1_Click()
	           'Save the current column widths
	           iWidth1 = ListView1.ColumnHeaders(1).Width
	           iWidth2 = ListView1.ColumnHeaders(2).Width
	        End Sub
	
	        Private Sub Command2_Click()
	           'Restore the column widths
	           ListView1.ColumnHeaders(1).Width = iWidth1
	           ListView1.ColumnHeaders(2).Width = iWidth2
	        End Sub
	
	        Private Sub Form_Load()
	           'Add 2 column headers to ListView1 and specify an
	           'initial width of 1000 for both
	           With ListView1
	              .View = lvwReport
	              .ColumnHeaders.Add , , "Column 1", 1000
	              .ColumnHeaders.Add , , "Column 2", 1000
	           End With
	        End Sub
	
	6. Press the F5 key to run the project.
	
	7. Using your cursor, resize the first column of the ListView control.
	
	8. Click "Save Width" and then click "Restore Width," and note that the width of
	  the first ColumnHeader is larger than the setting you specified.
	
	Additional query words: list view comctl32 column width kbVBp500bug kbVBp600fix kbVBp 
	kbdsd kbDSupport kbPrinting
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
