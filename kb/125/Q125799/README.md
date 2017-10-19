---
layout: page
title: "Q125799: FIX: C2443 Using Structure Member Operand in _asm Block"
permalink: /kb/125/Q125799/
---

## Q125799: FIX: C2443 Using Structure Member Operand in _asm Block

	Article: Q125799
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbVC100bug kbVC150bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the four conditions described in this article, the following compiler
	error is generated:
	
	  test.cpp(linenumber) : error C2443: operand size conflict
	
	Here linenumber is the assembly instruction in TEST.CPP file that meets the
	following conditions. This error occurs when the following four conditions are
	met:
	
	- You're using inline assembly.
	
	- The size of the source operand on an assembly instruction is different from
	  the size of the destination operand.
	
	- The source operand is a member of a structure.
	
	- The PTR operator is used to force the operand to the size required.
	
	RESOLUTION
	==========
	
	If you are using C++, declare a reference variable initialized with the
	structure member. Use the reference variable as the source operand in the
	assembly instruction as shown in this sample code:
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Tp
	  */ 
	
	  truct Test
	  {
	
	   int  nInt;
	  } test1;
	
	  void main(void)
	  {
	  __asm  mov  bh, BYTE PTR test1.nInt  /* error occurs here */ 
	
	  int & nTest = test1.nInt;   /*  these lines work  */ 
	
	  __asm  mov  bh, BYTE PTR nTest   /*  these lines work  */ 
	  }
	
	If you are using C, use a local variable instead of a reference variable.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	Additional query words: CPP CXX MASM assembler macro
	
	======================================================================
	Keywords          : kbVC100bug kbVC150bug kbVC152bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
