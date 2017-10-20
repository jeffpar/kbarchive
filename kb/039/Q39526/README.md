---
layout: page
title: "Q39526: How to Share a Structure Between C and Assembler Modules"
permalink: /kb/039/Q39526/
---

## Q39526: How to Share a Structure Between C and Assembler Modules

{% raw %}

	Article: Q39526
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may declare a type with STRUC directive in your MASM module with the same
	memory-storage template as the "struct" type declared in your C module. You also
	can declare the variable as external with WORD type if it is a near data, or
	DWORD type if it is a far data.
	
	In C, the structure may be packed on a 1, 2, or 4-byte boundary. The 2-byte
	boundary is the default. As a result, the template constructed in your MASM
	module may not match the memory storage exactly, unless pad bytes are
	specifically added to the template. See the example below.
	
	In MASM 5.10 and earlier, any template you may create in with the STRUC directive
	has to have unique field names throughout the module. The field names represent
	the offset relative to the beginning of the structure. They do not have to be
	literally the same field names of the structure defined in the C module.
	
	MORE INFORMATION
	================
	
	The sample program below demonstrates this information. It consists of a C
	module and an Assembler module.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  struct sample {
	     char byte_1;
	     unsigned int word_1;
	     char byte_2;
	     unsigned int word_2;
	  } rec = {0x41, 0xffff, 0x42, 0xeeee};
	
	  void proc_rec( void );
	
	  void main()
	  {
	     proc_rec( );
	  }
	
	  ----------------------------------------------------------------------
	
	  ; Assemble options needed: /Mx (or /Cx with 6.0 and later)
	
	     .model small,c
	     .data
	
	  sample  STRUC
	     byte_1  db   ?      ; if dw is used, next padding byte is not needed.
	     junk_1  db   ?      ; necessary padding, unused byte
	     word_1  dw   ?
	     byte_2  db   ?
	     junk_2  db   ?      ; necessary padding, unused byte
	     word_2  dw   ?
	  sample  ENDS
	
	  EXTRN      rec:word    ; can use EXTRN  rec:sample with 6.0 or later
	
	     .code
	  PUBLIC     proc_rec
	
	  proc_rec  PROC  near
	     MOV ax, rec.word_1
	     MOV bx, rec.word_2
	     MOV cl, rec.byte_1
	     MOV ch, rec.byte_2
	     RET
	  proc_rec  ENDP
	          END
	
	Additional query words: kbinf 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : :5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
