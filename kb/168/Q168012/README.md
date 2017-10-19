---
layout: page
title: "Q168012: FIX: Incorrect Code Generated When Using Floating-Point and /Og"
permalink: /kb/168/Q168012/
---

## Q168012: FIX: Incorrect Code Generated When Using Floating-Point and /Og

	Article: Q168012
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVS97sp1fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Incorrect results from floating point operations may be obtained when building
	with /Og and /Oi or a switch that includes /Og and /Oi (such as /Ox, /O1, or
	/O2.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97,
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following sample demonstrates one form of this bug. As you step through this
	code in a debugger, you will see that inconsistent results are obtained.
	
	Sample Code
	-----------
	
	     // compile options /Ogi
	     #include <math.h>
	     float e1(float x)
	     {
	        float value;
	        if (x < 0.0)
	           value = exp(x);
	        else
	           value = 1.0;
	        return value;
	     }
	     #pragma ("g", off )
	     void f()
	     {
	        float f1 = e1( -1.2f); // 1.00000
	        float f2 = exp(-1.2f); // 0.301194
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
