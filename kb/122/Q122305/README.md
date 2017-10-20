---
layout: page
title: "Q122305: PRB: Errors Generated Overloading Operator New &#91;&#93;"
permalink: /kb/122/Q122305/
---

## Q122305: PRB: Errors Generated Overloading Operator New &#91;&#93;

{% raw %}

	Article: Q122305
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The September 1994 ANSI C++ Draft specifies that it is possible to overload the
	new [] operator. However, the Microsoft C/C++ compilers included in the
	Microsoft products listed above do not support this feature. Microsoft C/C++
	version 7.0 and Visual C++ up to version 5.0 will generate the following error
	message:
	
	  error C2092: array element type cannot be function
	
	Microsoft Visual C++, 32-bit edition, version 5.0 generates two error messages:
	
	  error C2039: 'new[]' : is not a member of '`global namespace''
	
	  error C2660: 'new[]' : function does not take 1 parameters
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The source code below can be used to illustrate how to overload the new []
	operator, which will generate the error given above.
	
	Sample Code to Reproduce Behavior
	---------------------------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <new.h>
	
	  class example
	  {
	  public:
	
	     void  *operator new [] ( size_t sz, const example& )
	        { return( ::operator new [] ( sz )); }
	  };
	
	  void main(void)
	  {
	  }
	
	Additional query words: C2372 C2039 C2660
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
