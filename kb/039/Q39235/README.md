---
layout: page
title: "Q39235: Declaring a Communal Variable of a Record Type"
permalink: kb/039/Q39235/
---

## Q39235: Declaring a Communal Variable of a Record Type

	Article: Q39235
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to declare a communal variable of a record type, declare the variable
	whose size matches the size of the record type. There is no need to specify that
	the variable is of the record type.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates this information:
	
	Sample Code
	-----------
	
	  ;Assemble options needed: none
	
	  ; module 1
	
	          .model small
	          DOSSEG
	
	  EXTRN   proc2:proc
	          .stack 100h
	
	          .data
	  color   RECORD   blink:1, back:3, intense:1, fore:3
	          COMM     near pixel:byte     ; use "byte" because
	                                       ; color has size byte.
	          .code
	  start:  MOV ax, @data
	          MOV ds, ax
	
	          MOV pixel, color <1,2,1,3> ; now the variable pixel
	                                     ; should contain abh (1 010 1 011)
	          CALL proc2
	          MOV ax, 4c00h
	          INT 21h
	
	          END start
	
	  ******************************
	  ; module 2
	
	          .model small
	          DOSSEG
	
	          .stack 100h
	
	          .data
	  color   RECORD   blink:1, back:3, intense:1, fore:3
	          COMM     near pixel:byte
	
	          .code
	  PUBLIC  proc2
	
	  proc2   PROC
	          MOV ah, 0
	          MOV ah, pixel  ; ah should contain abh (1 010 1 011)
	          RET
	  proc2   ENDP
	
	          END
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
