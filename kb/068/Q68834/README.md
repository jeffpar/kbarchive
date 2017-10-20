---
layout: page
title: "Q68834: PRB: When Compiling with /P, Errors Are Directed to STDERR"
permalink: /kb/068/Q68834/
---

## Q68834: PRB: When Compiling with /P, Errors Are Directed to STDERR

{% raw %}

	Article: Q68834
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft C compiler can create a preprocessor listing by compiling with the
	/P option. If this option is used and output is redirected to a file,
	preprocessor error messages that are generated will go to the screen and not to
	the specified file.
	
	CAUSE
	=====
	
	This results from preprocessor errors being directed to STDERR, rather than
	STDOUT.
	
	This behavior is by design. Normally the output of the compiler is syntax errors
	and warnings. However, when you are using the preprocessing options, the output
	from the compiler is the preprocessed output. Allowing preprocessor errors to be
	redirected would result in the errors and warnings appearing in the preprocessed
	file.
	
	RESOLUTION
	==========
	
	To resolve the problem, redirect STDERR to the file where you want the error
	messages to go. This can been done in MS-DOS by using a utility, such as
	ERROUT.EXE, which comes with C 5.1. Under OS/2 or Windows NT, the STDERR output
	can be redirected to a file by specifying the handle for STDERR, which is 2,
	followed by ">" and then the name of the file.
	
	MORE INFORMATION
	================
	
	The examples below demonstrate the syntax. For MS-DOS, using ERROUT.EXE, use the
	following:
	
	     ERROUT /f err.txt cl /P example.c
	
	For OS/2, Windows NT, or Windows 2000, use the following:
	
	  CL /P 2>outfile.txt example.c
	
	Additional query words: redirection 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
