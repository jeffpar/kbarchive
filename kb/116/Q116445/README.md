---
layout: page
title: "Q116445: FIX: Truncated String from &quot;#pragma comment(exestr, &lt;string&gt;)&quot;"
permalink: kb/116/Q116445/
---

## Q116445: FIX: Truncated String from &quot;#pragma comment(exestr, &lt;string&gt;)&quot;

	Article: Q116445
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC400fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use "#pragma comment(exestr, <string>)" to place a text string,
	<string>, into an executable module, the entire string is sometimes not
	included.
	
	CAUSE
	=====
	
	Using Microsoft C/C++ version 7.0, Visual C++ for Windows, or Visual C++ 32- bit
	versions 1.0 and 2.x, the problem occurs when an attempt is made to embed a
	carriage-return (0x0D) or line-feed (0x0A) character somewhere other than at the
	end of the string.
	
	RESOLUTION
	==========
	
	A compiler specific workaround exists for this problem. For Microsoft C/C++
	version 7.0, Visual C++ for Windows, or Visual C++ 32-bit versions 1.0 and 2.x,
	place each carriage-return or line-feed character at the end of the string.
	
	The sample code in the MORE INFORMATION section below, demonstrates two other
	methods to work around this problem. The first method is to declare a character
	array in the application that contains the string to embed in the file. This
	method places the string into the application's data segment. The second method
	is similar to the first except that the compiler places the string into the
	application's code segment, and therefore it does not consume space in the data
	segment. Either of these methods loads the string into memory when the
	application runs.
	
	A fourth method is available to applications developed for the Microsoft Windows
	operating system. Place the string into a STRINGTABLE resource. If you want, you
	can specify the LOADONCALL attribute so that the string is not loaded into
	memory until the application requires it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.0.
	
	MORE INFORMATION
	================
	
	The #pragma comment(exestr, <string>) statement directs the compiler to
	place <string> into the object file. The linker places the string into the
	executable file. You can find the string by using an application that searches
	executable files for strings. However, the loader does not load the string into
	memory. You can use comment strings to store a version number or similar
	information in your executable file.
	
	You can use the following sample code to demonstrate the problem:
	
	Sample Code
	-----------
	
	      /* Compile options needed: none
	     */ 
	
	        #define __CR_LF__ "\x0d\x0a"
	     /*
	      * With Microsoft C/C++ version 7.0, Visual C++ for Windows,
	      * or Visual C++ 32-bit versions 1.0 and 2.x, the first two
	      * #pragma commented strings are placed in the executable,
	      * the third is not.
	      */ 
	
	     #pragma comment(exestr, "This Comment EXESTR is OK" __CR_LF__)
	     #pragma comment(exestr, "****************")
	     #pragma comment(exestr, __CR_LF__ "This Comment EXESTR is NOT")
	
	     /*
	      * Other methods
	      * char data_exestr[] = "\r\nData EXESTR";
	      * char __based(__segname("_CODE"))code_exestr[] = "\r\nCode EXESTR";
	      */ 
	
	     void main()
	     {
	     }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC400fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
