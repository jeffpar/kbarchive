---
layout: page
title: "Q117687: INFO: Misplaced &#95;&#95;declspec Causes Error C2062, C2059, or C4"
permalink: /kb/117/Q117687/
---

## Q117687: INFO: Misplaced &#95;&#95;declspec Causes Error C2062, C2059, or C4

	Article: Q117687
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compiling a C or C++ source file that contains an incorrectly placed __declspec
	keyword may cause the compiler to issue a warning or error message. The possible
	messages and the version of the 32-bit compiler generating them are listed
	below:
	
	  Source     CL.EXE Version    Error/Warning
	
	  C          8.xx              error C2062: type 'int' unexpected
	  C++        8.xx              error C2059: syntax error :
	  '__declspec(Storage_Class_Attribute)'
	  C/C++      9.xx              error C2059: syntax error :
	  '__declspec(Storage_Class_Attribute)'
	  C          10.xx             error C2059: syntax error : 'type'
	  C++        10.xx             warning C4230: anachronism used :
	  modifiers/qualifiers interspersed, qualifier ignored
	
	where "Storage_Class_Attribute" is one of the following:
	
	- thread
	
	- naked
	
	- dllimport
	
	- dllexport
	
	MORE INFORMATION
	================
	
	The compiler is generating one of these error message because an extended
	storage-class attribute specified with the __declspec keyword has been placed
	incorrectly. The extended storage-class attribute must appear to the left of the
	calling-convention keyword, if a keyword is specified.
	
	The sample code shown below illustrates both the correct and incorrect placement
	of an extended storage-class attribute. In the declaration that fails, the
	__declspec keyword is placed after the __cdecl keyword. In the declaration that
	succeeds, the __declspec keyword is placed before the __cdecl keyword.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none to compile as C source
	  * /Tp to compile as C++ source (or use .cpp extension)
	  */ 
	
	    // This declaration will cause the C2062 and C2059 errors:
	    void __cdecl __declspec(dllexport) Function2(void);
	
	    // This declaration will compile successfully:
	    void __declspec(dllexport) __cdecl Function1(void);
	
	REFERENCES
	==========
	
	For more information, search the online documentation included with Visual C++,
	32-bit Edition, on "__declspec," "thread," "naked," "dllimport," "dllexport," or
	"storage-class attributes." For an in-depth discussion of these topics and more,
	see the "Programming Techniques" book in the Visual C++, 32-bit Edition,
	documentation set.
	
	Additional query words: 8.00 9.00 export
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
