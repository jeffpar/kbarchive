---
layout: page
title: "Q74666: BUG: A2154 If Structure Member in Control-Flow Directive"
permalink: kb/074/Q74666/
---

## Q74666: BUG: A2154 If Structure Member in Control-Flow Directive

	Article: Q74666
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b,6.1,6.10a,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.10a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) versions 6.0 and later provide several
	Control-Flow directives such as the .WHILE, .REPEAT, and .IF constructs. When
	structure members are accessed inside of these constructs, MASM may incorrectly
	generate the following error:
	
	  error A2154: syntax error on control-flow directive
	
	RESOLUTION
	==========
	
	The sample program below illustrates this problem. As a workaround, a register
	or a temporary variable may be used to hold the structure member, as
	demonstrated below in Sample Code 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, 6.1a, and 6.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Sample Code 1
	-------------
	
	  ; Assemble options needed: none
	
	  .MODEL small, C
	
	  STRUCT1 STRUCT
	  SMember SWORD 0
	  STRUCT1 ENDS
	
	  .STACK 4096
	
	  .DATA
	  var1 STRUCT1 <0>
	
	  .CODE
	     .startup
	     mov bx, OFFSET var1
	
	     .WHILE ((STRUCT1 PTR [bx]).SMember != 1000)
	     inc (STRUCT1 PTR [bx]).SMember
	     .ENDW
	
	     .REPEAT
	     dec (STRUCT1 PTR [bx]).SMember
	     .UNTIL ((STRUCT1 PTR [bx]).SMember == 0)
	
	     .IF ((STRUCT1 PTR [bx]).SMember == 0)
	     nop
	     .ENDIF
	
	     .exit 0
	  END
	
	Sample Code 2
	-------------
	
	  ; Assemble options needed: none
	
	  .MODEL small, C
	
	  STRUCT1 STRUCT
	  SMember SWORD 0
	  STRUCT1 ENDS
	
	  .STACK 4096
	
	  .DATA
	  var1 STRUCT1 <0>
	
	  .CODE
	     .statup
	     mov bx, OFFSET var1.SMember
	
	     .WHILE (SWORD PTR [bx] != 1000)
	     inc SWORD PTR [bx]
	     .ENDW
	
	     .REPEAT
	     dec SWORD PTR [bx]
	     .UNTIL (SWORD PTR [bx] == 0)
	
	     .IF (SWORD PTR [bx] == 0)
	     nop
	     .ENDIF
	
	     .exit 0
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b,6.1,6.10a,6.11
	
	=============================================================================
	
