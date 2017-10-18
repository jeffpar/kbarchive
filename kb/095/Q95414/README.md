---
layout: page
title: "Q95414: PRB: INVOKE Pushes SS to Convert NEAR PTR to FAR PTR"
permalink: kb/095/Q95414/
---

## Q95414: PRB: INVOKE Pushes SS to Convert NEAR PTR to FAR PTR

	Article: Q95414
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application passes a parameter of type NEAR PTR to a routine that
	expects an argument of type FAR PTR, the INVOKE directive converts the NEAR PTR
	to a FAR PTR by pushing the SS segment register on the stack. The assembler does
	not issue any warnings when it applies this conversion. In a situation where SS
	does not equal DS, as in a Windows dynamic-link library (DLL), INVOKE may
	generate incorrect code.
	
	CAUSE
	=====
	
	When the assembler converts a NEAR PTR to a FAR PTR, it uses the SS segment
	register when it has no other information about the appropriate segment value.
	
	RESOLUTION
	==========
	
	When your application passes a NEAR PTR parameter to a function that expects a
	FAR PTR, specify the segment register to use in the conversion by adding the
	appropriate segment prefix (cs:, ds:, es:, or ss:) to the parameter. The code
	example below demonstrates this method.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small, C, farstack
	
	  func1 PROTO arg1:FAR PTR BYTE
	
	  .CODE
	  func2 PROC, arg2:NEAR PTR BYTE
	      INVOKE func1, arg2         ; This pushes ss:arg2
	      ret
	  func2 ENDP
	
	  func3 PROC, arg2:NEAR PTR BYTE
	      INVOKE func1, ds:arg2      ; This pushes ds:arg2
	      ret
	  func3 ENDP
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	Issue type        : kbprb
	
	=============================================================================
	
