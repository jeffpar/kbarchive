---
layout: page
title: "Q316090: BUG: Fatal Error C1001 When You Compile with Global Optimizer"
permalink: kb/316/Q316090/
---

## Q316090: BUG: Fatal Error C1001 When You Compile with Global Optimizer

	Article: Q316090
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a program with global optimizer, you receive the following
	error message:
	
	  "fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'f:\vs70builds\9466\vc\Compiler\Utc\src\P2\emit.c', line 937)
	  Please choose the Technical Support command on the Visual Help menu, or open
	  the Technical Support help file for more information."
	
	CAUSE
	=====
	
	The behavior occurs because optimizer puts too many instructions in the function
	prolog for a particular optimization (frame pointer omission).
	
	RESOLUTION
	==========
	
	To work around the problem, you must prevent instructions from being scheduled
	in the prolog. To do this, do one of the following:
	
	- Make a function call to an external function that is contained in another
	  object file (may not work when "Whole program optimization" (/GL) is enabled)
	  or DLL.
	
	  -or-
	
	- Use the undocumented _ReadWriteBarrier() intrinsic at the beginning of the
	  affected function. This intrinsic does not generate any code but prevents
	  optimizations across the intrinsic. To do this, add the following declaration
	  to the file:
	
	  void _ReadWriteBarrier();
	  #pragma intrinsic(_ReadWriteBarrier) 
	
	Add the following code at the beginning of the function that causes the C1001
	error:
	
	  #if _MSC_VER==1300
	    _ReadWriteBarrier();
	  #endif
	
	NOTE: The use of undocumented intrinsics is not guaranteed to work in future
	versions of the compiler.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Og ICE KbCpp KbNative
	
	======================================================================
	Keywords          : kbCompiler kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
