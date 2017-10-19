---
layout: page
title: "Q235601: FIX: Putenv() Function Causes Memory Leak"
permalink: /kb/235/Q235601/
---

## Q235601: FIX: Putenv() Function Causes Memory Leak

	Article: Q235601
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak results from calls to putenv in the following circumstances:
	
	- An environment variable is removed.
	
	- An environment variable is replaced.
	
	- The input parameter does not contain an equal sign (=) character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the types of calls that will cause a
	memory leak.
	
	  #include <stdlib.h>
	
	  void main()
	  {
	      for (;;) {
	
	          putenv( "MYVAR1=mystring" ); // Replaces string MYVAR1
	                                       // after first iteration.
	
	          putenv( "MYVAR2=mystring" ); // Creates and removes MYVAR2.
	          putenv( "MYVAR2=" );         // 
	
	          putenv( "MYVAR3" );          // Invalid string missing "=".
	      }
	  }
	
	Additional query words: kbvc400
	
	======================================================================
	Keywords          : kbCRT kbVC500bug kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
