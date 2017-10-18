---
layout: page
title: "Q184898: PRB: Can't Use Late Binding When Server Method Uses UDT"
permalink: kb/184/Q184898/
---

## Q184898: PRB: Can't Use Late Binding When Server Method Uses UDT

	Article: Q184898
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an ActiveX server that you created with Visual Basic version 6.0,
	you receive an error when accessing a method or property that accepts and/or
	returns a user-defined type (UDT).
	
	You receive one of the following errors when accessing a method that returns a
	UDT or accepts a UDT as an argument:
	
	  Run-time Error '429':
	  ActiveX component can't create object
	
	  -or-
	
	  Compile error:
	  Only user-defined types defined in public object modules can be coerced
	  to or from a variant or passed to late-bound functions.
	
	CAUSE
	=====
	
	A method that returns or accepts a user-defined type (UDT) cannot be called when
	using late binding.
	
	     Dim oMyObject as Object
	     Dim MyUDT as Object
	     Set oMyObject = CreateObject("MyProject.MyClass")
	     MyUDT = oMyObject.MyMethod    '<-- This line generates a run-time error
	                                   '    if MyMethod returns a UDT.
	
	RESOLUTION
	==========
	
	To correct this problem, you can use either of the following two solutions:
	
	- Use early binding instead of late binding.
	
	- Modify the server so that the method returns an object of another class
	  rather than a UDT.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX EXE project.
	
	2. On the Project menu, click Properties. Change the Project Name to
	  "TestServer" and click OK.
	
	3. Add the following code to Class1:
	
	        Public Type MyUDT
	           x as Long
	           y as Long
	        End Type
	
	        Public Function MyMethod() as MyUDT
	           MyMethod.x = 1
	           MyMethod.y = 2
	        End Function
	
	4. On the File menu, click Make TestServer.EXE.
	
	5. Close this project and start a new Standard EXE project.
	
	6. Add two command buttons to Form1.
	
	7. Add the following code to Form1:
	
	        Private Type MyUDT
	           x as Long
	           y as Long
	        End Type
	
	        Private Sub Command1_Click()
	           Dim obj1 as Object
	           Dim obj2 as Object
	           Set obj1 = CreateObject("TestServer.Class1")
	           obj2 = obj1.MyMethod           '<== Generates run-time error #429.
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim obj1 as Object
	           Dim mu as MyUDT
	           Set obj1 = CreateObject("TestServer.Class1")
	           mu = obj1.MyMethod             '<== Generates compile error.
	        End Sub
	
	8. Run the project by pressing F5 and click Command1. You receive the run-time
	  error #429. Click End to end the program.
	
	9. Run the project once more and click Command2. You receive the compile error
	  described at the beginning of this article.
	
	REFERENCES
	==========
	
	For information about binding ActiveX components in your project, refer to the
	"Declaring an Object Variable" and "How Binding Affects ActiveX Component
	Performance" topics in the Visual Basic product documentation.
	
	For information about creating your own collection classes, refer to the "Using
	Properties and Collections to Create Object Models" topic in the Visual Basic
	product documentation.
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp600 kbActiveX kbDSupport kbDSD
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
