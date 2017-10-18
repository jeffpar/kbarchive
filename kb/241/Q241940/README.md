---
layout: page
title: "Q241940: BUG: C2954 Error When Using Class Template as Template-Parameter"
permalink: kb/241/Q241940/
---

## Q241940: BUG: C2954 Error When Using Class Template as Template-Parameter

	Article: Q241940
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
	
	The following error message may appear if you try to use a class template as a
	template-parameter:
	
	  error C2954: template definitions cannot nest
	  error C2951: template declarations are only permitted at global or namespace
	  scope
	  error C2226: syntax error : unexpected type 'C'
	  error C2143: syntax error : missing '>' before '{'
	  error C2059: syntax error : '<end Parse>'
	
	CAUSE
	=====
	
	The compiler does not support template template-parameters as specified in the
	C++ Standard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the error:
	
	  //test.cpp
	  // compiler option needed: none
	
	  template<class T> class myarray { /* ... */ };
	  template<class K, class V, template<class T> class C = myarray>
	  class Map {
	  	C<K> key;
	  	C<V> value;
	  	};
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
