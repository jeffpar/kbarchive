---
layout: page
title: "Q184741: PRB: MsgBox with Script Control Produces Run-Time Error 70"
permalink: /kb/184/Q184741/
---

## Q184741: PRB: MsgBox with Script Control Produces Run-Time Error 70

	Article: Q184741
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCtrl kbScript kbVBp kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a script in an application that hosts the Microsoft Script control,
	MsgBox causes the following error message to appear:
	
	  Run-time error #70:
	  Permission Denied
	
	CAUSE
	=====
	
	The AllowUI property of the control is FALSE.
	
	RESOLUTION
	==========
	
	Set the AllowUI property of the script control to TRUE either through code at
	run time or through the property sheet at design time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Active Scripting, which the script control enables, allows scripting host
	applications to turn off user interface access from scripts. The purpose of this
	feature is to prevent rogue scripts from subverting the host application or the
	operating system.
	
	IMPORTANT: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Step-by-Step Example
	--------------------
	
	1. In Visual Basic, create a new project (Form1 is created by default).
	
	2. Click Components on the Project menu, and then select the "Microsoft Script
	  Control 1.0" check box.
	
	3. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to Form1. Set the MultiLine property of the text box to
	  TRUE.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          On Error Resume Next
	          With ScriptControl1
	            .Language = "VBScript"
	            .AllowUI = False
	            .AddCode Text1.Text
	            .Run "Hello"
	          End With
	          If Err Then MsgBox Err & " " & Error
	        End Sub
	
	5. Run Form1, and open the Debug window.
	
	6. Type the following script in the text box:
	
	        Sub Hello()
	          MsgBox "Hello World"
	        End Sub
	
	7. Click the command button. As a result, the run-time error 70, "Permission
	  Denied" appears.
	
	8. In the Command1_Click, change:
	
	            .AllowUI = False
	
	  to:
	
	            .AllowUI = True
	
	9. Run Form1 again. The error message does not appear.
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbScript kbCtrl kbvba500 kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd 
	kbDSupport
	
	======================================================================
	Keywords          : kbCtrl kbScript kbVBp kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
