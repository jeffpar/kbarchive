---
layout: page
title: "Q244140: BUG: Visual Basic Application Using HtmlHelp API Crashes"
permalink: /kb/244/Q244140/
---

## Q244140: BUG: Visual Basic Application Using HtmlHelp API Crashes

	Article: Q244140
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbVBp kbVBp500bug kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic application that is running in the IDE uses the HtmlHelp function
	to display a Help window. When the calling form is closed or the project is
	stopped, a fatal error occurs. Under Microsoft Windows 95 and Microsoft Windows
	98, the Visual Basic design environment shuts down with no message. Under
	Microsoft Windows NT, an access violation occurs. Depending on the operating
	system, an IPF or access violation occurs in a compiled program. These problems
	do not occur on Windows 2000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Declare Function HtmlHelp Lib "hhctrl.ocx" _
	          Alias "HtmlHelpA" _
	          (ByVal hwndCaller As Long, _
	          ByVal pszFile As String, _
	          ByVal uCommand As Long, _
	          ByVal dwData As Long) _
	          As Long
	
	  Private Const HH_DISPLAY_TOPIC = &H0
	  Private Const HH_CLOSE_ALL = &H12
	
	  Private Sub Command1_Click()
	     Call HtmlHelp(Me.hWnd, "IEXPLORE.CHM", _
	                         HH_DISPLAY_TOPIC, 0)
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	  '   Call HtmlHelp(Me.hWnd, "", HH_CLOSE_ALL, 0)
	  End Sub
	
	4. Run the project, and click Command1.
	
	5. On Windows 95 and 98, Visual Basic closes. On Windows NT, you should see an
	  access violation. If you build an executable, the application crashes when
	  you close the form.
	
	WORKAROUND
	----------
	
	Uncomment symbol the line of code in the Form_Unload event, and run the
	application again. The problem will no longer occur.
	
	NOTE: This problem does not occur on Windows 2000 or Windows XP.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbVBp kbVBp500bug kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
