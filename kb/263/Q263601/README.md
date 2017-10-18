---
layout: page
title: "Q263601: BUG: C1001 When Using Certain float Values as Template Arguments"
permalink: kb/263/Q263601/
---

## Q263601: BUG: C1001 When Using Certain float Values as Template Arguments

	Article: Q263601
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbCompiler kbCPPonly kbVC600bug kbDSupport kbGrpDSVCCompiler
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a float (or double) constant is a template argument in a template class and
	you instantiate the class by certain values of float, the compiler may generate
	the following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file '.\outdname.c',
	  line 572) Please choose the Technical Support command on the Visual C++ Help
	  menu, or open the Technical Support help file for more information
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed:none
	  // Both of these examples produce the error.
	   
	  template<float f> class C { };
	  C<3.402823466E+38> minimum;
	   
	  template<float f, float g> class D { };
	  D<0., 2147000000.> range;
	
	Additional query words: "Compiler Error" C1001
	
	======================================================================
	Keywords          : kbtemplate kbCompiler kbCPPonly kbVC600bug kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
