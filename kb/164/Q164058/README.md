---
layout: page
title: "Q164058: Passing Procedure Arguments in Visual Basic for Applications"
permalink: /kb/164/Q164058/
---

## Q164058: Passing Procedure Arguments in Visual Basic for Applications

	Article: Q164058
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbprogramming kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Visual Basic for Applications, you can pass arguments (values) in
	the following ways:
	
	- From one procedure to another procedure in the same module.
	
	- From one procedure in one module to another procedure in a different module
	  in the same project.
	
	- From one procedure in one project to another procedure in a different
	  project.
	
	This article includes Visual Basic for Applications macro examples that pass
	arguments in these ways.
	
	MORE INFORMATION
	================
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	You can create several modules for a single Visual Basic for Applications
	project. Within a single module you can create several procedures (macros, event
	procedures, subroutines and functions). Use one of the following methods to pass
	arguments between multiple procedures, modules and projects.
	
	Method 1: Passing Arguments Between Procedures in the Same Project
	------------------------------------------------------------------
	
	NOTE: The following Visual Basic for Applications examples can exist in different
	modules. The examples work without modification if the following is true:
	
	- No other procedure with the same name exists in a different module.
	
	- The modules exist in the same project.
	
	The CallReverseTextFunction procedure in Module1 passes a string argument to the
	ReverseText function in Module2.
	
	In Module1 for Project1, type the following macro:
	
	     Sub CallReverseTextFunction()
	        MsgBox ReverseText("Hello")
	     End Sub
	
	In Module2 for Project1, type the following macro:
	
	     Function ReverseText(sItem As String)
	        ' This function reverses text.
	        Dim iCount As Integer
	        For iCount = Len(sItem) To 1 Step -1
	           ReverseText = ReverseText & Mid$(sItem, iCount, 1)
	        Next
	     End Function
	
	Method 2: Passing Arguments to Procedures with the Same Name
	------------------------------------------------------------
	
	In a Visual Basic for Applications project, you can create one or more modules.
	In each module you can create a procedure that has the same name. For example, a
	project called MyProject can contain a module with a procedure called MyFunction
	and another module that contains a procedure called MyFunction:
	
	            ----- MyProject -----
	           |                     |
	     -- Module1 --            Module2
	    |             |              |
	MyMacro      MyFunction     MyFunction
	
	To call and pass arguments to a procedure when another procedure with the same
	name exists in another module, include the module name so that the program calls
	the correct procedure.
	
	In the following Visual Basic for Applications examples, there are two procedures
	called MyFunction. One exists in Module1, the other exists in Module2. In this
	example, the program calls MyFunction in Module2.
	
	To call the procedure in Module1, use the following macro:
	
	     Sub CallingProcedure()
	        ' To call a procedure of the same name
	        ' in another module, precede the procedure
	        ' name with the module name.
	        MsgBox Module2.MyFunction("MyFunction")
	     End Sub
	
	In Module1, type the following macro:
	
	     Function MyFunction(sItem As String)
	        MyFunction = "Module 1, " & sItem
	     End Function
	
	In Module 2, type the following macro:
	
	     Function MyFunction(sItem As String)
	        MyFunction = "Module 2, " & sItem
	     End Function
	
	Method 3: Passing Arguments Between Procedures in Different Projects
	--------------------------------------------------------------------
	
	To pass an argument to a procedure that exists in a different project, first add
	a reference to that project. You can add a project reference by using menu
	commands in the Visual Basic for Editor, or you can add a reference by using
	Visual Basic for Applications commands.
	
	To add a reference using the Tools menu, use the following steps:
	
	1. On the Tools menu, click References to display the References dialog box.
	
	  The References dialog box shows all object libraries and projects that are
	  registered with the operating system.
	
	2. Scroll down to see the project you want to reference. If the template or
	  document project does not appear in the list, click Browse to search for
	  *.dot or *.doc files.
	
	  References with check boxes that are selected are used by your project; items
	  with check boxes that are cleared are not used. However, you can add them.
	
	3. Click the Project reference in the Available References box and click OK.
	
	  If you did not saved the project, it appears as follows
	
	  UNSAVED: <ProjectName>
	
	  and you cannot create a reference to it.
	
	Adding a reference using Visual Basic for Applications commands:
	
	Because Visual Basic for Applications precompiles the macro before it runs it,
	the following error may occur:
	
	  "Compile Error: Sub or Function not defined"
	
	This behavior occurs when the following conditions are true:
	
	- The macro includes a command to add a reference to the project.
	
	-and-
	
	- The call to the procedure in the project you are referencing exists in the
	  same macro.
	
	For this reason, place the commands to add a reference in one macro, and then add
	the call to the referenced procedure in another macro.
	
	In the following example, the AddProjectReference macro adds the project
	reference, and then calls MyMacro. MyMacro then calls the procedure in the
	referenced project.
	
	NOTE: Macro execution must begin in the AddProjectReference macro.
	
	To create the macros, type the following code in a module:
	
	     Sub AddProjectReference()
	        ' Add the project reference.
	        VBE.ActiveVBProject.References.AddFromFile _
	        ("C:\Program Files\Microsoft Office\Templates\MyRefProject.dot")
	
	        ' Run the macro that makes the call into the
	        ' referenced project.
	        Call MyMacro
	     End Sub
	
	     Sub MyMacro()
	        Call MyRefProjectProcedure
	     End Sub
	
	To pass arguments to the referenced procedure, add the arguments. For example,
	type the following argument in the following example:
	
	  Sub MyMacro()
	     Call MyRefProjectProcedure ("Hello")
	  End Sub
	
	For more information about adding References, click the Office Assistant in the
	Visual Basic for Applications Editor, type "Adding References" (without the
	quotation marks), click Search, and then click to view "Check or Add an Object
	Library Reference."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Visual Basic for Applications Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: wordcon 97 1.00 1.0z word8 word97 8.00 8.0 vb vbe vba xlvbainfo
	
	======================================================================
	Keywords          : kbcode kbprogramming kbusage 
	Technology        : kbWordSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbExcel97Search kbPowerPt97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
