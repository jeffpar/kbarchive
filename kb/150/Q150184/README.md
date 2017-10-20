---
layout: page
title: "Q150184: FIX: Unloading a Form After Assigning Text Property Causes GPF"
permalink: /kb/150/Q150184/
---

## Q150184: FIX: Unloading a Form After Assigning Text Property Causes GPF

{% raw %}

	Article: Q150184
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Text property of a Text box is set equal to the Text property of a Text
	box on a separate modal form, and if that statement is followed by unloading the
	modal form, a General Protection Fault results.
	
	RESOLUTION
	==========
	
	Rather than use the Unload statement to unload the modal dialog box, use the
	PostMessage API function. The declaration for PostMessage is:
	
	     #If Win32 Then
	
	     Private Declare Function PostMessage Lib "user32" Alias _
	     "PostMessageA"(ByVal hWnd As Long, ByVal wMsg As Long, _
	     ByVal wParam As Long, ByVal lParam As Long) As Long
	
	     #Else
	
	     Private Declare Function PostMessage Lib "User" (ByVal hWnd As Integer,
	     ByVal wMsg As Integer, ByVal wParam As Integer, lParam As Any) As
	     Integer
	
	     #End If
	
	To post a close message for a form, set the first parameter to the hWnd of the
	target form, and the other three parameters as specified below:
	
	     Const NILL = 0&
	
	     Const WM_SYSCOMMAND = &H112
	
	     Const SC_CLOSE = &HF060
	
	so the following statement closes down Form2:
	
	     PostMessage Form2.hWnd, WM_SYSCOMMAND, SC_CLOSE, NILL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add a Text
	  box to Form1. In the Click event for Form1, place the following code:
	
	     Private Sub Form_Click()
	       Form2.Show 1
	     End Sub
	
	2. From the Insert menu, select Form to add another form to the project. On
	  Form2, place a Text box. Add the following code to Form2:
	
	     Private Sub Text1_DblClick()
	       Form1.Text1 = Text1
	       Unload Me
	     End Sub
	
	3. Run the project by pressing F5. Click on Form1 to show Form2 modally.
	  Double-click on the text box in Form2, and a General Protection Fault occurs.
	
	In one test on Windows NT 3.51, with the 32-Bit Edition of Visual Basic, the
	error message was:
	
	  The instruction at "0x00428646" referenced memory at "0x00d10cd8". The memory
	  could not be "read".
	
	In another test with, the 16-Bit Edition of Visual Basic, the error message was:
	
	  VB caused a General Protection Fault in module VB.EXE at 0016:2BFB.
	
	To work around the problem, place the declaration given in the Workaround Section
	above in the General Declarations section of Form2, and change the code in the
	DblClick event of the Text box on Form2 to:
	
	     Private Sub Text1_DblClick()
	
	     Const NILL = 0&
	
	     Const WM_SYSCOMMAND = &H112
	
	     Const SC_CLOSE = &HF060
	
	     Form1.Text1.Text = Text1.Text
	
	     PostMessage Form2.hWnd, WM_SYSCOMMAND, SC_CLOSE, NILL
	
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
