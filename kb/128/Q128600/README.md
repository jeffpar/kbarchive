---
layout: page
title: "Q128600: BUG: Redefinition of Enum Data Type Does Not Cause an Error"
permalink: /kb/128/Q128600/
---

## Q128600: BUG: Redefinition of Enum Data Type Does Not Cause an Error

{% raw %}

	Article: Q128600
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an enumerated type is declared in class scope, if it is declared again at
	global scope, the compiler will not generate an error. However, once redefined,
	the result of using those enumerated types is unpredictable.
	
	RESOLUTION
	==========
	
	An enumerated type should be defined only once within any scope.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compiler options needed: /c
	  */ 
	
	  class Test
	  {
	    public:
	      enum status {a = 2, b};
	  };
	
	  enum Test::status {a = 4, b, c};     // Should be an error
	
	REFERENCES
	==========
	
	"The Annotated C++ Reference Manual" by Ellis and Stroustrup (Jan 1994), section
	7.2
	
	Additional query words: kbVC400bug 9.00 9.10 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
