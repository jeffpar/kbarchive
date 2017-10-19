---
layout: page
title: "Q187918: PRB: SendMessage Fails for Some Messages"
permalink: /kb/187/Q187918/
---

## Q187918: PRB: SendMessage Fails for Some Messages

	Article: Q187918
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
	
	The Sendmessage API function call will fail to give expected results for some
	messages when the API Text Viewer declaration is used. For example, the messages
	"WM_SETTEXT" and "LVM_SCROLL" will fail without returning any error values.
	
	CAUSE
	=====
	
	Some messages expect the lParam to be passed as ByVal, while the API Text Viewer
	declaration passes lParam as ByRef.
	
	RESOLUTION
	==========
	
	The declaration can be manually changed after copying the declaration.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When a message expects the lParam as string, then the Sendmessage declaration
	must be changed to pass lParam as ByVal. Additionally, some messages require
	integer values to be passed as ByVal. Because the requirements for messages
	vary, it is necessary to check the documentation for each message for details.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Add a CommandButton and a TextBox to Form1.
	
	3. Paste the following code in the General Declaration section of Form1:
	
	        Option Explicit
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	           ByVal wParam As Long, lParam As Any) As Long
	        Const WM_SETTEXT = &HC
	        Private lRet As Long
	
	        Private Sub Command1_Click()
	            lRet = SendMessage(Text1.hwnd, WM_SETTEXT, 0, "hello")
	        End Sub
	
	4. Run the project and click Command1. Some garbage is placed in the textbox.
	  However, SendMessage returns 1 indicating that SendMessage has succeeded.
	
	5. Change the declaration of SendMessage so that the lParam argument is passed
	  ByVal:
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	           ByVal wParam As Long, ByVal lParam As Any) As Long
	
	6. Run the project once more and click Command1. Note that Text1 now contains
	  the text "hello" as expected.
	
	Additional query words: kbDSupport kbDSD kbVBp500 kbVBp kbAPI kbSDKWin32 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
