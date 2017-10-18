---
layout: page
title: "Q30385: FIX: MOV with Type Operator Generates Incorrect Opcodes"
permalink: kb/030/Q30385/
---

## Q30385: FIX: MOV with Type Operator Generates Incorrect Opcodes

	Article: Q30385
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
	
	The MOV instruction, using indirect addressing, and the Type operator generate
	incorrect opcodes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler
	versions 5.1 and 5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The first MOV instruction generates the opcode "B8FFF4", which is a
	move-immediate instruction. The assembler should generate the opcode "8B44F4".
	This opcode is generated on the second move instruction. MASM Version 5.00
	generates the correct code for both MOV instructions.
	
	The following code demonstrates the problem:
	
	  seg_1  segment  para  public  'code'
	         assume cs:seg_1
	  test_str struc
	  test_f1  dw  ?
	  test_f2  dw  ?
	  test_f3  db  8 dup (?)
	  test_str ends
	  main_entry proc
	         mov  ax,word ptr [si] - type test_str
	  ;
	  ;      This alternate generation works
	  ;
	         mov  ax,word ptr [ si - type test_str]
	  main_entry endp
	  seg_1  ends
	         end
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
