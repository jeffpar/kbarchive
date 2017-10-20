---
layout: page
title: "Q59754: FIX: A2006: Phase Error May Be Caused By Incorrect NOP"
permalink: /kb/059/Q59754/
---

## Q59754: FIX: A2006: Phase Error May Be Caused By Incorrect NOP

{% raw %}

	Article: Q59754
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the "SEG" directive in conjunction with forward reference to a procedure
	or a segment name will produce the error
	
	  A2006 : phase error between passes
	
	CAUSE
	=====
	
	The assembler incorrectly places a "NOP" instruction in the code generated
	during Pass 1. This NOP is not generated in Pass 2, so the assembler generates a
	phase error. This phase error will most often happen on the next instruction
	that is associated with a fixup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.10a.
	This problem was fixed in MASM version 6.0.
	
	RESOLUTION
	==========
	
	To work around this problem, introduce a NOP that is seen by the assembler only
	during the second pass.
	
	MORE INFORMATION
	================
	
	The following code produces the errors. The errors do not occur when the ax
	register is used. They occur when the bx, cx, and dx registers are used. The
	workaround is shown in commented out lines.
	
	Sample Code:
	------------
	
	  ;Assemble options needed: none
	
	  ;filler          MACRO                     ;macro that codes a nop
	  ;                if2                       ;in the second pass of the
	  ;                nop                       ;assembler
	  ;                endif
	  ;ENDM
	
	  _text           SEGMENT PARA PUBLIC 'CODE'
	                  ASSUME CS:_TEXT
	
	                  MOV     cx, SEG proc1     ;error using cx, bx or dx
	  ;                filler
	                  MOV     ax, SEG proc1     ;no error using ax
	                  MOV     cx, SEG stackseg  ;error using cx, bx, or dx
	  ;                filler
	                  MOV     ax, SEG stackseg  ;no error using ax
	
	  STACKSEG        SEGMENT PARA PUBLIC 'STACK'
	                  db 100 dup (?)
	  STACKSEG        ENDS
	
	  proc1           PROC    FAR
	                  ret
	  proc1           ENDP
	  _text           ENDS
	  END
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
