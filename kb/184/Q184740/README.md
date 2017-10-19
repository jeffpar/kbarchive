---
layout: page
title: "Q184740: HOWTO: Call Functions Using the Script Control"
permalink: /kb/184/Q184740/
---

## Q184740: HOWTO: Call Functions Using the Script Control

	Article: Q184740
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
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
	
	SUMMARY
	=======
	
	This article provides sample code for the Script control that demonstrates
	various methods of calling script functions from Visual Basic.
	
	MORE INFORMATION
	================
	
	IMPORTANT: Microsoft provides programming examples for illustration only,
	without warranty either expressed or implied, including, but not limited to, the
	implied warranties of merchantability and/or fitness for a particular purpose.
	This article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	The Script control can host VBScript, JavaScript, and any other compliant
	scripting language, so your users can script your application in a similar
	manner to using VBScript or JavaScript to provide additional functionality for
	Web pages.
	
	The following article in the Microsoft Knowledge Base describes how to obtain the
	Script control:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	The Script control provides four methods for calling Sub and Function script
	routines:
	
	- Eval: Evaluates a text expression.
	
	- Run: Runs a named Sub or Function.
	
	- Execute: Executes a script statement.
	
	- As a method of a Module object.
	
	Eval
	----
	
	The calling convention is:
	
	    Result = ScriptControl.Eval("some text expression")
	
	You can use this method to call both intrinsic script functions, as well as user
	functions. Function arguments are passed as literal values in the expression
	text and can be either hard-coded or concatenated from a variable.
	
	NOTE: This method cannot be used to call Subroutines.
	
	Run
	---
	
	The calling convention is:
	
	    Result = ScriptControl.Run("Name", arg1, arg2, ... argn)
	
	You can use this method to call Subroutines, in which case the Result returned is
	empty and you can use the alternate calling convention to ignore the return
	result:
	
	    ScriptControl.Run "Name", arg1, arg2, ... argn
	
	NOTE: Name is the name of the Sub or Function, and arg1 ... argn are optional
	depending on the Sub or Function in question.
	
	Execute
	-------
	
	The calling convention is:
	
	    ScriptControl.Execute "statement text"
	
	This method allows you to call any intrinsic statement or Sub routine. You can
	also use it to call functions, but the return result is dropped.
	
	Module Method
	-------------
	
	The calling convention is:
	
	     Result = ScriptControl.Modules(modulename).functionname(arg1, arg2, ...)
	     ScriptControl.Modules(modulename).subname arg1, arg2, ...
	
	The default module is given in the GlobalModule constant, such as:
	
	     Result = ScriptControl.Modules(GlobalModule).MyFunction(5)
	     ScriptControl.Modules(GlobalModule).MySub 5, "A"
	
	For more information on ScriptControl modules, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q184745 : HOWTO: Use Script Control Modules and Procedures Collections
	
	Example
	-------
	
	1. In Visual Basic, create a new project. Form1 is created by default.
	
	2. Click Components on the Project menu, and then select the "Microsoft Script
	  Control 1.0" check box.
	
	3. Add the Script control (ScriptControl1), a text box (Text1), and a command
	  button (Command1) to a form. Set the MultiLine property of the text box to
	  True.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          With ScriptControl1
	            ' Set script language (VBScript is the default).
	            .Language = "VBScript"
	            ' Set UI interaction (TRUE is the default).
	            .AllowUI = True
	            ' Copy the script to the control.
	            .AddCode Text1.Text
	            ' Demonstrate the Eval method.
	            Debug.Print .Eval("AddTwo(5,7)")
	            ' Demonstrate the Run method both with and without return values.
	            .Run "Hello", "Jane Doe"
	            Debug.Print .Run("Hello", "James Smith")
	            .Run "AddTwo", 4, 6
	            Debug.Print .Run("AddTwo", 7, 8)
	            ' Demonstrate the ExecuteStatement method.
	            .ExecuteStatement "Hello ""Sue Smith"""
	            .ExecuteStatement "AddTwo 9,18"
	            .ExecuteStatement "MsgBox CStr(AddTwo(3,8))"
	            .Modules(GlobalModule).Hello "Jane Doe"
	            Dim oMod As Object
	            Set oMod = .Modules(GlobalModule)
	            Debug.Print oMod.AddTwo 12, 24
	            Set oMod = Nothing
	          End With
	        End Sub
	
	5. Run Form1, and open the Debug window.
	
	6. Type the following script in the text box:
	
	        Sub Hello(YourName)
	          MsgBox "Hello " & YourName
	        End Sub
	
	        Function AddTwo(X1, X2)
	          AddTwo = X1 + X2
	        End Function
	
	7. Click the CommandButton.
	
	  NOTE: The following two statements do not produce an output because the
	  function return is lost and the code does not output the result through any
	  other means, such as a global variable or message box:
	
	        .Run "AddTwo", 4, 6
	        .ExecuteStatement "AddTwo 9,18"
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	Additional query words: kbVBA500 kbVBp500 kbNoKeyWord kbVBp600 kbScript kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
