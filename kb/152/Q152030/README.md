---
layout: page
title: "Q152030: FIX: Port I/O Functions Not in DLL Version of CRT for VC++ 4.0"
permalink: /kb/152/Q152030/
---

## Q152030: FIX: Port I/O Functions Not in DLL Version of CRT for VC++ 4.0

	Article: Q152030
	Product(s): Microsoft C Compiler
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbCRT kbVCkbbuglist kbfixlist
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a program that uses the _inp and _outp instructions and links
	with the DLL version of the CRT, you will see one or more of the following
	errors:
	
	  test.obj : error LNK2001: unresolved external symbol __inp
	
	  test.obj : error LNK2001: unresolved external symbol __inpw
	
	  test.obj : error LNK2001: unresolved external symbol __inpd
	
	  test.obj : error LNK2001: unresolved external symbol __outp
	
	  test.obj : error LNK2001: unresolved external symbol __outpw
	
	  test.obj : error LNK2001: unresolved external symbol __outpd
	
	  test.exe : fatal error LNK1120: 6 unresolved externals
	
	CAUSE
	=====
	
	The _inp and _outp functions are not exported from the DLL versions of the C
	Run-time Library (CRT), and do not exist in those versions of the CRT. If you
	try to use these functions with the DLL version of the CRT, you will get LNK2001
	errors.
	
	RESOLUTION
	==========
	
	There are several ways to get around the LNK2001 errors:
	
	- Use a #pragma intrinsic instruction.
	
	- Turn on Instrinsic Optimizations.
	
	- Link with one of the static versions of the CRT.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	You can avoid the linker errors by using a #pragma intrinsic instruction that
	will replace the _inp and _outp function calls with their assembly equivalents.
	In each file that refers to the _inp or _outp instruction, add the following
	line:
	
	     #pragma intrinsic(_inp,_inpw,_inpd,_outp,_outpw,_outpd)
	
	A similar method that can be used to avoid the link errors is to turn on
	intrinsic function optimizations for all intrinsic functions. If you are using
	the Command Line compiler, adding the /Oi switch to the compile options will
	enable intrinsic function optimizations. To turn on this optimization within
	Developer Studio, perform the following steps:
	
	1. From the Build menu, choose the Settings option to display the Project
	  Settings dialog box.
	
	2. In the Settings For pane, select the Project that is getting the link errors.
	
	3. Choose the C/C++ tab.
	
	4. Select Optimizations for the Category.
	
	5. Choose Customize for the optimizations, then check the Generate Intrinsic
	  Functions optimization.
	
	An additional method to avoid the linker errors is to use the static version of
	the CRT because the _inp and _outp functions are implemented in this version of
	the CRT. For more information on determining which static library to use, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q140584 How to Link with the Correct C Run-Time (CRT) Library
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCRT kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
