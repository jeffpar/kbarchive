---
layout: page
title: "Q72849: FIX: L1126 Link Error May Be Caused By EXPORT in PROC Definition"
permalink: /kb/072/Q72849/
---

## Q72849: FIX: L1126 Link Error May Be Caused By EXPORT in PROC Definition

{% raw %}

	Article: Q72849
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an exported function with the Microsoft Macro Assembler (MASM)
	version 6.0, 6.0a, or 6.0b, the EXPORT keyword can be used in a procedure
	definition and MASM will automatically generate the correct .OBJ record to add
	it to the export table for the .EXE (or DLL). This is useful when creating a
	procedure in a DLL that is called from outside the DLL, when creating a callback
	procedure in an .EXE, or when defining a procedure as residing in an IOPL
	segment with OS/2.
	
	However, there is a problem when the EXPORT keyword is used in the latter case.
	When creating an IOPL function, you must declare the number of words that will
	be required to hold the parameters for the function. The operating system then
	uses this value to build the stack that the IOPL function will run on. You
	normally do this by adding the word count after the function name in the EXPORT
	section of the associated .DEF file. For example, the .DEF file may contain the
	following:
	
	     EXPORTS _Func 3
	
	CAUSE
	=====
	
	The problem results when you then use the EXPORT keyword in MASM for the
	procedure definition for the IOPL function as follows:
	
	     Func PROC EXPORT, arg1:WORD, arg2:WORD, arg3:WORD
	
	MASM will generate an EXPDEF (EXPort DEFinition) record that lists the parameter
	word count as zero. If you then link with the .DEF file that correctly lists the
	word count as three, the linker will return the following error message:
	
	  fatal error L1126: conflicting pwords value
	
	RESOLUTION
	==========
	
	The workaround is to change the EXPORT keyword in the procedure definition to
	PUBLIC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	Sample Code
	-----------
	
	TEST.ASM
	--------
	
	  ;; Assemble options needed: none
	
	  .MODEL large
	  .286
	
	  .CODE
	  Func PROC C EXPORT, arg1:PTR DWORD, arg2:WORD
	  Func ENDP
	  END Func
	
	TEST.DEF
	--------
	
	  ; Module definition file for linking
	
	  NAME Test
	
	  EXPORTS
	     _Func 3
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
