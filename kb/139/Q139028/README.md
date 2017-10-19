---
layout: page
title: "Q139028: FIX: Incomplete pragma Directive May Cause C1001 Error"
permalink: /kb/139/Q139028/
---

## Q139028: FIX: Incomplete pragma Directive May Cause C1001 Error

	Article: Q139028
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an incomplete #pragma preprocessor directive, the following
	internal compiler error may be generated:
	
	  warning C4081: expected '('; found 'newline'
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 899)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	
	While the code is not valid, the compiler should not generate an internal
	compiler error. However, the C4081 warning is valid.
	
	
	RESOLUTION
	==========
	
	Use a complete pragma directive. For a listing of valid pragma directives and
	their syntax, please consult the Help menu.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	The #pragma directives that cause this problem are:
	
	- alloc_text
	
	- auto_inline
	
	- code_seg
	
	- comment
	
	- data_seg
	
	- function
	
	- init_seg
	
	- inline_depth
	
	- inline_recursion
	
	- intrinsic
	
	- optimize
	
	- pack
	
	- pointers_to_members
	
	- setlocale
	
	- vtordisp
	
	- warning
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  // Compile Options - none
	
	  #pragma comment
	
	  // the previous line is incomplete,
	  // the following line is complete and won't cause the error:
	  // #pragma comment(lib, "msvcrt.lib")
	
	Additional query words: 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
