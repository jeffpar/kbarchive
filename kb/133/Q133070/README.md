---
layout: page
title: "Q133070: PRB: C2059 Error Using extern &quot;C&quot; in .C Source Files"
permalink: /kb/133/Q133070/
---

## Q133070: PRB: C2059 Error Using extern &quot;C&quot; in .C Source Files

{% raw %}

	Article: Q133070
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbLangC kbLangCPP kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Use of "extern "C"" in source files that have a .C extension causes error C2059,
	and results in this error message:
	
	  error C2059:syntax error:'string'
	
	CAUSE
	=====
	
	In the C language, the string-literal "C" is not recognized. It is used in C++
	to prevent name decoration.
	
	RESOLUTION
	==========
	
	Remove the string-literal "C" in extern declarations, or use the following in
	the function declaration:
	
	  #ifdef __cplusplus
	     extern "C"
	  #endif
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Behavior
	---------------------------------
	
	  /* Compile options needed: None
	     The following program reproduces the behavior if the source
	     file has .C extension
	  */ 
	
	  #include <windows.h>
	
	  extern "C" _declspec(dllexport) BOOL WINAPI function1(void);
	
	  BOOL WINAPI DllMain ( HINSTANCE hInst, DWORD dwReason,
	                          LPVOID lpReserved)
	  {
	     // Other required code goes here.
	     return TRUE;
	  }
	
	Additional query words: 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          : kberrmsg kbLangC kbLangCPP kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,2.2,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
