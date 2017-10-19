---
layout: page
title: "Q122442: PRB: stdout/stderr May Not Be In Sync When Using Redirection"
permalink: /kb/122/Q122442/
---

## Q122442: PRB: stdout/stderr May Not Be In Sync When Using Redirection

	Article: Q122442
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the standard output and error streams are redirected or piped, console
	application output may not be serialized. This can result in unexpected output.
	
	CAUSE
	=====
	
	Although devices as serialized by default, the current Microsoft CRT
	implementation does not treat pipes as if they were devices (due to the
	potentially high overhead--added code--of doing so.) Thus, if stderr and stdout
	refer to the same file or device, and output is redirected with a pipe, the
	output will not be serialized.
	
	STATUS
	======
	
	This behavior is by design. The potential for slow execution currently outweighs
	the effort necessary to implement pipes such that they are treated as devices.
	
	MORE INFORMATION
	================
	
	To demonstrate this behavior, build and run the sample code (TEST.C) below. If
	it is executed from an MS-DOS or Windows NT command prompt, the following output
	is generated:
	
	 c:\>test
	 hello world (stdout)
	 hello world (stderr)
	 hello world (stdout)
	 hello world (stderr)
	
	However, if the output is piped with the MORE command, it will not be serialized,
	as follows:
	
	 c:\>test | more
	 hello world (stderr)
	 hello world (stderr)
	 hello world (stdout)
	 hello world (stdout)
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     /*
	
	     /* TEST.C */ 
	
	     #include <stdio.h>
	
	     int main(void)
	     {
	       printf ( "Hello world (stdout)\n" );
	       fprintf ( stderr, "Hello world (stderr)\n" );
	       printf ( "Hello world (stdout)\n" );
	       fprintf ( stderr, "Hello world (stderr)\n" );
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
