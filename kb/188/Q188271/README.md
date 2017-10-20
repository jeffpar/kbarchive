---
layout: page
title: "Q188271: HOWTO: Print Contents of the Web Browser Control From VB"
permalink: /kb/188/Q188271/
---

## Q188271: HOWTO: Print Contents of the Web Browser Control From VB

{% raw %}

	Article: Q188271
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbieFAQ
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Web Browser control (version 3.x or 4.x) does not offer a direct Print
	method. This article demonstrates how to print the contents of the Web Browser
	control from Visual Basic.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu. Add a reference to the "Microsoft
	  Internet Controls."
	
	3. Add the following controls to Form1:
	
	  1 CommandButton
	  1 Web Browser
	
	4. Add the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	
	           ' print the contents of the Web Browser control.
	           WebBrowser1.ExecWB _
	           OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER, 0, 0
	
	        End Sub
	
	        Private Sub Form_Load()
	
	           ' set the caption of the command button.
	           Command1.Caption = "&Print"
	
	           ' position the print command button at the top-left.
	           Command1.Move 0, 0
	
	           ' position the Web Browser control below the command button.
	            WebBrowser1.Move 0, 750
	
	            ' navigate to a Web site for testing purposes.
	            WebBrowser1.Navigate "http://www.microsoft.com"
	
	        End Sub
	
	        Private Sub Form_Resize()
	
	           ' when the form is resized, the Web Browser control should
	           ' remain the same size as the form.
	           WebBrowser1.Width = Form1.Width
	           WebBrowser1.Height = Form1.Height
	
	        End Sub
	
	5. Press the F5 key to run the project. When the test site has been downloaded
	  and rendered in the Web Browser, click the "Print" command button, and the
	  contents of the Web Browser will be printed.
	
	  NOTE: Using version 3.x of the Web Browser control will result in a Print
	  Dialog appearing when you attempt to print the content of the control. This
	  is by design.
	
	Additional query words: kbDSupport kbdss kbVBp500 kbprint kbVBp kbVBp600 kbWebBrowser
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp500 kbVBp600 kbGrpDSVB kbFAQ kbDSupport kbieFAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
