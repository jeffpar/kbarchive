---
layout: page
title: "Q189483: BUG: Cannot Set RichTextBox Visible Property to False"
permalink: /kb/189/Q189483/
---

## Q189483: BUG: Cannot Set RichTextBox Visible Property to False

	Article: Q189483
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Visible property of a Rich TextBox control to False does not hide
	the control after using the Span method of that control.
	
	RESOLUTION
	==========
	
	To work around this problem, add a call to the ShowWindow API function, passing
	the SW_HIDE constant after setting the Visible property of the Rich Textbox to
	False. This can be tested by uncommenting the following line in the sample code
	in the MORE INFORMATION section below:
	
	     result = ShowWindow(RichTextBox1.hwnd, SW_HIDE)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, click Components, and check the "Microsoft Rich
	  Textbox Control."
	
	3. Place a Rich Textbox Control along with three CommandButtons onto Form1, and
	  add the following code to the form's module:
	
	        Private Declare Function ShowWindow Lib "user32" _
	        (ByVal hwnd As Long, ByVal nCmdShow As Long) As Long
	
	        Const SW_HIDE = 0
	
	        Private Sub Form_Load()
	           Command1.Caption = "Span and Hide"
	           Command2.Caption = "Hide"
	           Command3.Caption = "Show"
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim result As Long
	
	           Debug.Print "Before Span: Visible = " & RichTextBox1.Visible
	           RichTextBox1.Span ".?!:", True, True  ' Select to the end
	           Debug.Print "After Span: Visible = " & RichTextBox1.Visible
	           RichTextBox1.Visible = False
	           '************
	           ' Uncomment the following line to hide the Rich TextBox
	           ' result = ShowWindow(RichTextBox1.hwnd, SW_HIDE)
	           '************
	           Debug.Print "After set Visible to False: Visible = " & _
	              RichTextBox1.Visible
	        End Sub
	
	        Private Sub Command2_Click()
	           RichTextBox1.Visible = False
	        End Sub
	
	        Private Sub Command3_Click()
	           RichTextBox1.Visible = True
	        End Sub
	
	4. Run the project and click "Span and Hide" twice. Notice that the Rich TextBox
	  is visible despite the fact it's Visible property is explicitly set to False.
	
	5. Remove the comment from the ShowWindow call and run the sample again. Notice
	  that the problem no longer occurs.
	
	REFERENCES
	==========
	
	For more information please see the following article in the Microsoft Knowledge
	Base:
	
	  Q149463 RichTextBox Appears Even If Visible Property is False
	
	Additional query words: kbDSupport kbDSD kbVBp kbCtrl kbvbp400bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
