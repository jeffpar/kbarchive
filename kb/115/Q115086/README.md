---
layout: page
title: "Q115086: PRB: Misuse of ASSERT Causes Problems for MFC Apps"
permalink: kb/115/Q115086/
---

## Q115086: PRB: Misuse of ASSERT Causes Problems for MFC Apps

	Article: Q115086
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SYMPTOMS
	========
	
	When you run the debug version of your MFC application, there are no problems.
	However, the release version of the same application crashes, returns incorrect
	results, and/or exhibits some other abnormal behavior.
	
	CAUSE
	=====
	
	This problem can be caused when you place important code in an ASSERT statement
	to verify that it performs correctly. Because ASSERT statements are commented
	out in a release build of an MFC program, the code does not run in a release
	build.
	
	RESOLUTION
	==========
	
	If you are using ASSERT to confirm that a function call succeeded, consider
	using VERIFY instead. The VERIFY macro evaluates its own arguments in both debug
	and release builds of the application.
	
	Another preferred technique is to assign the function's return value to a
	temporary variable and then test the variable in an ASSERT statement.
	
	Both of these techniques are demonstrated below in the "MORE INFORMATION" section
	of this article.
	
	MORE INFORMATION
	================
	
	Examine the following code fragment:
	
	        char *buf;
	        ASSERT(buf = (char *) calloc( 20, sizeof(char) ));
	        strcpy( buf, "Hello, World" );
	        free( buf );
	
	This code runs perfectly in a debug version of an MFC application. If the call to
	calloc() fails, a diagnostic message is displayed, which includes the file and
	line number. However, in a retail build of an MFC application:
	
	- The call to "calloc()" never occurs, leaving "buf" uninitialized.
	
	-or-
	
	- "strcpy()" copies "Hello, World" into a random piece of memory, possibly
	  crashing the application or hanging the system.
	
	-or-
	
	- "free()" attempts to free memory that was never allocated.
	
	To use ASSERT correctly, the code sample should be changed to the following:
	
	        char *buf;
	        buf = (char *) calloc( 20, sizeof(char) );
	        ASSERT( buf != NULL );
	        strcpy( buf, "Hello, World" );
	        free( buf );
	
	Or, you can use VERIFY instead:
	
	        char *buf;
	        VERIFY(buf = (char *) calloc(20, sizeof(char) ));
	        strcpy( buf, "Hello, World" );
	        free( buf );
	
	Additional query words: 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 hang gpf gp-fault 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbprb
	
	=============================================================================
	
