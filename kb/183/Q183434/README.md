---
layout: page
title: "Q183434: HOWTO: Use HTML Help API in a Visual Basic Application"
permalink: /kb/183/Q183434/
---

## Q183434: HOWTO: Use HTML Help API in a Visual Basic Application

{% raw %}

	Article: Q183434
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbHTMLHelp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbHTMLHelp130
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft HTML Help 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps necessary to use the HTML Help API in a Visual
	Basic application.
	
	MORE INFORMATION
	================
	
	The steps needed to use the HTML Help API in a Visual Basic application are:
	
	1. Declare the HTML Help constants.
	
	2. Declare the HtmlHelp() function.
	
	3. Call the HtmlHelp() function with valid parameters.
	
	The following code fragments demonstrate these steps:
	
	1. The HTML Help constants are defined as follows:
	
	        Const HH_DISPLAY_TOPIC = &H0
	        Const HH_SET_WIN_TYPE = &H4
	        Const HH_GET_WIN_TYPE = &H5
	        Const HH_GET_WIN_HANDLE = &H6
	        Const HH_DISPLAY_TEXT_POPUP = &HE   ' Display string resource ID or
	                                            ' text in a pop-up window.
	        Const HH_HELP_CONTEXT = &HF         ' Display mapped numeric value in
	                                            ' dwData.
	        Const HH_TP_HELP_CONTEXTMENU = &H10 ' Text pop-up help, similar to
	                                            ' WinHelp's HELP_CONTEXTMENU.
	        Const HH_TP_HELP_WM_HELP = &H11     ' text pop-up help, similar to
	                                            ' WinHelp's HELP_WM_HELP.
	
	2. The HtmlHelp() function is declared as follows:
	
	        Declare Function HtmlHelp Lib "hhctrl.ocx" Alias "HtmlHelpA" _
	           (ByVal hwndCaller As Long, ByVal pszFile As String, _
	           ByVal uCommand As Long, ByVal dwData As Long) As Long
	
	3. The following are examples of how to call the HTML Help API from Visual
	  Basic:
	
	        ' HTML Help file launched in response to a button click:
	        Private Sub HH_DISPLAY_Click()
	        'hWnd is a Long defined elsewhere to be the window handle
	        'that will be the parent to the help window.
	           Dim hwndHelp As Long
	           'The return value is the window handle of the created help window.
	           hwndHelp = HtmlHelp(hWnd, "myfile.chm", HH_DISPLAY_TOPIC, 0)
	        End Sub
	
	        ' A specific topic identified by the variable ContextID is launched
	        ' in response to this button click:
	        Private Sub HH_HELP_Click()
	           Dim hwndHelp As Long
	           'The return value is the window handle of the created help window.
	          hwndHelp = HtmlHelp(hWnd, "myfile.chm", HH_HELP_CONTEXT, ContextID)
	        End Sub
	
	REFERENCES
	==========
	
	HTML Help Workshop; Online Help
	HTML Help Web Site:
	
	  http://msdn.microsoft.com/workshop/author/htmlhelp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHTMLHelp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbHTMLHelp130 
	Technology        : kbVBSearch kbHTMLHelpSearch kbAudDeveloper kbVB400Search kbVB400 kbHTMLHelp130
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
