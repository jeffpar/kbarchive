---
layout: page
title: "Q76725: FIX: INVOKE May Cause Incorrect Line Information"
permalink: /kb/076/Q76725/
---

## Q76725: FIX: INVOKE May Cause Incorrect Line Information

{% raw %}

	Article: Q76725
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 may generate line information
	that does not match the assembled code. When the parameters on an INVOKE
	statement are listed on more that one source line, line number information after
	the INVOKE might not match the assembled code. Incorrect line information will
	cause the assembler to show errors on the wrong lines. It also causes the
	CodeView debugger to appear to execute blank lines, comments, or wrong lines. In
	addition, it can cause problems setting breakpoints in CodeView.
	
	RESOLUTION
	==========
	
	To avoid this problem, put all of the parameters of an INVOKE call on the same
	line in the source code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	When the following sample code is run using CodeView, the debugger will appear
	to execute the wrong lines.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	
	  .MODEL small, c
	  .STACK 4096
	
	  .DATA
	  Saaz        DW 1234h, 17h
	  Hallertauer DQ 0
	
	  .CODE
	  hops PROC far C USES ax si di, boiling:ptr, finishing:ptr
	      mov si, boiling
	      mov di, finishing
	      mov ax, [si]
	      mov [di], ax
	      mov ax, [si+2]
	      mov [di+2], ax
	      ret
	  hops ENDP
	
	      .startup
	      mov ax, ds
	      mov es, ax
	
	      INVOKE  hops,
	      offset Saaz,
	      offset Hallertauer  ;CodeView appears to execute mov ax, Saaz here
	                          ;and mov bx, Saaz+2 on this line.
	      mov ax, Saaz
	      mov bx, Saaz+2
	      .exit 0
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
