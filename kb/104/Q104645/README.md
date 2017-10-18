---
layout: page
title: "Q104645: INFO: Passing a long from C to MASM by Value &amp; Returning a long"
permalink: kb/104/Q104645/
---

## Q104645: INFO: Passing a long from C to MASM by Value &amp; Returning a long

	Article: Q104645
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below demonstrates how to pass a long from a program written in
	Microsoft C to a procedure written with the Microsoft Macro Assembler (MASM).
	The MASM function also returns a long to the C program.
	
	Registers are used to return values of simple data types. For 16-bit code, such
	as an MS-DOS program, use the following conventions for returning data to a C
	program:
	
	  char                   AL
	  short, int, near *     AX
	  long, far *            DX:  High order portion (segment)
	                         AX:  Low order portion (offset)
	
	For 32-bit code, such as a Windows NT program, use the following conventions for
	returning data to a C program:
	
	  char                   AL
	  short                  AX
	  long, int, *           EAX
	
	MORE INFORMATION
	================
	
	The samples below include one C file and two different assembly files. The two
	assembly files demonstrate how to pass a variable in small model for MS- DOS and
	in flat model for Windows NT. Link only the appropriate assembly module to the C
	module.
	
	Note that MASM 6.1 or later and the C/C++ 32-bit compiler that ships with Visual
	C++, 32-bit Edition, are required to build the flat model Windows NT version.
	
	Sample Code
	-----------
	
	  // Filename: CMAIN.C
	  // Compile options needed: /c
	
	  #include <stdio.h>
	
	  #ifdef __cplusplus
	  extern "C" {
	  #endif
	
	  long MasmSub (long, long);
	
	  #ifdef __cplusplus
	  }
	  #endif
	
	  main ()
	     {
	     long var1 = 98304, var2 = 147456;
	     printf ("%ld + %ld = %ld", var1, var2, MasmSub (var1, var2));
	     }
	
	Sample Code for MS-DOS Small Model Version
	------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for MASM: /MX
	  ; Assemble options needed for ML: /c /Cx
	
	  .MODEL small, C
	  .286
	  .CODE
	
	  MasmSub PROC, \ 
	     lVar1:DWORD, \ 
	     lVar2:DWORD
	
	     mov ax, WORD PTR lVar1       ; Load the first long into DX:AX.
	     mov dx, WORD PTR lVar1+2
	     add ax, WORD PTR lVar2       ; Add the second long to DX:AX
	     adc dx, WORD PTR lVar2+2
	     ret              ; Because the function returns a long (a 4-byte
	  MasmSub ENDP        ; value), C will get the return value from DX:AX.
	  END
	
	Sample Code for Windows NT Flat Model Version
	---------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for ML: /c /Cx /coff
	
	  .386
	  .MODEL flat, C
	  .CODE
	
	  MasmSub PROC, \ 
	     lVar1:DWORD, \ 
	     lVar2:DWORD
	
	     mov eax, lVar1   ; Load the first long into EAX.
	     add eax, lVar2   ; Add the second long to EAX.
	     ret              ; Because the function returns a long (a 4-byte
	  MasmSub ENDP        ; value), C will get the return value from EAX.
	  END
	
	The following is the output of the program:
	
	  98304 + 147456 = 245760
	
	Additional query words: mixed language
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
