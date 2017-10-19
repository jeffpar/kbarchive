---
layout: page
title: "Q255757: PRB: Circular Dependency Error When UDT Is Not In Base Class Mod"
permalink: /kb/255/Q255757/
---

## Q255757: PRB: Circular Dependency Error When UDT Is Not In Base Class Mod

	Article: Q255757
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCompiler kbCOMt kbCtrlCreate kbInprocSvr kbVBp kbVBp600bug kbGrpDSVB kbDSup
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A circular dependency compilation error can occur when a User Defined Type (UDT)
	is defined in a class module that implements another base class interface, and
	the base class module has references to the UDT.
	
	RESOLUTION
	==========
	
	Move the UDT definition to the base class module.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic ActiveX DLL project. Class1 is created by default.
	
	2. Add the following code to the General Declarations section of Class1:
	
	  Public Function myFunct() As myUDT
	  End Function
	
	3. On the Project menu, select Add Class Module, and then add Class2 to the
	  project.
	
	4. Add the following code to the General Declarations section of Class2:
	
	  Public Type myUDT
	      iNum As Integer
	  End Type
	
	  Implements Class1
	
	  Private Function Class1_myFunct() As myUDT
	  End Function
	
	5. Run the project. The following error is raised:
	
	  Compile Error:
	  Circular dependencies between modules.
	
	6. To correct the problem, move the definition of myUDT from Class2 to Class1
	  and run the project again. No error occurs.
	
	Additional query words: UDType
	
	======================================================================
	Keywords          : kbActiveX kbCompiler kbCOMt kbCtrlCreate kbInprocSvr kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
