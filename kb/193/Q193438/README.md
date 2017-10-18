---
layout: page
title: "Q193438: BUG: Server Not Released if Raise Error in Class_Initialize"
permalink: kb/193/Q193438/
---

## Q193438: BUG: Server Not Released if Raise Error in Class_Initialize

	Article: Q193438
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbActivexEvents kbServer kbVBp500bug kbVBp600bug kbOSWin95 kbGrpDSVB kb
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Raising an error in the Initialize event of a class module in an EXE server
	keeps the server from being released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE project in Visual Basic. Class1 is created by
	  default.
	
	2. Add the following code to Class1:
	
	        Private Sub Class_Initialize()
	           Err.Raise vbObjectError + 1024
	        End Sub
	
	3. In the Project Properties, set the Project Name to MyServer.
	
	4. Save the project as MyServer.vbp, and then make MyServer.exe.
	
	5. Create a new Standard EXE project. Form1 is created by default.
	
	6. Add the following code to Form1 in the new Standard EXE project:
	
	        Private Sub Form_Load()
	           Dim oServer As Object
	           On Error GoTo Err_Init
	
	           Set oServer = CreateObject("MyServer.Class1")
	           Exit Sub
	
	        Err_Init:
	            Set oServer = Nothing
	        End Sub
	
	7. Run the standard EXE project, and then close it.
	
	  In Windows 95 or Windows Me, press the CTRL+ALT+DEL key combination to open
	  the Close Programs dialog box.
	
	  -or-
	
	  In Windows NT 4.0 or Windows 2000, press the CTRL+ALT+DEL key combination, and
	  then click Task Manager.
	
	  Note that MyServer.exe is still in memory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbActivexEvents kbServer kbVBp500bug kbVBp600bug kbOSWin95 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
