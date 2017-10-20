---
layout: page
title: "Q113417: INFO: C4097: Typedef-Name X Used as Synonym for Class-Name Z"
permalink: /kb/113/Q113417/
---

## Q113417: INFO: C4097: Typedef-Name X Used as Synonym for Class-Name Z

{% raw %}

	Article: Q113417
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,2.2,4.0,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kb
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a typedef class name is used as a base class, the following warning will
	appear if compiled with /Ze (enable Microsoft extensions), which is on by
	default:
	
	  warning C4097:Non-standard extension: typedef-name 'identifier1' used as
	  synonym for class-name 'identifier2'
	
	If compiled with /Za (disable Microsoft extensions) using Visual C++ for Windows
	or Visual C++ 32-bit Edition 1.0, the following error appears:
	
	  error C2505: 'identifier' : is not a legal base class
	
	This error message is correct in accordance with the C++ language specification.
	In C++ grammar, the "base-list" is specified as being a list of
	"base-specifiers". A base-specifier reduces to a "complete-class-name", which
	does not include "typedef-names". Consequently, the compiler is perfectly
	correct in generating this warning/error for the sample below.
	
	This error is not generated using Visual C++ 32-bit Edition 2.X. Using Visual C++
	32-bit Edition, versions 2.x and above, the compiler generates the following
	warning with both the /Ze and /Za switches:
	
	  C4097: typedef-name 'identifier1' used as synonym for class-name
	  'identifier2'
	
	MORE INFORMATION
	================
	
	For more information on C++ grammar, see the "Grammar Summary" in the "Annotated
	C++ Reference Manual" (ARM) by Bjarne Stroustrup and Margaret Ellis (Appendix A)
	or Appendix C of the C++ "Language Reference" that comes with Microsoft C/C++
	7.0 and Microsoft Visual C++ for Windows, versions 1.0 and 1.5. The same Grammar
	Summary is in Appendix A of the "C++ Language Reference" manual for Visual C++
	32-bit Edition, versions 1.1 and above, and in the online documentation under
	the "Grammar Summary" heading of the "C++ Langauge Reference" included with
	Visual C++ 32-bit Edition, version 4.0.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Ze /c /W4
	  */ 
	
	   class C
	   {
	     int _w;
	   };
	
	   typedef C D;
	
	   class F : public D     // warning C4097
	   { };
	
	   class E : private virtual D // warning C4097
	   { };
	
	   class G : protected D // warning C4097
	   { };
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC220 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,2.0,2.1,2.2,4.0,4.2,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
