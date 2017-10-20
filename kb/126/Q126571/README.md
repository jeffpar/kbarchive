---
layout: page
title: "Q126571: HOWTO: Obtain the Program Name in a Windows-Based Application"
permalink: /kb/126/Q126571/
---

## Q126571: HOWTO: Obtain the Program Name in a Windows-Based Application

{% raw %}

	Article: Q126571
	Product(s): Microsoft C Compiler
	Version(s): WIN3X:1.0,1.5,1.51,1.52;WINNT:1.0,2.0,2.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS applications written in C generally use main() for the entry point. The
	command line can be obtained from the argv parameter of main(). In particular,
	the program name is pointed to by argv[0].
	
	There is a similar mechansim that can be used from Windows-based and Win32-based
	applications.
	
	MORE INFORMATION
	================
	
	Windows-based and Win32-based application use WinMain() as the entry point.
	WinMain() has the lpszCmdLine parameter for the command line arguments, but this
	parameter does not include the program name. However, you can still get to the
	program name through the variable __argv.
	
	In a 32-bit application you can just reference __argv directly. It is declared in
	stdlib.h
	
	In a 16-bit application, __argv is not declared and you will need to declare it.
	Include the following declaration in your source or header file: "
	
	     #ifdef __cplusplus
	     extern "C"
	     #endif
	     extern char ** __argv;
	
	" (without the quotation marks) To test this out, you can view __argv[0] by
	including the following line in your application: "
	
	     MessageBox( NULL, __argv[0], "__argv[0]", MB_OK );
	
	" (without the quotation marks)NOTE: argv[0] will contain a pointer to the
	program name as it was executed from the command line or Program Manager: either
	qualified or unqualified.
	
	REFERENCES
	==========
	
	The Windows 3.1 SDK "Guide to Programming", section 14.3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : WIN3X:1.0,1.5,1.51,1.52;WINNT:1.0,2.0,2.1,4.0,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
