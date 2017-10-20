---
layout: page
title: "Q242190: BUG: Full Koenig Lookup Works Only for Operators"
permalink: /kb/242/Q242190/
---

## Q242190: BUG: Full Koenig Lookup Works Only for Operators

{% raw %}

	Article: Q242190
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Argument-dependent name lookup, also known as Koenig lookup, works only for
	operators and not regular functions in a namespace.
	
	CAUSE
	=====
	
	The compiler does not fully support argument-dependent name lookup as specified
	in the C++ Standard. Please refer to the C++ Standard, section 3.4.2, for
	information on argument-dependent name lookup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	The following code example demonstrates the error:
	
	  //test.cpp
	  // compiler option needed:/GX  
	  #include <iostream>
	  namespace N1 {
	  	struct T1 {
	  	};
	  	void g(T1) {
	  	}
	   	T1 operator+( T1 x, T1 y) {
	  		std::cout<< "In N1::+" <<std::endl;
	  		return y;
	  	}
	  }
	
	  int main() {
	  	N1::T1 t1 ,t2;
	  	g(t1);	// error C2065: 'g' : undeclared identifier
	  	t1 + t2; // works fine calls N1::operator+
	  	return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
