---
layout: page
title: "Q119331: INFO: Compiler Errors with Win32 APIs Ending in &quot;A&quot; or &quot;W&quot;"
permalink: kb/119/Q119331/
---

## Q119331: INFO: Compiler Errors with Win32 APIs Ending in &quot;A&quot; or &quot;W&quot;

	Article: Q119331
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the names of Win32 APIs appear in compiler error messages, they may have
	either an "A" or a "W" appended to the API name. For example, the API
	CreateProcess() can appear as "CreateProcessA" in an error message such as the
	following:
	
	  error C2664: 'CreateProcessA' : cannot convert parameter 9
	
	The reason for this is that many Win32 APIs have both a ANSI ("A") and a Unicode
	("W") version. The Windows NT header files use macros such as the following to
	select the appropriate API:
	
	  #ifdef UNICODE
	  #define CreateProcess  CreateProcessW
	  #else
	  #define CreateProcess  CreateProcessA
	  #endif // !UNICODE
	
	MORE INFORMATION
	================
	
	The Windows NT header files also contain more complicated macros, which use
	hidden arguments:
	
	     #define CreateWindowA(lpClassName, lpWindowName, dwStyle, x, y,\ 
	     nWidth, nHeight, hWndParent, hMenu, hInstance, lpParam)\ 
	     CreateWindowExA(0L, lpClassName, lpWindowName, dwStyle, x, y,\ 
	     nWidth, nHeight, hWndParent, hMenu, hInstance, lpParam)
	     #define CreateWindowW(lpClassName, lpWindowName, dwStyle, x, y,\ 
	     nWidth, nHeight, hWndParent, hMenu, hInstance, lpParam)\ 
	     CreateWindowExW(0L, lpClassName, lpWindowName, dwStyle, x, y,\ 
	     nWidth, nHeight, hWndParent, hMenu, hInstance, lpParam)
	     #ifdef UNICODE
	     #define CreateWindow  CreateWindowW
	     #else
	     #define CreateWindow  CreateWindowA
	     #endif // !UNICODE
	
	In this case, an error message may refer to argument 8 on a line of your code,
	but the argument is really argument 7 in your source code.
	
	Other error messages that may have unexpected diagnostic information because of
	macro expansion include the following:
	
	- C1056: compiler limit : out of macro expansion space
	
	- C2014: preprocessor command must start as first nonwhite space
	
	- C2055: expected formal parameter list, not a type list
	
	- C2095: 'function' : actual parameter has type void : parameter 'number'
	
	- C2172: 'function' : actual parameter is not a pointer : parameter 'number'
	
	- C2173: 'function' : actual parameter is not a pointer : parameter 'number1',
	  parameter list 'number2'
	
	- C2174: 'function' : actual parameter has type 'void' : parameter 'number1',
	  parameter list 'number2'
	
	- C2660: 'function' : function does not take 'number' parameters
	
	- C2664: 'function' : cannot convert parameter 'number' from 'type1' to 'type2'
	
	- C4022: 'function' : pointer mismatch for actual parameter 'number'
	
	- C4024: 'function' : different types for formal and actual parameter 'number'
	
	Additional query words: 8.00 9.00 9.10 10.00 10.10
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC100 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC220 kbVC410 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
