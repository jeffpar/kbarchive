---
layout: page
title: "Q233398: PRB: Common Dialog ShowHelp Method does not Work with CHM Files"
permalink: /kb/233/Q233398/
---

## Q233398: PRB: Common Dialog ShowHelp Method does not Work with CHM Files

	Article: Q233398
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to display a Help file using the Microsoft Common Dialog Control
	6.0, the following error message is displayed:
	
	  The filename file is not a Windows Help file, or the file is corrupted.
	
	CAUSE
	=====
	
	The ShowHelp method launches WinHelp32.exe, which does not support HTML based
	help files.
	
	RESOLUTION
	==========
	
	To open an HTML based help file from Visual Basic it is necessary to call the
	HtmlHelp API function.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, choose Components and then select "Microsoft Common
	  Dialog Control 6.0". Next, click OK.
	
	3. Site a Common Dialog control on Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	     Private Sub Form_DblClick()
	        CommonDialog1.HelpFile = "c:\winnt\help\vbsetup.chm"
	        CommonDialog1.HelpCommand = cdlHelpContents
	        CommonDialog1.ShowHelp
	     End Sub
	
	5. Modify the path and file name in the second line of code to point to an
	  existing .chm file on your system.
	
	6. Run the application and double-click Form1. The error message described in
	  the SYMPTOMS section occurs.
	
	REFERENCES
	==========
	
	Visual Basic Online Help; search on: "ShowHelp" For more information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q183434: HOWTO: Use HTML Help API in a Visual Basic Application
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
