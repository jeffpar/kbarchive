---
layout: page
title: "Q122789: FIX: Error C2579 When Using Function Templates"
permalink: /kb/122/Q122789/
---

## Q122789: FIX: Error C2579 When Using Function Templates

{% raw %}

	Article: Q122789
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling function templates that contain a literal character, the compiler
	may complain about 'ambiguous' parameter lists. Visual C++ version 4.0 may
	generate the following error:
	
	  error C2579: 'identifier1' : parameter list not
	  sufficiently different from 'identifier2'
	
	Visual C++ version 2.x may generate the following errors:
	
	  error C2579: 'identifier1' : parameter list not
	  sufficiently different from 'identifier2'
	
	  fatal error C1903: unable to recover from previous
	  error(s); stopping compilation
	
	RESOLUTION
	==========
	
	Explicitly type cast the literal character with "(char)" to eliminate this
	error. For example, in the sample code provided below, cast the literal
	character 'c' to (char)'c' to work around the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	You can use the following sample code to demonstrate the problem. Both functions
	(func(c) and func('c')) are necessary to reproduce the problem.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     template <class T>
	     int func(T)
	     {
	        static int x = 0;
	        return x;
	     }
	
	     main()
	     {
	        char c;
	
	        func(c);
	        func('c');
	        return 0;
	     }
	
	Additional query words: kbVC400bug buglist2.00 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbtool kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
