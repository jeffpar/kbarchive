---
layout: page
title: "Q299799: FIX: Using Class w/ Same Name as a Base Class Causes Error"
permalink: kb/299/Q299799/
---

## Q299799: FIX: Using Class w/ Same Name as a Base Class Causes Error

	Article: Q299799
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp kbvfp600 kbvfp600bug kbCodeSnippet kbvfp700fix kbvfp700
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a class by using the DEFINE CLASS command that has the same name
	as one of the Visual FoxPro (VFP) base classes, you receive the following error
	message when the class is instantiated:
	
	  OLE error code 0x80020006: Unknown name.
	
	CAUSE
	=====
	
	Custom classes cannot have the same name as base classes. If you try to compile
	the project into a dynamic-link library (DLL), you receive the following error
	message:
	
	  Class name is invalid.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Save the following code as a program, and then run the program:
	
	  *!* Q299799 FIX: Creating A Class With The Same Name As A Base Class Causes Error
	  LOCAL lcVar
	  CREATE PROJECT oleclasstest NOWAIT
	
	  lcVar = "DEFINE CLASS Column AS CUSTOM OLEPUBLIC" + CHR(13) + CHR(10) + ;
	               "   Test = ''" + CHR(13) + CHR(10) + "ENDDEFINE"
	
	  =STRTOFILE(lcVar, 'Test.prg', .F.)
	  _VFP.ACTIVEPROJECT.FILES.ADD('Test.prg')
	  _VFP.ACTIVEPROJECT.BUILD('test.dll', 4)
	  oObject = CREATEOBJECT('test.Column')
	  CLEAR
	  ? oObject.Test
	  ? oObject.BASECLASS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp kbvfp600 kbvfp600bug kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
