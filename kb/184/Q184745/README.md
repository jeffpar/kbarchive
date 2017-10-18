---
layout: page
title: "Q184745: HOWTO: Use Script Control Modules and Procedures Collections"
permalink: kb/184/Q184745/
---

## Q184745: HOWTO: Use Script Control Modules and Procedures Collections

	Article: Q184745
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbScript kbVBp kbGrpDSVBDB
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
	
	This article demonstrates how to use the Modules and Procedures properties of
	the Microsoft Script control to segment code. It also demonstrates how you can
	dynamically determine the number of arguments and whether the procedure is a
	Function or Sub.
	
	MORE INFORMATION
	================
	
	The Microsoft Script control includes features that allow the host application
	to segment scripts into different modules. The default module, "Global", is
	always present. Different modules may contain procedures of the same name (that
	is, procedure names have module scope).
	
	The Microsoft Script control also includes procedure properties that allow the
	host application to dynamically determine whether the procedure is a Function or
	a Sub as well as the number of arguments it expects. This allows the host
	application to prompt the user for the correct number of parameter values.
	
	The Modules property of the Script control is an object that contains a
	collection of module objects. It has the following properties and methods:
	
	- Count: The number of modules.
	
	- Item(x): Returns a single Module object.
	
	- Add name: Adds a blank module with the given name.
	
	The Module Object has the following properties and methods:
	
	- Name: The module name.
	
	- Procedures: The Procedures object.
	
	- AddCode code: Adds the code to the module.
	
	- Run name, args: Runs the named procedure.
	
	The Procedures object contains a collection of Procedure objects. It has the
	following properties and methods:
	
	- Count: The number of procedures in the module.
	
	- Item(x): Returns a single Procedure object.
	
	The Procedure object has the following properties and methods:
	
	- Name: The procedure name.
	
	- HasReturnValue: Indicates whether the procedure is a Sub or a Function.
	
	- NumArgs: The number of arguments the procedure requires.
	
	NOTE: Not all properties and methods of the listed objects are given, just those
	relevant to this article.
	
	The following example provides an interactive program that illustrates how to use
	these properties and methods:
	
	IMPORTANT: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures.
	
	Example
	-------
	
	1. In Visual Basic, create a new project (Form1 is created by default).
	
	2. Click Components on the Project menu, and then select the "Microsoft Script
	  Control 1.0" check box.
	
	3. Add the Script control (ScriptControl1), a text box (Text1), three command
	  buttons (Command1, Command2, Command3), and two list boxes (List1, List2) to
	  Form1. Set the MultiLine property of the text box to TRUE. Size the text box
	  to accommodate 5 lines of 30 characters.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	          ScriptControl1.Modules.Add Text1.Text
	          Form_Activate
	        End Sub
	
	        Private Sub Command2_Click()
	          ScriptControl1.Modules(List1).AddCode Text1.Text
	          List1_Click
	        End Sub
	
	        Private Sub Command3_Click()
	        Dim RetVal As Variant, m As Variant
	          Set m = ScriptControl1.Modules(List1.Text)
	          With m.Procedures(List2.Text)
	            Select Case .NumArgs
	              Case 0
	                RetVal = m.Run(List2.Text)
	              Case 1
	                RetVal = m.Run(List2.Text, 5)
	              Case 2
	                RetVal = m.Run(List2.Text, 4, 23)
	              Case Else
	                MsgBox "Procedure has too many arguments"
	            End Select
	            If .HasReturnValue Then
	              MsgBox List2.Text & " returned: " & RetVal
	            End If
	          End With
	        End Sub
	
	        Private Sub Form_Activate()
	        Dim m As Variant
	          List1.Clear
	          With SCriptControl1
	            .Language = "VBScript"
	            .AllowUI = True
	            For Each m In .Modules
	              List1.AddItem m.Name
	            Next m
	          End With
	        End Sub
	
	        Private Sub Form_Load()
	          Command1.Caption = "Add Module"
	          Command2.Caption = "Add Code"
	          Command3.Caption = "Run Procedure"
	        End Sub
	
	        Private Sub List1_Click()
	        Dim m As String, p As Variant
	          m = List1
	          List2.Clear
	          If m = "" Then Exit Sub
	          For Each p In ScriptControl1.Modules(m).Procedures
	            List2.AddItem p.Name
	          Next p
	        End Sub
	
	        Private Sub List2_Click()
	        Dim m As String, p As String, r As Boolean, a As Long
	          m = List1
	          p = List2
	          With ScriptControl1.Modules(m).Procedures(p)
	            r = .HasReturnValue
	            a = .NumArgs
	          End With
	          MsgBox m & "." & p & " has " & IIf(r, "a", "no") & _
	                 " return value and " & a & " arguments"
	        End Sub
	
	5. Run Form1.
	
	6. Create a new module by typing the following in the text box and clicking Add
	  Module:
	
	        Mod2
	
	7. Type the following script in the text box:
	
	        Function Calc(X)
	          Calc = X * 2
	        End Function
	
	8. Select Global in List1, and then click Add Code to add to the global module.
	
	9. Type the following script into the text box:
	
	        Function Calc(X, Y)
	          Calc = X * Y
	        End Function
	
	        Sub Test()
	          MsgBox "The Test Sub in Module Mod2"
	        End Sub
	
	10. Select Mod2 in List1, and then click Add Code to add to the global module.
	
	11. Click on the various modules and procedures. When you select the procedure a
	  message box appears, indicating whether the procedure has a return value as
	  well as the number of arguments it takes.
	
	12. After selecting a procedure, click Run Procedure to run it. The code
	  determines the number of arguments to use and you will see varying message
	  boxes with the results.
	
	NOTE:
	
	- The global module name might not always be "Global" depending on control
	  version or localization. Use the GlobalName constant instead of hard- coding
	  the word "Global".
	
	- There is no method to remove individual modules or procedures. You have to
	  use the .Clear method of the script control to erase all code. You can
	  overwrite a procedure by using the .AddCode method with a procedure of the
	  same name.
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	For additional information and examples on calling procedures in the Global
	module, please see the following article in the Microsoft Knowledge Base:
	
	  Q184740 : HOWTO: Call Functions Using the Script Control
	
	Microsoft Script control Help Topics:
	
	  HasReturnValue Property
	  NumArgs Property
	  AddCode Method
	  Run Method
	  Modules Collection
	  Procedures Collection
	
	Additional query words: kbVBA500 kbVBp500 kbVBp400 kbVBp600 kbScript kbCtrl kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbScript kbVBp kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
