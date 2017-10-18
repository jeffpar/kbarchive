---
layout: page
title: "Q150572: FIX: Error C1001: _asm Instruction Accessing Stack Using [ebp]"
permalink: kb/150/Q150572/
---

## Q150572: FIX: Error C1001: _asm Instruction Accessing Stack Using [ebp]

	Article: Q150572
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inline assembly code that uses [ebp] to gain access to arguments or local
	variables on the stack results in this error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file '\school.tp3\test\c10\src\P2\386\codegen.c', line 4040)
	
	CAUSE
	=====
	
	When an argument is passed to a function, or a local variable is declared in a
	function, the argument or variable is placed on the stack, and is already
	referenced in terms of [ebp]. When [ebp] is used explicitly to reference that
	argument or variable as in ccb[ebp], for example, the compiler adds [ebp] again,
	resulting in an illegal address. The compiler fails to catch this as a
	meaningful error, and instead generates error C1001.
	
	RESOLUTION
	==========
	
	Do not attempt to gain access to stack arguments or variables in terms of
	[ebp].
	
	NOTE: In the sample code in this article, lcb[ebp] and ccb[ebp] are invalid
	references; lcb and ccb need to be referenced directly. Otherwise, the compiler
	does not catch the illegal reference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ 6.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed:none
	  */ 
	
	  #include <windows.h>
	
	  void masmfunc(DWORD ccb){
	
	     _asm mov eax ,dword ptr ccb[ebp];   //C1001
	
	  //Or,
	  //  DWORD lcb = 20;
	
	  // _asm mov eax ,dword ptr lcb[ebp];   //C1001
	
	  }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
