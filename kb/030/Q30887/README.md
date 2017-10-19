---
layout: page
title: "Q30887: Accessing MASM Structure Fields in a Multimodule Program"
permalink: /kb/030/Q30887/
---

## Q30887: Accessing MASM Structure Fields in a Multimodule Program

	Article: Q30887
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use a structure, defined in one module with the STRUC (STRUCT in MASM 6.0)
	operator, in another module with the Macro Assembler, you must take into account
	the fact that the structure definition must be available to both modules at
	assemble time. The structure field operator (.) can then be used to access the
	structure's contents.
	
	MORE INFORMATION
	================
	
	The following program demonstrates the use of a structure in a two-module
	program:
	
	  ; Source file 1:
	
	  EXTRN changecow:NEAR                ; Near function call
	
	  animals    STRUC                    ; Structure definition
	      cat    db    "catfield      "
	      dog    db    "dogfield      "   ; Field widths of 15 characters
	      cow    db    "cowfield      "
	  animals    ENDS
	
	  .MODEL small
	
	  .DATA
	             PUBLIC zoo
	  zoo        animals   <"felix","spot","Holstein">  ; Initialize fields
	
	  .CODE
	  main:      mov ax, @data            ; Make data addressable
	             mov ds,ax
	             mov es,ax                ; For string moves
	
	             call changecow           ; Change "Holstein" to "Daisy"
	             retf
	             END main
	
	  ; Source file 2:
	  ;    In source file 2, structure definition must be available for the
	  ; field offsets. (Normally it would be placed in an include file,
	  ; then the INCLUDE operator would be used; however, for sake of
	  ; clarity, the structure definition has been placed in both files).
	  ;    The structure information must be included here to correctly
	  ; associate the fields with the offset. The structure name does not
	  ; need to be "animals"; however, the structure fields should
	  ; correspond.
	
	  animals    STRUC                    ; Structure definition
	      cat    db    "catfield      "
	      dog    db    "dogfield      "   ; Field widths of 15 characters
	      cow    db    "cowfield      "
	  animals    ENDS
	
	  .MODEL small
	
	  .DATA
	  EXTRN zoo:NEAR                       ; Let assembler know about zoo
	  newcow    db     "Daisy         "    ; Replace cow with new name
	  lenname   EQU    $ - newcow          ; Length of new name
	
	  .CODE
	            PUBLIC changecow           ; Changes cow field to "Daisy"
	  changecow PROC
	            mov     di, offset zoo.cow ; es:di should now point to
	  destination
	            mov     si, offset newcow  ; ds:si should now point to the source
	            mov     cx, lenname        ; Length of new string
	            rep     movsb              ; Do replacement
	            ret
	  changecow ENDP
	            END
	
	Additional query words: kbinf 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500
	Version           : :5.0,5.1,6.0
	
	=============================================================================
	
