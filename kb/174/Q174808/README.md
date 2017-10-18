---
layout: page
title: "Q174808: PRB: Poor Performance with the GoSub Statement"
permalink: kb/174/Q174808/
---

## Q174808: PRB: Poor Performance with the GoSub Statement

	Article: Q174808
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A project compiled in native code shows poor performance. This behavior occurs
	because the project contains calls to subroutines using the GoSub statement.
	
	CAUSE
	=====
	
	The GoSub statement has not been optimized in Visual Basic.
	
	RESOLUTION
	==========
	
	Instead of using sub-routines, use functions in a module or place your code
	inside an event.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The GoSub statement is still provided for backward compatibility to older
	versions of Visual Basic. However, the GoSub statement was not optimized because
	of potential problems it can cause with the stack. Therefore, you should not use
	subs of functions in your project. You will get much better performance by
	calling a function in a module or placing the code inside an event.
	
	The following section contains instructions on how to create a sample program
	that demonstrates the performance differences between inline code, calling a
	function in a module, and calling a sub-routine using the GoSub statement.
	
	For each method, the values of two variables are swapped 1,000,000 times and the
	time to perform this task is shown on a message box. Each method is in a project
	that is compiled to native code. The following are the results when this project
	was run on a Pentium 200Mhz computer with 64Mb of memory running Windows NT
	Server version 4.0:
	
	- Inline code .016 seconds
	
	- Function call .031 seconds
	
	- GoSub Statement 2.260 seconds
	
	Your results may vary depending on the system configuration used to run this
	test. Note that the time differences will not be evident if you run the projects
	from within the Visual Basic IDE. To see the performance difference, you need to
	compile each project as a native code executable file.
	
	To create the sample project, you will need to create four projects:
	
	1. Inline Code project - contains inline code. This project will be compiled to
	  a native code executable file.
	
	2. Function Call project - contains a project that calls a function in a module.
	  This project will be compiled to a native code executable file.
	
	3. GoSub Statement project - contains a subroutine that is called within the
	  Click event using the GoSub statement. This project will be compiled to a
	  native code executable file.
	
	4. Sample project - contains the code to call the first three executable files.
	  This project can be run within the Visual Basic IDE.
	
	Create the Inline Code Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Copy the following code to the Code window Form1:
	
	        Option Explicit
	        Private Sub Form_Load()
	           Dim lngCounter As Long, x As Long, y As Long, tmp As Long
	           Dim tmrStart As Double
	           Dim strMsg As String
	
	           tmrStart = Timer
	
	           For lngCounter = 1 To 1000000
	              x = 100
	              y = 500
	
	              tmp = x
	              x = y
	              y = tmp
	           Next lngCounter
	
	           strMsg = "Inline took " & Str(Timer - tmrStart) & " seconds."
	           MsgBox (strMsg)
	           End
	        End Sub
	
	3. Add the following code to the module for Form1:
	
	        Sub Form_Load()
	           Swap
	        End Sub
	
	4. From the File menu, click Make Project1.exe to display the Make Project
	  dialog box. Name the executable "Inline" and click OK. The default
	  compilation option in Visual Basic is native code.
	
	5. Close the project.
	
	Create the Function Call Project
	--------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click Add Module to add a module to the project. The
	  Add Module dialog box appears. Click OK. The Module1 code window is
	  displayed.
	
	3. Copy the following code to the Code window of Module1:
	
	        Option Explicit
	        Dim x As Long, y As Long, tmp As Long
	        Public Sub Swap()
	           Dim lngCounter As Long
	           Dim tmrStart As Double
	           Dim strMsg As String
	
	           tmrStart = Timer
	
	           For lngCounter = 1 To 1000000
	              x = 100
	              y = 500
	              tmp = x
	              x = y
	              y = tmp
	           Next lngCounter
	
	           strMsg = "Function Call took " & Str(Timer - tmrStart)
	           strMsg = strMsg & " seconds."
	           MsgBox (strMsg)
	           End
	
	        End Sub
	
	4. From the File menu, click Make Project1.exe to display the Make Project
	  dialog box. Name the executable "FunctionCall" and click OK. The default
	  compilation option in Visual Basic is native code.
	
	5. Close the project.
	
	Create the GoSub Statement Project
	----------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Dim lngCounter As Long, x As Long, y As Long, tmp As Long
	           Dim tmrStart As Double
	           Dim strMsg As String
	
	           tmrStart = Timer
	
	           x = 100
	           y = 500
	
	           For lngCounter = 1 To 1000000
	              GoSub Swap
	           Next lngCounter
	
	           strMsg = "GoSub took " & Str(Timer - tmrStart) & " seconds."
	           MsgBox (strMsg)
	           End
	
	           Swap:
	              tmp = x
	              x = y
	              y = tmp
	           Return
	
	        End Sub
	
	3. From the File menu, click Make Project1.exe to display the Make Project
	  dialog box. Name the executable "GoSub" and click OK. The default compilation
	  option in Visual Basic is native code.
	
	4. Close the project.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add three CommandButtons to Form1.
	
	3. Copy the following code to the Code window of Form1. Enter the pathname of
	  each executable file you created earlier in the sections marked with
	  <<<.
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Command1.Caption = "Inline"
	           Command2.Caption = "Go Sub"
	           Command3.Caption = "Function Call"
	        End Sub
	
	        Private Sub Command1_Click()
	           Shell ("<path>inline.exe")'<<< Change <path> to the path of
	                                     '    inline.exe
	        End Sub
	
	        Private Sub Command2_Click()
	           Shell ("<path>Gosub.exe") '<<< Change <path> to the path
	                                     '    of GoSub.exe
	        End Sub
	
	        Private Sub Command3_Click()
	           Shell ("<path>FunctionCall.exe")  '<<< Change <path> to the path
	                                             '    of FunctionCall.exe
	        End Sub
	
	4. Press the F5 key to run the program. Click each CommandButton to see the
	  results of inline coding, calling a function in a module, and using the GoSub
	  statement to call a subroutine.
	
	(c) Microsoft Corporation 1997. All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
