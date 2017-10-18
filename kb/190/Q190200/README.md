---
layout: page
title: "Q190200: BUG: Name Conflict Error Even After Renaming Module"
permalink: kb/190/Q190200/
---

## Q190200: BUG: Name Conflict Error Even After Renaming Module

	Article: Q190200
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Microsoft Visual Basic project, when you give the same name to an Enum and
	a class module and run the project, you will get the following error:
	
	  Compile error: Name conflicts with existing module, project or object library
	
	However, after you resolve the name conflict by changing the name of the class
	module, the same error still occurs when you run the project.
	
	CAUSE
	=====
	
	Visual Basic does not rebuild the binding table upon the name change. Therefore,
	the change is not reflected in the system and the conflict persists.
	
	RESOLUTION
	==========
	
	You need to make a few changes to the project (for example, add some code to the
	modules) or reload the project to workaround this error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new ActiveX DLL project in Visual Basic. Class1 is created by default.
	
	2. Paste the following code into the code window of Class1:
	
	        Public Enum t1
	           red
	        End Enum
	
	3. Select Add Class Module from the Project menu and add another class module to
	  the current project.
	
	4. Rename Class2 to t1 using the Properties window.
	
	5. Press the F5 key to run the project. The following error will occur:
	
	  Compile error: Name conflicts with existing module, project or object library
	
	6. Rename the class module t1 back to Class2.
	
	7. Press the F5 key to run the project again. Note that the same error message
	  still occurs despite the fact that the names are no longer in conflict.
	
	Additional query words: kbDSupport kbdss kbVBp500bug kbVBp600bug kbVBp kbCompiler
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
