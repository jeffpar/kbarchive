---
layout: page
title: "Q263633: BUG: Error C2946 on Explicit Instantiation of Imported Templates"
permalink: /kb/263/Q263633/
---

## Q263633: BUG: Error C2946 on Explicit Instantiation of Imported Templates

{% raw %}

	Article: Q263633
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbCompiler kbCPPonly kbVC600bug kbDSupport
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
	
	If you try to perform explicit instantiation of a template class or function
	imported from another namespace by means of a using declaration or using
	directive, you may receive the following error message:
	
	  Test.cpp(8) : error C2946: explicit instantiation; 'class ?$A@H' is not a
	  template-class specialization
	
	RESOLUTION
	==========
	
	To work around this problem, qualify the template name with the name of the
	namespace in which the template is defined.
	
	
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
	  // Compiler option needed: none
	  namespace N {
	
	  template <class T>
	  struct A { };
	  }
	
	  using namespace N;             // This does not work.
	  using N::A;                    // This also does not work.
	  template class A<int>;
	
	  // template class N::A<int>;   // This works.
	
	Additional query words: "Compiler Error"
	
	======================================================================
	Keywords          : kbtemplate kbCompiler kbCPPonly kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
