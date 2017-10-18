---
layout: page
title: "Q184743: PRB: Script Code Runs During AddCode Method"
permalink: kb/184/Q184743/
---

## Q184743: PRB: Script Code Runs During AddCode Method

	Article: Q184743
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbScript kbVBp kbGrpDSVB
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
	
	Script code runs when you load code into the script control using the AddCode
	method.
	
	CAUSE
	=====
	
	The script contains statements outside of a procedure definition.
	
	RESOLUTION
	==========
	
	Remove any statements outside of procedure definitions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	With Active Scripting, unlike Visual Basic and most other languages, statements
	are allowed outside procedure definitions. This is to allow the script to
	automatically initialize itself at load time.
	
	IMPORTANT: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, create a new project (Form1 is created by default).
	
	2. Click Components on the Project menu, and then select the "Microsoft Script
	  Control 1.0" check box.
	
	3. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to a form. Set the MultiLine property of the text box to
	  TRUE. For ease of use, change the size of Text1 so that it accommodates 5
	  lines of 60 characters.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          On Error Resume Next
	          With ScriptControl1
	            .Language = "VBScript"
	            .AllowUI = True
	            .AddCode Text1.Text
	          End With
	        End Sub
	
	5. Run Form1 and open the Debug window.
	
	6. Type the following script in the text box:
	
	        Sub Test()
	          MsgBox "Hello World"
	        End Sub
	        Test
	
	7. Click the command button. The message box appears.
	
	8. Remove the line "Test" from the script and run Form1 again. The Test code is
	  not executed upon loading the code.
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 INFO: Where to Obtain the Script Control
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: kbVBA500 kbScript kbCtrl kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbScript kbVBp kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
