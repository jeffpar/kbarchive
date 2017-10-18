---
layout: page
title: "Q276560: BUG: CompilerError with Left Function When Devshl.dll Referenced"
permalink: kb/276/Q276560/
---

## Q276560: BUG: CompilerError with Left Function When Devshl.dll Referenced

	Article: Q276560
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler KbVBA kbVBp600bug kbDSupport
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Left string function in Visual Basic and your project contains
	a reference to Microsoft Visual C++ Shared Objects (Devshl.dll), you may receive
	the following compiler error message:
	
	  Wrong number of arguments or invalid property assignment
	
	This does not occur when you use a form module, but may occur when you use a
	standard or class module.
	
	CAUSE
	=====
	
	The compiler seems to resolve the Left function in Devshl.dll instead of in the
	VBA library. Because Left is a property of the Application and Window objects in
	Devshl.dll, you receive an error when you call Left as a function.
	
	RESOLUTION
	==========
	
	Fully qualify the call to the Left function, as in the following example:
	
	  Sub foot()
	
	      Dim s As String
	      s = "skdfhshfsdlkf"
	      s = VBA.Left(s, 3) 'Fully qualified
	      
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Visual Basic version 6.0, create a new Standard EXE project. Form1 is
	  created by default.
	
	2. Add a class module to the project.
	
	3. Add the following code to the class module:
	
	  Sub foot()
	      Dim s As String
	      s = "skdfhshfsdlkf"
	      s = Left(s, 3)
	  End Sub
	
	4. Set a reference to Visual C++ Shared Objects (Devshl.dll).
	
	5. Press CTRL+F5 to start the application with full compile. You receive the
	  error message listed in the "Symptoms" section.
	
	Additional query words: Automate IDE Name
	
	======================================================================
	Keywords          : kbCompiler KbVBA kbVBp600bug kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
