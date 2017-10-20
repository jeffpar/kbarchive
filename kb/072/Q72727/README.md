---
layout: page
title: "Q72727: PRB: No Error for Same Register Listed Twice in USES Clause"
permalink: /kb/072/Q72727/
---

## Q72727: PRB: No Error for Same Register Listed Twice in USES Clause

{% raw %}

	Article: Q72727
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The USES clause was added to the PROC directive with the release of the
	Microsoft Macro Assembler (MASM) version 6.0. With USES, it is possible to
	specify the registers that your procedure will use. The assembler will then save
	the registers on the stack at function entry and restore them upon exit, saving
	the programmer from having to do so.
	
	If you mistakenly list the same register twice in the USES clause, MASM will not
	generate a warning. The assembler will generate code to push and pop the
	register twice.
	
	CAUSE
	=====
	
	This is correct behavior. It is the programmer's responsibility to catch this
	type of error.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this situation. In this example, the ES, DI,
	DS, SI, and CX registers were meant to be saved. However, DI is inadvertently
	saved twice, and SI is not saved at all.
	
	Sample Code
	-----------
	
	  ; Assemble Options Needed: /Fl /Sg /c
	
	  .MODEL small, c
	  .STACK 4096
	  .DATA
	
	  .CODE
	  StrCmp  PROC USES es di ds di cx,
	               string1:FAR PTR, string2:FAR PTR, len:WORD
	          CLD
	          MOV   cx, len
	          LES   di, string1
	          LDS   si, string2
	          REPE  cmpsb
	          MOV   ax, cx
	  StrCmp  ENDP
	  END
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
