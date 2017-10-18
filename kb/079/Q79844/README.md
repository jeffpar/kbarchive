---
layout: page
title: "Q79844: Embedding the Assembly Date and Time in a MASM 6.0 Object"
permalink: kb/079/Q79844/
---

## Q79844: Embedding the Assembly Date and Time in a MASM 6.0 Object

	Article: Q79844
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Macro Assembler (MASM) version 6.0, predefined symbols for the
	date and time of assembly were introduced. They are:
	
	  @Date
	  @Time
	
	These symbols can be used to construct strings that contain the date and time.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates two methods of embedding the information
	in a string in the object. Date1 and Time1 are constructed using one method,
	Date2 and Time2 using the other. Assemble with /Fl to get a listing that shows
	the expansion.
	
	Sample Code
	-----------
	
	  /* Assemble options needed: none
	  */ 
	
	  .MODEL small
	  .STACK
	  .DATA
	
	  tmp         equ <>
	  tmp         CatStr <">, @Date, <">
	  Date1       byte tmp
	
	  tmp         equ <>
	  tmp         CatStr <">, @Time, <">
	  Time1       byte tmp
	
	  %Date2      byte "&@Date"
	
	  %Time2      byte "&@Time"
	
	  .CODE
	
	  start:
	      mov ax, @data
	      mov ds, ax
	
	      mov ah, 4ch
	      int 21h
	
	  END start
	
	Additional query words: kbinf 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	
