---
layout: page
title: "Q168934: FIX: Multiple Errors Compiling Std C++ Library Headers with /Za"
permalink: /kb/168/Q168934/
---

## Q168934: FIX: Multiple Errors Compiling Std C++ Library Headers with /Za

{% raw %}

	Article: Q168934
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the /Za switch (Disable Language Extensions) when compiling the
	Standard C++ Library headers, it causes multiple compiler errors. For example:
	
	  cl /Za /c /GX /Tp"iosfwd"
	
	Causes the following compiler errors:
	
	  iosfwd(132) : error C2906: C++ language change: to explicitly specialize
	  class template 'char_traits' use the following syntax - template<>
	  struct char_traits<unsigned short> ...
	
	  iosfwd(171) : error C2906: C++ language change: to explicitly specialize class
	  template 'char_traits' use the following syntax - template<> struct
	  char_traits<char> ...
	
	Examples of other header files known to cause multiple compiler errors like
	C2838, C2146, and C2501 are: <utility>, <iterator>, <xstring>,
	<functional>, and <limits>.
	
	RESOLUTION
	==========
	
	Do not use the compiler option /Za (Disable Language Extensions) when compiling
	the Standard C++ Library headers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbCompiler kbCPPonly kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
