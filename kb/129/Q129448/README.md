---
layout: page
title: "Q129448: PRB: Using Reserved Keywords as Types"
permalink: /kb/129/Q129448/
---

## Q129448: PRB: Using Reserved Keywords as Types

	Article: Q129448
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use reserved keywords as types when declaring object variables; however,
	this practice should be avoided. If the environment setting for "Auto Syntax
	Check" is turned on, you will receive either the error "Expected: New or type
	name" or "Expected: type name," depending on whether or not you declare
	variables with the "New" keyword.
	
	You can work around the syntax checker by placing square brackets ([]) around the
	reserved keyword; however, Visual Basic will remove the square brackets from the
	code window. Consequently, editing any part of the line of code that had square
	brackets causes the code to be invalidated again by the syntax checker.
	Furthermore, if you save a project and reload it at a later time and attempt to
	execute the program, you will receive the error "Syntax error" until you add the
	square brackets back in.
	
	CAUSE
	=====
	
	Because of the way Visual Basic internally handles the name of user defined
	types, the square brackets cannot be preserved and are removed.
	
	RESOLUTION
	==========
	
	The solution is to not use reserved keywords as types.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Click procedure.
	
	         Private Sub Form1_Click()
	            ABC
	         End Sub
	
	3. From the Insert menu, choose Module; Module1 will be created.
	
	4. Add the following code to the general declarations section of Module1.
	
	         Public Sub ABC()
	            Dim MyObject As New [Dim]
	            'the brackets will disappear and the above line will appear as
	            'Dim MyObject As New Dim
	         End Sub
	
	5. From the Insert Menu, choose Class Module; Class1 will be created. In the
	  Properties menu, set the Name property to Dim.
	
	6. Add the following code to the general declarations section of Class1 module.
	
	         Private MyProperty As Date
	
	7. Edit the single line of code in Module1; for example, retype the word
	  MyObject. The line of code turns red.
	
	8. Start the program by choosing Start from the Run menu (or press F5) and you
	  get "Syntax Error."
	
	9. Re-enter the brackets on the line of code Dim MyObject as New [Dim].
	
	10. From the File menu, choose Save Project As and save all of the project
	  files.
	
	11. From the File menu, choose Open Project and reload the project you just
	  saved.
	
	12. Start the program by pressing F5 and you get "Syntax Error."
	
	13. If you check the single line of code in Module1 you will see that the line
	  of code has again turned red.
	
	Only reserved keywords are affected by this behavior. You can still use other
	unreserved keywords as types when declaring object variables. The significance
	of allowing unreserved keywords is that compatibility is retained across
	applications such as Excel, which has a Name object (Name is an unreserved
	keyword). Therefore, you could specify Name (rather than Excel.Name) in a Visual
	Basic project and reference the correct object.
	
	A list of Visual Basic reserved keywords is shown below.
	
	List of Reserved Keywords
	-------------------------
	
	And                      Function                 PsetOr
	Any                      Get                      Private
	As                       Global                   Public
	ByVal                    GoSub                    ReDim
	Call                     GoTo                     Rem
	Case                     If                       Resume
	Close                    Imp                      Return
	Const                    Let                      RSet
	Debug                    Like                     Set
	Declare                  Local                    Static
	Dim                      Loop                     Stop
	Do                       Lset                     Sub
	Each                     Me                       To
	Else                     New                      True
	Elseif                   Next                     Type
	End                      Not                      Typeof
	Endif                    Nothing                  Until
	Erase                    Null                     Wend
	Eqv                      On                       While
	Exit                     Open                     With
	False                    Option                   Xor
	For
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
