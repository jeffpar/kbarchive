---
layout: page
title: "Q84744: Conditionally Assembling the END Directive"
permalink: /kb/084/Q84744/
---

## Q84744: Conditionally Assembling the END Directive

	Article: Q84744
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.x,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.x, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is helpful to conditionally have a starting label specified with
	the END directive; for example, to use preprocessor directives to specify
	various END directives:
	
	  IFDEF xyz
	    END start_label
	  ELSE
	    END
	  ENDIF
	
	Note, however, that this approach will not work. As soon as MASM encounters the
	first END directive it will stop assembling. The assembler stops regardless of
	whether or not the END directive is inside a preprocessor block. This is the
	expected behavior for the assembler.
	
	A method that can be used to accomplish this task involves using a conditionally
	defined text equate with the END directive. The following sample code
	demonstrates this method:
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Dxyz
	
	  .MODEL small
	
	  .STACK 4096
	
	  .CODE
	  start_label:
	    mov ax, 4C00h
	    int 21h
	
	  IFDEF xyz
	    end_label EQU <start_label>
	  ELSE
	    end_label EQU <>
	  ENDIF
	
	  END end_label
	
	Additional query words: kbinf 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.x,6.0,6.0a,6.0b
	
	=============================================================================
	
