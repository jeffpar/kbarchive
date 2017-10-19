---
layout: page
title: "Q120154: FIX: DX1020 Using TEXTEQU to Define False IF Block"
permalink: /kb/120/Q120154/
---

## Q120154: FIX: DX1020 Using TEXTEQU to Define False IF Block

	Article: Q120154
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0a,6.0b,6.1,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0a, 6.0b, 6.1, 6.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the TEXTEQU directive to define an IF statement that evaluates to FALSE
	produces the following error message in MASM version 6.1 or 6.1a:
	
	  DOSXNT : fatal error DX1020: unhandled exception: General protection fault
	
	When you use ML from MASM version 6.0b, an "Application Error" message box
	appears when running from a Windows MS-DOS box. From straight MS-DOS, the
	following error message occurs:
	
	  fatal error A1000: cannot open file : error #xx -
	  : Macro Called From Main Line Code
	
	Using MLX from MASM version 6.0b produces the following error message:
	
	  run-time error R6915
	  - DOSX16 : unhandled exception
	
	Using ML from MASM version 6.0a, the following error messages occur:
	
	  fatal error A2051: text item required
	  : Macro Called From Main Line Code
	  fatal error A1010: unmatched block nesting : _text
	
	RESOLUTION
	==========
	
	Use IFDEF expressions along with the /D assembler option to perform conditional
	assembly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed above.
	
	This problem was corrected in MASM version 6.11.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates the problem:
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	    dbgs textequ <if 0>      ; evaluates to false
	    dbgsend textequ <endif>
	    dump_matrix macro
	      dbgs
	      mov ax, ax
	      dbgsend
	    endm
	    _text segment
	      dump_matrix
	    _text ends
	    END
	
	Additional query words: 6.00a 6.00b 6.10 6.10a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0a,6.0b,6.1,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	
