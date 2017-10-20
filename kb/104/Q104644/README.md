---
layout: page
title: "Q104644: INFO: Passing C Arrays to MASM by Reference"
permalink: /kb/104/Q104644/
---

## Q104644: INFO: Passing C Arrays to MASM by Reference

{% raw %}

	Article: Q104644
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
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
	
	The sample code below demonstrates how to pass C arrays of type char, short, and
	long to a Microsoft Macro Assembler (MASM) procedure by reference.
	
	MORE INFORMATION
	================
	
	The samples below include one C file and three different assembly files. The
	three assembly files demonstrate how to pass variables by reference in small
	model and large model for MS-DOS and in flat model for Windows NT. Link only the
	appropriate assembly module to the C module.
	
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
	
	  void MasmSub (char *, short *, long *);
	
	  #ifdef __cplusplus
	  }
	  #endif
	
	  char chararray[4] = "abc";
	  short shortarray[3]  = {1, 2, 3};
	  long longarray[3] = {32768, 32769, 32770};
	
	  main ()
	  {
	     printf ("%s\n", chararray);
	     printf ("%d %d %d\n", shortarray[0], shortarray[1], shortarray[2]);
	     printf ("%ld %ld %ld\n", longarray[0], longarray[1], longarray[2]);
	     MasmSub (chararray, shortarray, longarray);
	     printf ("%s\n", chararray);
	     printf ("%d %d %d\n", shortarray[0], shortarray[1], shortarray[2]);
	     printf ("%ld %ld %ld", longarray[0], longarray[1], longarray[2]);
	  }
	
	Sample Code for MS-DOS Small Model Version
	------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for MASM: /MX
	  ; Assemble options needed for ML: /c /Cx
	
	  .MODEL small, C
	  .286
	  .CODE
	
	  MasmSub PROC uses si, \ 
	     arraychar:PTR, \ 
	     arrayshort:PTR, \ 
	     arraylong:PTR
	
	     mov si, arraychar  ; Load SI with the address of the char array.
	     mov BYTE PTR [si], "x"       ; Since a char is 1 byte long, each
	     mov BYTE PTR [si+1], "y"     ; successive element can be accessed
	     mov BYTE PTR [si+2], "z"     ; by adding 1 more to si.
	     mov si, arrayshort ; Load SI with the address of the short array.
	     add WORD PTR [si], 7         ; Since a short is 2 bytes long, each
	     add WORD PTR [si+2], 7       ; successive element can be accessed
	     add WORD PTR [si+4], 7       ; by adding 2 more to si.
	     mov si, arraylong  ; Load SI with the address of the long array.
	     add WORD PTR [si], 1         ; Since a long is 4 bytes long, each
	     adc WORD PTR [si+2], 0       ; successive element in the array
	     add WORD PTR [si+4], 1       ; can be accessed by adding 4 more
	     adc WORD PTR [si+6], 0       ; to si (or 4 more to si+2 to access
	     add WORD PTR [si+8], 1       ; the high word of each element).
	     adc WORD PTR [si+10], 0
	     ret
	  MasmSub ENDP
	  END
	
	Sample Code for MS-DOS Large Model Version
	------------------------------------------
	
	     ; Filename: MASMSUB.ASM
	     ; Assemble options needed for MASM: /MX
	     ; Assemble options needed for ML: /c /Cx
	
	     .MODEL large, C
	     .286
	     .CODE
	
	     MasmSub PROC uses es si, \ 
	        arraychar:PTR, \ 
	        arrayshort:PTR, \ 
	        arraylong:PTR
	
	        les si, arraychar  ; Load ES:SI with the address of the char array.
	        mov BYTE PTR es:[si], "x"    ; Since a char is 1 byte long, each
	        mov BYTE PTR es:[si+1], "y"  ; successive element can be accessed
	        mov BYTE PTR es:[si+2], "z"  ; by adding 1 more to si.
	        les si, arrayshort ; Load ES:SI with the address of the short array.
	        add WORD PTR es:[si], 7      ; Since a short is 2 bytes long, each
	        add WORD PTR es:[si+2], 7    ; successive element can be accessed
	        add WORD PTR es:[si+4], 7    ; by adding 2 more to si.
	        les si, arraylong  ; Load ES:SI with the address of the long array.
	        add WORD PTR es:[si], 1      ; Since a long is 4 bytes long, each
	        adc WORD PTR es:[si+2], 0    ; successive element in the array
	        add WORD PTR es:[si+4], 1    ; can be accessed by adding 4 more
	        adc WORD PTR es:[si+6], 0    ; to si (or 4 more to si+2 to access
	        add WORD PTR es:[si+8], 1    ; the high word of each element).
	        adc WORD PTR es:[si+10], 0
	        ret
	     MasmSub ENDP
	     END
	   
	
	Sample Code for Windows NT Flat Model Version
	---------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for ML: /c /Cx /coff
	
	  .386
	  .MODEL flat, C
	  .CODE
	
	  MasmSub PROC uses esi, \ 
	     arraychar:PTR, \ 
	     arrayshort:PTR, \ 
	     arraylong:PTR
	
	     mov esi, arraychar ; Load ESI with the address of the char array.
	     mov BYTE PTR [esi], "x"      ; Since a char is 1 byte long, each
	     mov BYTE PTR [esi+1], "y"    ; successive element can be accessed
	     mov BYTE PTR [esi+2], "z"    ; by adding 1 more to esi.
	     mov esi, arrayshort; Load ESI with the address of the short array.
	     add WORD PTR [esi], 7        ; Since a short is 2 bytes long, each
	     add WORD PTR [esi+2], 7      ; successive element can be accessed
	     add WORD PTR [esi+4], 7      ; by adding 2 more to esi.
	     mov esi, arraylong ; Load ESI with the address of the long array.
	     inc DWORD PTR [esi]          ; Since a long is 4 bytes long, each
	     inc DWORD PTR [esi+4]        ; successive element can be accessed
	     inc DWORD PTR [esi+8]        ; by adding 4 more to esi.
	     ret
	  MasmSub ENDP
	  END
	
	The following is the output of the program:
	
	 abc
	 1 2 3
	 32768 32769 32770
	 xyz
	 8 9 10
	 32769 32770 32771
	
	Additional query words: mixed language
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCVC700DOS kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
