---
layout: page
title: "Q62626: Passing a Pointer to a Structure from C to Assembly"
permalink: kb/062/Q62626/
---

## Q62626: Passing a Pointer to a Structure from C to Assembly

	Article: Q62626
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
	
	The code sample below illustrates how to pass a structure from a C module to an
	assembly module. This code makes it possible to access the structure fields
	within the assembly module using the "." field operator.
	
	Within the assembly module a structure is declared. This structure is used as a
	template by the assembler to resolve accessing the fields of the structure. The
	structure may be given any label name.
	
	MORE INFORMATION
	================
	
	The following is an example. Note that the syntax for accessing structure
	members will be different with MASM 6.0 and later.
	
	Sample Code:
	------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  struct node
	  {
	     int IntVar;
	     char Array[5];
	  };
	
	  struct node var;
	  extern void IncStruc( struct node * );
	
	  void main()
	  {
	     var.Array[0] = 'H';
	     var.Array[2] = 'I';
	     var.IntVar = 0x0b12;
	     IncStruc( &var );
	
	  /* Incremented values on returning to C */ 
	
	     printf( "var.IntVar is now %x\n",  var.IntVar );
	     printf( "var.Array[0] is now %c\n", var.Array[0] );
	     printf( "var.Array[2] is now %c\n", var.Array[2] );
	  }
	
	  ----------------------------------------------------------------------
	
	  ; Assemble options needed: none
	
	  ;         OPTION OLDSTRUCTS      ; for MASM 5.1 behavior from MASM 6.0
	
	           .model small, c
	
	     delta STRUC
	           IntVar DW ?
	           Array  DB 5 dup (?)
	     delta ENDS
	
	           .code
	
	  IncStruc PROC
	           PUSH   BP
	           MOV    BP, SP
	
	           MOV    bx, [bp+4]
	           INC    [bx].IntVar
	           INC    [bx].Array
	           INC    [bx+2].Array
	
	           POP    bp
	           RET
	  IncStruc ENDP
	
	           END
	
	The output is as follows:
	
	  var.IntVar is now b13
	  var.Array[0] is now I
	  var.Array[2] is now J
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
