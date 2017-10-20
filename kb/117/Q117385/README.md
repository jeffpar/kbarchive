---
layout: page
title: "Q117385: FIX: printf Does Not Recognize &quot;&#92;n&#92;r&quot; when Using Conversion"
permalink: /kb/117/Q117385/
---

## Q117385: FIX: printf Does Not Recognize &quot;&#92;n&#92;r&quot; when Using Conversion

{% raw %}

	Article: Q117385
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an explicit type-conversion syntax is used for the return value of printf(),
	printf() does not recognize the escape sequence \n\r in its format string.
	
	The following macro prints "<string x>\n\r":
	
	     #define PRINT(x) void( printf("%s\n\r", x ) )
	
	RESOLUTION
	==========
	
	To correct the error, use one of the following workarounds:
	
	1. Use ASCII values for the line feed and carriage return. For example:
	
	        #define PRINT(x)  void( printf("%s%c%c",x,10,13 ) )
	
	-or-
	
	2. Use explicit typecasting instead. For example:
	
	        #define PRINT(x)  (void)( printf("%s\n\r",x ) )
	
	-or-
	
	3. Program without the conversion or casting if possible. For example:
	
	        #define PRINT(x)  printf("%s\n\r", x )
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ 32-bit Edition,
	version 2.0.
	
	Additional query words: 1.00 1.50
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
