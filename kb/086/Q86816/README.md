---
layout: page
title: "Q86816: Mixed C and MASM with MASM Main Language, C Run-Time"
permalink: kb/086/Q86816/
---

## Q86816: Mixed C and MASM with MASM Main Language, C Run-Time

	Article: Q86816
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following steps should be considered when doing mixed-language programming
	between the Microsoft Macro Assembler (MASM) and Microsoft C with MASM as the
	main language, but the C startup code is to be brought in to enable the assembly
	module to call a C run-time routine:
	
	1. Include the statement
	
	  .MODEL <model>, c
	
	  in the assembly module to ensure that C naming and calling conventions are
	  used and that the modules use the same default segments. The <model>
	  will be small, medium, compact, or large.
	
	2. Use the END directive in the assembly module, but do not specify the entry
	  point.
	
	3. The start of the assembly module should be labeled
	
	  main:
	
	  -or-
	
	  main PROC
	
	  and the label should be made public with the following statement:
	
	  PUBLIC main
	
	
	4. Include the following statement to force a load of the C startup code:
	
	  EXTRN _acrtused:abs
	
	5. Assemble the assembly module with /Mx to preserve the case of nonlocal names.
	  If using MASM version 6.0 or later, use /Cx to preserve the case of nonlocal
	  names.
	
	Note that the stack declaration comes from the C startup code. The entry point is
	in the C startup code, so no entry point should be specified in the assembler
	module with the END directive. Doing so will cause only a part of the necessary
	initialization to be performed (that is, a stack will be created, but SS will
	not get its segment value).
	
	MORE INFORMATION
	================
	
	The following is a mixed-language example. There is one C module and one
	assembly module that must be compiled and then linked together. No special link
	options are needed.
	
	The example declares two words, arg1 and arg2, calls the C run-time routine
	printf to print out their values to the screen, and passes their addresses to a
	C routine. The C routine swaps the values of arg1 and arg2. The values of arg1
	and arg2 are printed out a second time to show that they have been swapped.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  void ptrswap( int *ptr1, int *ptr2 )
	  {
	      int temp;
	
	      temp = *ptr1;
	      *ptr1 = *ptr2;
	      *ptr2 = temp;
	  }
	
	  ----------------------------------------------------------------------
	
	  ; Assemble options needed: /Mx
	
	          .MODEL small, c
	
	          .DATA
	
	  arg1    DW     1234
	  arg2    DW     4321
	  format1 DB     "Arg1: %d", 10, 0      ; Format string for printf
	  format2 DB     "Arg2: %d", 10, 10, 0  ; Format string for printf
	
	  EXTRN  _acrtused:abs              ; Bring in C startup
	
	          .CODE
	
	  EXTRN  ptrswap:proc               ; External C routine
	  EXTRN  printf:proc                ; External C run-time routine
	  PUBLIC main                       ; C startup requires the name _main
	
	  main:
	          MOV    ax, arg1
	          PUSH   ax                 ; Push 2nd argument (C convention)
	          MOV    bx, offset format1
	          PUSH   bx                 ; Push 1st argument (C convention)
	          CALL   printf             ; Call C run-time routine
	
	          MOV    ax, arg2
	          PUSH   ax                 ; Push 2nd argument (C convention)
	          MOV    bx, offset format2
	          PUSH   bx                 ; Push 1st argument (C convention)
	          CALL   printf             ; Call C run-time routine
	
	          MOV    bx, offset arg2
	          PUSH   bx                 ; Push 2nd argument (C convention)
	          MOV    bx, offset arg1
	          PUSH   bx                 ; Push 1st argument (C convention)
	          CALL   ptrswap            ; Call C routine from module
	
	          MOV    ax, arg1
	          PUSH   ax                 ; Push 2nd argument (C convention)
	          MOV    bx, offset format1
	          PUSH   bx                 ; Push 1st argument (C convention)
	          CALL   printf             ; Call C run-time routine
	
	          MOV    ax, arg2
	          PUSH   ax                 ; Push 2nd argument (C convention)
	          MOV    bx, offset format2
	          PUSH   bx                 ; Push 1st argument (C convention)
	          CALL   printf             ; Call C run-time routine
	
	          MOV    ah, 4ch            ; Terminate program
	          int    21h
	
	          END                       ; Entry point will be specified by
	                                    ;    the C startup code
	
	Additional query words: kbinf non-local 5.00 5.10 5.10a 6.00 6.00a 6.00b s_quickasm s_c s_quickc s_qcwin
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
