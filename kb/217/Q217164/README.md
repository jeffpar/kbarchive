---
layout: page
title: "Q217164: FIX: Bad Code Is Generated When the Result of an Intrinsic Passe"
permalink: /kb/217/Q217164/
---

## Q217164: FIX: Bad Code Is Generated When the Result of an Intrinsic Passe

	Article: Q217164
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Bad code is generated when you pass the return value of an intrinsic function as
	an argument to a function that takes a reference to an integer while using
	Global Optimizations (/Og) and Enable Intrinsic Functions (/Oi). In some
	situations, a C1001 compiler error occurs:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'E:\8168\vc98\p2\src\P2\main.c', line 494)
	
	RESOLUTION
	==========
	
	There are two workaround options:
	
	- WORKAROUND #1: Disable intrinsic optimizations. Add /Oi- to your compiler
	  switches after any other switches that start with /O.
	
	- OR -
	
	- WORKAROUND #2: Use #pragma function to prevent the use of individual
	  intrinsic functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Compile options: /Og /Oi or /O2
	Workaround #1 compile options: /O2 /Oi-
	
	  #include <stdio.h>
	  #include <math.h>
	
	  int f(const int &a, const int &b) {
	     return a * b;
	  }
	
	  // uncomment for workaround #2 to disable the abs intrinsic
	  // #pragma function(abs)
	
	  int main() {
	
	     int x = -45, y = 2;
	
	     // The result of abs(), an intrinsic, gets passed to 
	     // a fn that takes arg of type reference to int
	     printf("Result of f() is %i\n", f(abs(x), y));
	
	     return 0;
	  }
	
	  // uncomment for workaround #2 to re-enable the abs intrinsic
	  // #pragma intrinsic(abs)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
