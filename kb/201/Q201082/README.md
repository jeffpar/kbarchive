---
layout: page
title: "Q201082: FIX: No Warning When Control Path Doesn't Return a Value"
permalink: /kb/201/Q201082/
---

## Q201082: FIX: No Warning When Control Path Doesn't Return a Value

	Article: Q201082
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500bug kbVC600fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following code compiles without error or warning, although not all control
	paths return a value:
	
	  bool SomeFunction()
	  {
	     try
	     {
	     }
	     catch(...)
	     {
	        return false;
	     }
	  }
	
	  main()
	  {
	    SomeFunction();
	  }
	
	CAUSE
	=====
	
	This problem is due to a bug in the Visual C++ 5.0 compiler.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 6.0.
	
	Additional query words: warning C4715
	
	======================================================================
	Keywords          : kbCompiler kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
