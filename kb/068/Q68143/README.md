---
layout: page
title: "Q68143: PRB: Stringize Operator Fails to Insert Backslashes"
permalink: /kb/068/Q68143/
---

## Q68143: PRB: Stringize Operator Fails to Insert Backslashes

	Article: Q68143
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ compiler for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft C and C/C++ compilers support the use of the stringizing
	preprocessor operator only in macros that take arguments. If a # precedes a
	formal parameter in the definition of a macro, the actual argument is enclosed
	in double quotation marks and treated as a string when the macro is expanded.
	
	If the argument contains characters that normally must be preceded by a backslash
	(\) when appearing in a string (such as " or \), the backslash should be
	automatically inserted. However, there are many cases where the preprocessor
	fails to do this.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Following are some sample macros that use the stringizing operator. They are
	followed by a line showing the incorrect preprocessor output (compiling with /P)
	and the output that was expected.
	
	Sample Code
	-----------
	
	Example 1:
	
	  #define print_filename(x) printf(#x);
	
	  main()
	  {
	   print_filename(d:\test\sscanf.c)
	  }
	
	Preprocessor Output:
	
	  printf("d:\test\sscanf.c");
	
	Expected Output:
	
	  printf("d:\\test\\sscanf.c");
	
	Example 2:
	
	  #define print_filename(x) printf(#x);
	
	  main()
	  {
	     print_filename(This: \" prints an escaped double quote mark)
	  }
	
	Preprocessor Output for C Compiler version 6.0:
	
	  printf("This: \\" prints an escaped double quote mark")
	
	Preprocessor Output for C/C++ Compilers, Versions 7.0 and above:
	
	  error C2001: newline in constant
	  fatal error C1057: unexpected end-of-file in macro expansion
	
	Expected Output:
	
	  printf("This: \\\" prints an escaped double quote mark")
	
	Example 3:
	
	  #define print_stuff(x) printf(#x);
	
	  main()
	  {
	     print_stuff(I am printing a quote: ")
	  }
	
	Preprocessor Output:
	
	  error C2001: newline in constant
	  fatal error C1057: unexpected end-of-file in macro expansion
	
	Expected Output:
	
	  printf("I am printing a quote: \"");
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
