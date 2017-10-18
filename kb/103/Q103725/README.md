---
layout: page
title: "Q103725: HOWTO: Pass Common C Types to MASM by Reference"
permalink: kb/103/Q103725/
---

## Q103725: HOWTO: Pass Common C Types to MASM by Reference

	Article: Q103725
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following sample code demonstrates how to pass variables of type char,
	short, and long from a Microsoft C program to a Microsoft Macro Assembler (MASM)
	program by reference.
	
	MORE INFORMATION
	================
	
	The following sample includes one C file and three different assembly files. The
	three assembly files demonstrate how to pass variables by reference in small and
	large model for MS-DOS and in flat model for Windows NT. Link only the
	appropriate assembly module to the C module.
	
	Note that MASM 6.1 or later and the C/C++ version 8.0 32-bit compiler that ships
	with Visual C++, 32-bit Edition, are required to build the flat model Windows NT
	version.
	
	Sample Code
	-----------
	
	     // Filename: CMAIN.C
	     // Compile options needed: /c (and /AL for large model)
	
	     #include <stdio.h>
	     extern void  MasmSub (char *, short *, long *);
	
	     char charvar = 'a';
	     short shortvar = 1;
	     long longvar = 32768L;
	
	     void main (void)
	     {
	        printf ("%c %d %ld\n", charvar, shortvar, longvar);
	        MasmSub (&charvar, &shortvar, &longvar);
	        printf ("%c %d %ld", charvar, shortvar, longvar);
	     }
	
	Sample Code for MS-DOS Small Model Version
	------------------------------------------
	
	     ; Filename: MASMSUB.ASM
	     ; Assemble options needed for MASM: /MX
	     ; Assemble options needed for ML: /c /Cx
	
	     .MODEL small, C      ;.MODEL ... C tells the assembler that
	     .286                ; parameters are pushed from right to left.
	     .CODE
	
	     MasmSub PROC uses si, \ 
	
	        pchar:PTR, \ 
	        pshort:PTR, \ 
	        plong:PTR
	
	        mov si, pchar      ;Load SI with the address of the char variable.
	        mov BYTE PTR [si], "z"
	        mov si, pshort      ;Load SI with the address of the short variable.
	        add WORD PTR [si], 9
	        mov si, plong      ;Load SI with the address of the long variable.
	        add WORD PTR [si], 1  ;Increment the low word of the long variable
	                              ;by 1.
	        adc WORD PTR [si+2],0 ;Increment the high word.
	        ret
	
	     MasmSub ENDP
	     END
	
	Sample Code for MS-DOS Large Model Version
	------------------------------------------
	
	     ; Filename: MASMSUB.ASM
	     ; Assemble options needed for MASM: /MX
	     ; Assemble options needed for ML: /c /Cx
	
	     .MODEL large, C      ;.MODEL ... C tells the assembler that
	     .286                ; parameters are pushed from right to left.
	     .CODE
	
	     MasmSub PROC uses es si, \ 
	
	        pchar:PTR, \ 
	        pshort:PTR, \ 
	        plong:PTR
	
	        les si, pchar      ;Load ES:SI with the address of the char variable.
	        mov BYTE PTR es:[si], "z"
	        les si, pshort      ;Load ES:SI with the address of the short
	                            ;variable.
	        add WORD PTR es:[si], 9
	        les si, plong      ;Load ES:SI with the address of the long variable.
	        add WORD PTR [si], 1  ;Increment the low word of the long variable
	                              ;by 1.
	        adc WORD PTR [si+2],0 ;Increment the high word.
	        ret
	
	     MasmSub ENDP
	     END
	
	Sample Code for Windows NT Flat Model Version
	---------------------------------------------
	
	     ; Filename: MASMSUB.ASM
	     ; Assemble options needed for ML: /c /Cx /coff
	
	     .386                ;.MODEL ... C tells the assembler that
	     .MODEL flat, C      ; parameters are pushed from right to left.
	     .CODE
	
	     MasmSub PROC uses esi, \ 
	
	        pchar:PTR, \ 
	        pshort:PTR, \ 
	        plong:PTR
	
	        mov esi, pchar      ;Load ESI with the address of the char variable.
	        mov BYTE PTR [esi], "z"
	        mov esi, pshort      ;Load ESI with the address of the short
	                             ;variable.
	        add WORD PTR [esi], 9
	        mov esi, plong      ;Load ESI with the address of the long variable.
	        inc DWORD PTR [esi]      ;Increment the long variable by 1.
	        ret
	
	     MasmSub ENDP
	     END
	
	The following is the output of the program:
	
	a 1 32768
	z 10 32769
	
	Additional query words: 8.00 9.00 mixed language
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCVC700DOS kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
