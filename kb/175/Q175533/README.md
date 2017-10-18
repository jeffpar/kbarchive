---
layout: page
title: "Q175533: BUG: Toolbar Does Not Wrap Correctly"
permalink: kb/175/Q175533/
---

## Q175533: BUG: Toolbar Does Not Wrap Correctly

	Article: Q175533
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the number of visible buttons on a Toolbar, the Toolbar does not
	wrap when it should. This problem may occur when adding, removing, or changing
	the Visible property of buttons on the Toolbar.
	
	RESOLUTION
	==========
	
	The work around is to either resize the form or use SendMessage(Toolbar1.hwnd,
	WM_SIZE, 0, 0) to force resizing of the Toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When using the Add method of the Buttons Collections, wrapping will not occur
	with the first Button that won't fit but will occur when a subsequent Button is
	added. Conversely, when using the Remove method, wrapping occurs one Button too
	soon so that when only one Button remains on the last row, the Toolbar unwraps,
	placing this last Button off the Toolbar. Changing the Visible property of
	Buttons never triggers wrapping. The example that follows demonstrates the
	problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic project.
	
	2. Click Components on the Project menu and check "Microsoft Windows Common
	  Controls 5.0."
	
	3. Add two CommandButtons and a Toolbar control to Form1.
	
	4. Paste the following code into the form's General Declarations section:
	
	        Option Explicit
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	        "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	        ByVal wParam As Long, lParam As Any) As Long
	
	        Const WM_SIZE = &H5
	
	        Private Sub Command1_Click()
	        Dim I As Integer    ' Make all Buttons visible
	        For I = 1 To Toolbar1.Buttons.Count
	            Toolbar1.Buttons(I).Visible = True
	        Next I
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim RetVal As Long
	        ' If Internet Explorer 4.0 is installed, you must repeat the
	        ' following SendMessage line, so that the message is sent twice.
	        RetVal = SendMessage(Toolbar1.hwnd, WM_SIZE, 0, 0)  ' Wrap
	        ' If placing another control on the Toolbar, set it's Left and ZOrder
	        ' properties after the SendMessage.  For a demonstration of this,
	        ' see "Example" under "Toolbar Control" in On Line Help.
	        End Sub
	
	        Private Sub Form_Load()
	        Dim I As Integer
	        Dim btnX As Button
	        Me.Width = 4200     ' So that 15 buttons won't fit
	        Me.Height = 3000    ' So that Command buttons will fit
	        Toolbar1.Wrappable = True
	        For I = 1 To 15     ' Add more buttons than will fit
	            Set btnX = Toolbar1.Buttons.Add(, , , tbrDefault)
	            If I > 5 Then btnX.Visible = False  ' Start with 5 buttons
	            If I Mod 5 = 0 Then ' Make Groups of 5 (Optional)
	                Set btnX = Toolbar1.Buttons.Add(, , , tbrSeparator)
	            End If
	        Next I
	        ' Place and size Command buttons so that Toolbar1 has room to wrap
	        With Command1
	          .Width = 2000
	          .Caption = "Add Buttons"
	          .Left = 200
	          .Top = (Toolbar1.Height * 2) + 250
	        End With
	        With Command2
	          .Width = 2000
	          .Caption = "Wrap Toolbar"
	          .Left = 200
	          .Top = Command1.Top + Command1.Height + 15
	        End With
	        End Sub
	
	5. Run the project. You will see five blank buttons on the Toolbar.
	
	6. Click on "Add Buttons." Ten more buttons are made visible but not all will
	  fit. Note that the ToolBar does not wrap.
	
	7. Click on "Wrap Toolbar." Note that the Toolbar now wraps.
	
	Making more buttons visible than will fit on the Toolbar should cause it to wrap,
	but the code to do this is not triggered. Resizing the Form will trigger this
	code, but using the SendMessage API is a better solution because it also works
	on a Maximized Form.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp400bug kbVBp500bug kbVBp600bug kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbbug
	
	=============================================================================
	
