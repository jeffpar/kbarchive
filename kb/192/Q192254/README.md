---
layout: page
title: "Q192254: BUG: SetWindowPos API Does Not Set Topmost Window in VB"
permalink: kb/192/Q192254/
---

## Q192254: BUG: SetWindowPos API Does Not Set Topmost Window in VB

	Article: Q192254
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
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
	
	When using the SetWindowPos() API in Visual Basic to set the Topmost window
	flag, these known problems may occur:
	
	1. When an application is running in the Visual Basic IDE, clicking on the
	  Desktop or My Computer icon causes the Topmost window setting to be turned
	  off. This does not occur when the application is a compiled EXE. Please see
	  the REFERENCES section below for more information.
	
	2. Setting the Topmost flag for a parent form does not set it for that form's
	  children. This conflicts with the documented behavior of the SetWindowPos
	  function.
	
	3. When calling SetWindowPos with the NoTopmost flag for a Visual Basic form,
	  all forms in the project are set to NoTopmost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	It is possible to use the SetWindowPos API function to make a Visual Basic Form
	stay topmost in the z-order (always on top), even when focus is on another
	window. However, the problems listed above may result.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a standard EXE project. Form1 is created by
	  default.
	
	2. From the Project menu, add another Form to the project. It should be called
	  Form2.
	
	3. From the Project menu, add a Basic Module (.BAS) to the project and add the
	  following code:
	
	        ' SetWindowPos Function
	        Declare Function SetWindowPos Lib "user32" _
	           (ByVal hwnd As Long, ByVal hWndInsertAfter As Long, _
	            ByVal x As Long, ByVal y As Long, ByVal cx As Long, _
	            ByVal cy As Long, ByVal wFlags As Long) As Long
	
	        ' SetWindowPos Flags
	        Public Const SWP_NOSIZE = &H1
	        Public Const SWP_NOMOVE = &H2
	        Public Const HWND_TOPMOST = -1
	        Public Const HWND_NOTOPMOST = -2
	
	4. Add two CommandButtons to Form2 and add the following code to its Code
	  Window:
	
	        Private Sub Form_Load()
	           Command1.Caption = "Make Topmost"
	           Command2.Caption = "Unload Form2"
	        End Sub
	
	        Private Sub Command1_Click()
	           Call SetWindowPos(Me.hWnd, HWND_TOPMOST, 0, 0, 0, 0, _
	                             SWP_NOSIZE Or SWP_NOMOVE)
	        End Sub
	
	        Private Sub Command2_Click()
	           Call SetWindowPos(Me.hWnd, HWND_NOTOPMOST, 0, 0, 0, 0, _
	                             SWP_NOSIZE Or SWP_NOMOVE)
	           Unload Me
	        End Sub
	
	5. Now add a CommandButton to Form1 and add the following code to its Code
	  Window:
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Form2"
	           Call SetWindowPos(Me.hWnd, HWND_TOPMOST, 0, 0, 0, 0, _
	                             SWP_NOSIZE Or SWP_NOMOVE)
	        End Sub
	
	        Private Sub Command1_Click()
	           Form2.Show vbModeless, Me
	        End Sub
	
	6. Compile the program and run it as an EXE (outside the Debugger).
	
	  RESULTS: Form1 appears as a Topmost window. Pressing the "Show Form2" button
	  makes Form2 visible, but you will notice that Form2 (a child of Form1) is not
	  the topmost window. In fact, you may need to move Form1 to see Form2. This
	  behavior is contrary to the product documentation. Now press the "Make
	  Topmost" button of Form2. This should make Form2 a topmost window. Pressing
	  the "Unload Form2" button will cause Form2 to clear its Topmost flag before
	  closing. This causes Form1's Topmost flag to be cleared as well.
	
	  NOTE: Form1 may remain topmost in the z-order until you switch to another
	  window and then switch back. This can give the impression that Form1 is still
	  a topmost window, but the topmost flag has been cleared.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q150233 : BUG: Topmost Window Does Not Stay on Top in Design Environment
	
	  Q184297 : HOWTO: Create a Form That Always Stays on Top
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbAPI kbSDKWin32 kbUserGrp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
