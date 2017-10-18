---
layout: page
title: "Q81892: FIX: FNENI, FNCLEX Assembled Wrong After PROC USES"
permalink: kb/081/Q81892/
---

## Q81892: FIX: FNENI, FNCLEX Assembled Wrong After PROC USES

	Article: Q81892
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
	
	The Microsoft Macro Assembler (MASM) incorrectly assemble the FNENI or FNCLEX
	coprocessor instructions if the instructions are used in a procedure declared
	with the PROC USES directive. FNENI and FNCLEX used outsize of PROC USES
	procedures assemble correctly.
	
	RESOLUTION
	==========
	
	Several methods can be used to work around this problem, including:
	
	1. Using FENI or FCLEX instead of FNENI or FNCLEX.
	
	2. Using a PROC without the USES directive.
	
	3. Putting the opcode for FNENI or FNCLEX into the code directly. The sample
	  code below demonstrates this workaround. This could also be done by setting
	  up a macro that when invoked puts the opcode into the code directly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	FENI enables interrupts by clearing the interrupt-enable mask in the control
	word. Since the 80287, 80387, and 80486 coprocessors do not have an
	interrupt-enable mask, this instruction is recognized but ignored on these
	coprocessors. FENI is the wait version and FNENI is the no-wait version.
	
	FCLEX clears all coprocessor exception flags, the busy flag, and bit 7 in the
	status word. Bit 7 is the interrupt-request flag on the 8087 and the
	error-status flag on the 80287, 80387 and 80486 coprocessors. FCLEX is the wait
	version and FNCLEX is the no-wait version.
	
	If the following sample code is assembled, the FNENI and FNCLEX instruction will
	generate the following code:
	
	     pop ax
	     iretd
	
	     pop ax
	     iret
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small, C
	  .STACK 4096
	
	  .CODE
	      .startup
	      call func
	      .exit 0
	
	  func PROC uses ax
	      fneni       ; This statement generates a pop ax and an iretd.
	      fnclex      ; This statement generates a pop ax and an iret.
	      DW 0E0DBh   ; This defines a FNENI statement.
	      DW 0E2DBh   ; This defines a FNCLEX statement.
	      ret
	  func ENDP
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
