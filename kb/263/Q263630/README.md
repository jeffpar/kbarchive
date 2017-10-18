---
layout: page
title: "Q263630: BUG: C2143 Referencing Class Template from Another Namespace"
permalink: kb/263/Q263630/
---

## Q263630: BUG: C2143 Referencing Class Template from Another Namespace

	Article: Q263630
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
	
	If you try to reference from one namespace a class template that has been
	imported from another namespace by means of a using declaration or directive,
	you may receive the following error message:
	
	  
	
	  Test.cpp(11) : error C2143: syntax error : missing ';' before '<'
	  Test.cpp(11) : error C2143: syntax error : missing ';' before '<'
	
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
	  // compiler option needed: none
	  namespace N1 {
	  template <class T> struct X {};
	  class Y{};
	  }
	
	  namespace N2 {
	  using N1::X; 
	  using N1::Y;
	  }
	
	  N2::X<int> x1;  // Syntax Error C2143
	  N2::Y y1;       // Compiles Fine
	
	Additional query words: "Compiler Error" C2143
	
	======================================================================
	Keywords          : kbtemplate kbCompiler kbCPPonly kbVC600bug kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
