---
layout: page
title: "Q168011: FIX: C1001, file 'fppeeps.c', line 394, Caused By /Og"
permalink: /kb/168/Q168011/
---

## Q168011: FIX: C1001, file 'fppeeps.c', line 394, Caused By /Og

{% raw %}

	Article: Q168011
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVS97sp1fix kbVS97sp2fixkbbuglist kbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling the sample code below may cause the following error:
	
	  
	
	  ttt.cpp(10) : fatal error C1001: INTERNAL COMPILER ERROR
	               (compiler file 'E:\utc\src\\P2\x86\fppeeps.c', line 394)
	
	CAUSE
	=====
	
	This internal compiler error is caused by global optimizations which is enabled
	by the /Og option. The /O1 (minimize space), /O2 (maximize speed), and /Ox
	(maximum opts.) options include the /Og switch so those may also cause this
	C1001 error.
	
	RESOLUTION
	==========
	
	Enabling the /Op (improve floating-pt consistency) optimization, or disabling
	the /Og optimization, either at the command line or by use of #pragma optimize
	will avoid the C1001 error. A more intrusive workaround would be to change the
	floats to doubles.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following code demonstrates one form of this C1001 error. Use /Og- or /Ogp
	as a workaround.
	
	SAMPLE CODE:
	
	     // cl /c /Og
	     float gf1, gf2, gf3;
	     float func( float *pf2, float f, float f1, float f2, float f3 )
	     {
	         f3 = f * (*pf2);
	         gf3 = f3;
	         gf2 = f2;
	         gf1 = f1;
	         return f;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp1fix kbVS97sp2fix kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
