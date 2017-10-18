---
layout: page
title: "Q104618: HOW TO: Pass a char from C to MASM by Value &amp; Returning a char"
permalink: kb/104/Q104618/
---

## Q104618: HOW TO: Pass a char from C to MASM by Value &amp; Returning a char

	Article: Q104618
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for OS/2 
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below demonstrates how to pass a char from a program written in
	Microsoft C to a procedure written with the Microsoft Macro Assembler (MASM).
	The MASM function also returns a char to the C program.
	
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
	
	The samples below include one C file and two different assembly files. The two
	assembly files demonstrate how to pass a variable in small model for MS-DOS and
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
	
	  char MasmSub (char);
	
	  #ifdef __cplusplus
	  }
	  #endif
	
	  main ()
	  {
	     char var = 'a';
	     printf ("%c\n", var);
	     printf ("%c", MasmSub(var));
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
	     cVar:BYTE
	
	     mov al, cVar     ; Load the char into AL.
	     add al, 25       ; Because the function returns a char (a 1-byte
	     ret              ; value), C will get the return value from AL.
	  MasmSub ENDP
	  END
	
	Sample Code for Windows NT Flat Model Version
	---------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for ML: /c /Cx /coff
	
	  .386
	  .MODEL flat, C
	  .CODE
	
	  MasmSub PROC, \ 
	     cVar:BYTE
	
	     mov al, cVar     ; Load the char into AL.
	     add al, 25       ; Because the function returns a char (a 1-byte
	     ret              ; value), C will get the return value from AL.
	  MasmSub ENDP
	  END
	
	The following is the output of the program:
	
	 a
	 z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
