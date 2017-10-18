---
layout: page
title: "Q61590: Passing a long&#42; from a C Module to an Assembly Module"
permalink: kb/061/Q61590/
---

## Q61590: Passing a long&#42; from a C Module to an Assembly Module

	Article: Q61590
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following code demonstrates passing a LONG INT (4 bytes) via a far pointer
	(4 bytes) to an assembly routine that accesses the LONG integer.
	
	Each integer is incremented in the assembly routine and its new value returned to
	the calling C program.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: /AL
	  */ 
	
	  #include <stdio.h>
	  #include <process.h>
	  #include <conio.h>
	
	  extern void IncLongs( long *, long * );
	
	  void main()
	  {
	     long *n1,*n2;               /* 4 byte pointers  */ 
	
	     long int t1 = 9999999L;     /* 4 byte variables */ 
	     long int t2 = 2256789L;
	
	     n1 = &t1;
	     n2 = &t2;
	
	     /* initial values */ 
	     printf( "The values are  %ld and  %ld\n ", *n1, *n2 );
	
	     printf( "Incrementing values...\n" );
	     IncLongs( n1, n2 );
	
	     /* values returned by the assembly routine */ 
	     printf( "The values are  %ld and  %ld\n ", *n1, *n2 );
	  }
	
	  ========================================================
	
	  ; Assemble options needed: none
	
	           .model large, c
	           .data
	           .code
	  IncLongs PROC far arg1:dword, arg2:dword
	           PUSH es                 ; save registers
	           PUSH si
	           LES si,arg1             ; load in es:si the seg:offset of n1
	           INC word ptr es:[si]
	           JNC doarg2
	           INC word ptr es:[si+2]  ; if carry, increment high word of n1
	
	  doarg2:
	           LES si,arg2             ; load in es:si the seg:offset of n2
	           INC word ptr es:[si]
	           JNC finis
	           INC word ptr es:[si+2]  ; if carry, increment high word of n2
	
	  finis:
	           POP si                  ; restore registers
	           POP es
	           MOV sp,bp
	           RET
	  IncLongs ENDP
	
	           END
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
