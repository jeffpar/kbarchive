---
layout: page
title: "Q76504: Static Variables Declared in MASM Routines Called from C"
permalink: /kb/076/Q76504/
---

## Q76504: Static Variables Declared in MASM Routines Called from C

{% raw %}

	Article: Q76504
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.0,5.10,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.10, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The programs below demonstrate how a variable declared in a Microsoft Macro
	Assembler (MASM) subprogram will keep its value between calls from a C main
	program.
	
	MORE INFORMATION
	================
	
	Link the two programs below with the following command:
	
	  link cmain masmsub,,, /nod llibce;
	
	Sample Code #1
	--------------
	
	  // Filename: CMAIN.C
	  // Compile options needed: /c /AL
	
	  #include <stdio.h>
	
	  extern int far MasmSub () ;
	
	  main ()
	  {
	     int i ;
	     for (i = 1; i < 11; ++i)          // Call the MASM subprogram 10
	     {                                 // times, and its return value
	        printf ("%d\n", MasmSub()) ;   // will be incremented by 1 each
	     }                                 // time.
	  }
	
	Sample Code #2
	--------------
	
	  ; Filename: MASMSUB.ASM
	  ; Assemble options needed: /mx /ml
	
	  .MODEL LARGE, C
	  .DATA
	     var DW 0        ; This variable will keeps its value between calls.
	  .CODE
	  PUBLIC MasmSub
	  MasmSub PROC FAR
	     INC var
	     MOV AX, var     ; Since the function returns an int, C will get the
	     RET             ; return value from AX.
	  MasmSub ENDP
	          END
	
	Additional query words: kbinf 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.0,5.10,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
