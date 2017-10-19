---
layout: page
title: "Q149696: FIX: Bad Code Generated for Inline Assembly Using Enumerators"
permalink: /kb/149/Q149696/
---

## Q149696: FIX: Bad Code Generated for Inline Assembly Using Enumerators

	Article: Q149696
	Product(s): Microsoft C Compiler
	Version(s): 4.1
	Operating System(s): 
	Keyword(s): kbcode kbVC410bug kbVC420fixkbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an enumerator in an inline assembly statement, incorrect code will
	be generated for the enumerator value. The following code fragment demonstrates
	the problem:
	
	     void main()
	     {
	     enum { FALL=1, WINTER, SPRING, SUMMER };
	
	     _asm {
	          mov eax, WINTER  ; <--- This will incorrectly load 'eax'
	                            ;      with something other than 2.
	          }
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	This problem will impact developers that are using the Microsoft Windows 95
	Device Driver Kit (DDK) or other tools that are used to build VXD drivers with
	C/C++. The DDK provides C/C++ header files that use enumerators and inline
	assembly in this fashion.
	
	There are no workarounds for this problem. The following are possible
	alternatives if the developer is at liberty to modify the source code:
	
	     void main()
	     {
	
	     #define FALL   1
	     #define WINTER 2
	     #define SPRING 3
	     #define SUMMER 4
	
	     _asm {
	          mov eax, WINTER
	          }
	     }
	
	The drawback to the #define directive method is that it has no scope. Another
	method that does have scope is this:
	
	     void main()
	     {
	
	     const int FALL   = 1,
	               WINTER = 2,
	               SPRING = 3,
	               SUMMER = 4;
	
	     _asm {
	          mov eax, WINTER
	          }
	     }
	
	Additional query words: InLineAsmIss
	
	======================================================================
	Keywords          : kbcode kbVC410bug kbVC420fix kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC410
	Version           : :4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
