---
layout: page
title: "Q104616: INFO: Sharing Common C Types with MASM"
permalink: /kb/104/Q104616/
---

## Q104616: INFO: Sharing Common C Types with MASM

{% raw %}

	Article: Q104616
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below demonstrates how to share variables of type char, short,
	and long between a Microsoft C program and a Microsoft Macro Assembler (MASM)
	program. This is accomplished by declaring the C variables outside the a
	function definition, which makes them public. The MASM subprogram can gain
	access to these public variables by declaring them with the EXTRN directive. The
	EXTRN directive has the following format
	
	  EXTRN <name>:<type>
	
	where <name> represents the public name of the variable as it is declared
	in the main module, and <type> can be either BYTE, WORD, DWORD, FWORD,
	QWORD, or TBYTE. Note that in MASM 6.0 and later, EXTRN is a synonym for EXTERN.
	If you are using MASM 6.x, then you should use EXTERNDEF, because it is more
	flexible when used in different contexts.
	
	MORE INFORMATION
	================
	
	The samples below include one C file and two different assembly files. The two
	assembly files demonstrate how to share variables in small model for MS-DOS and
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
	
	  void MasmFunc(void);
	  char charvar = 'a';       // Declaring variables outside
	  short shortvar  = 1;      // of a function definition
	  long longvar = 32768L;    // makes them public.
	
	  #ifdef __cplusplus
	  }
	  #endif
	
	  main ()
	  {
	     while (shortvar < 11)  // Display and increment variables 11 times
	     {
	        printf ("%c %d %ld\n", charvar, shortvar, longvar) ;
	         MasmFunc () ;
	     }
	  }
	
	Sample Code for MS-DOS Small Model Version
	------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for MASM: /MX
	  ; Assemble options needed for ML: /c /Cx
	
	  .MODEL small, C
	  .286
	
	  .DATA                            ; NOTE: You can put these as EXTERNDEF
	                                   ; in .INC file and include it here.
	    EXTRN charvar:BYTE        ; The EXTRN directive enables a MASM
	    EXTRN shortvar:WORD        ; procedure to access public variables.
	    EXTRN longvar:DWORD
	
	  .CODE
	  MasmFunc PROC
	     inc charvar
	     inc shortvar
	     add WORD PTR longvar, 1
	     adc WORD PTR longvar+2, 0
	     ret
	  MasmFunc ENDP
	  END
	
	Sample Code for Windows NT Flat Model Version
	---------------------------------------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed for ML: /c /Cx /coff
	
	  .386
	  .MODEL flat, C
	
	  .DATA                             ; NOTE: You can put these as EXTERNDEF
	                                    ; in .INC file and include it here.
	     EXTERNDEF charvar:BYTE      ; The EXTRN directive enables a MASM
	     EXTERNDEF shortvar:WORD     ; procedure to access public variables.
	     EXTERNDEF longvar:DWORD
	
	  .CODE
	  MasmFunc PROC
	     inc charvar
	     inc shortvar
	     inc longvar
	     ret
	  MasmFunc ENDP
	  END
	
	The following is the output of the program:
	
	  a 1 32768
	  b 2 32769
	  c 3 32770
	  d 4 32771
	  e 5 32772
	  f 6 32773
	  g 7 32774
	  h 8 32775
	  i 9 32776
	  j 10 32777
	
	Additional query words: 8.00 8.00c 9.00 mixed language
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
