---
layout: page
title: "Q189949: PRB: Run-Time Error After an ActiveX Server Crashes"
permalink: kb/189/Q189949/
---

## Q189949: PRB: Run-Time Error After an ActiveX Server Crashes

	Article: Q189949
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ActiveX Server (EXE) object is instantiated in a Visual Basic client
	application, and the ActiveX server crashes, Visual Basic 5.0 and Visual Basic
	6.0 will return the following error messages, respectively, every time the
	server object is subsequently referenced:
	
	  Run-time Error '-2147023174 (800706ba)':
	  Automation Error
	
	  Run-time Error '462':
	  The remote server machine does not exist or is unavailable
	
	This includes attempts to use the keyword New or CreateObject to restart the
	server.
	
	CAUSE
	=====
	
	After the ActiveX server crashes, Visual Basic attempts to re-establish a
	connection to the server and the above error is triggered.
	
	RESOLUTION
	==========
	
	For Visual Basic 6.0, if you modify the code in step 4 of the "Create the
	Client" steps below, the error does not occur:
	
	  Private Sub Command1_Click()
	     On Error GoTo ErrHand
	     Set clsTest = New Class1
	     clsTest.Test
	     Exit Sub
	  ErrHand:
	     Set clsTest = Nothing
	     Resume
	  End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the Server
	-----------------
	
	1. Launch Visual Basic and create a new ActiveX EXE project. Class1 is created
	  by default.
	
	2. Paste the following code into the code window:
	
	        Option Explicit
	        Public Event SomeEvent()
	
	        Public Sub Test()
	           MsgBox "Test"
	           RaiseEvent SomeEvent
	        End Sub
	
	3. Select Make Project1.exe from the File menu to compile the ActiveX EXE.
	
	Create the Client
	-----------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. In the Properties window, change the Name Property of the project to
	  "Client."
	
	3. Select References from the Project menu, and check Project1.
	
	4. In Client, add a CommandButton (Command1) to Form1 and paste the following
	  code into the code module for Form1:
	
	        Option Explicit
	        Dim WithEvents clsTest As Class1
	
	        Private Sub Command1_Click()
	           Set clsTest  = New Class1
	           clsTest.Test
	        End Sub
	
	        Private Sub clsTest_SomeEvent()
	           MsgBox "SomeEvent"
	        End Sub
	
	5. Press the F5 key to run the project and click on Command1.
	
	6. Message boxes "Test" and "SomeEvent" pop up subsequently. Click OK on both
	  Message boxes to close them.
	
	7. Press the CTRL+ALT+DEL key combination to bring up the Task Manager.
	
	8. Under Windows NT4 or Windows 2000, select the Processes tab, scroll down the
	  list, and browse for the name of the ActiveX EXE server, Project1. Select it
	  and click the End Process button. Under Windows 95, Windows 98, or Windows
	  Me, select Project1 from the program list and click the End Task button.
	  NOTE: If clsTest is not set to anything after the "Test" method is invoked,
	  it is not displayed in the Task manager.
	
	9. Go back to the running Visual Basic client and click on Command1. Either of
	  the two error messages (depending on the version of Visual Basic used)
	  mentioned in the Symptoms section above occurs.
	
	Additional query words: -2147023174 (800706ba) 462
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
