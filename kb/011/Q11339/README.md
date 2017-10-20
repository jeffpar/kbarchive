---
layout: page
title: "Q11339: PRB: 8087 mnemonics without Operators"
permalink: /kb/011/Q11339/
---

## Q11339: PRB: 8087 mnemonics without Operators

{% raw %}

	Article: Q11339
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When assembled with no operands, the 8087 instructions FADD, FDIV, FDIVR, FMUL,
	FSUB, and FSUBR assemble as if they were the instructions "FADDP ST(1),ST",
	"FDIVP ST(1),ST", and so forth.
	
	CAUSE
	=====
	
	The assembler is correct. When used with no operands, these instructions perform
	"classical stack" operations.
	
	MORE INFORMATION
	================
	
	The following is from Pages 6-23 of the "Intel iAPX 86/88, 186/188 User's Manual
	Programmer's Reference":
	
	The classical stack form may be used to make the 8087 operate like a classical
	stack machine. No operands are coded in this form, only the instruction
	mnemonic. The NDP (8087) picks the source operand from the stack top and the
	destination from the next stack element. It then pops the stack, performs the
	operation, and returns the result to the new stack top, effectively replacing
	the operands by the result.
	
	Note: FADD, FSUB, FMUL, and FDIV also pop if no operands are specified, in spite
	of the fact that the mnemonics do not have P as a last character.
	
	A similar passage can be found on Pages 2-5 of the Numeric Supplement to the
	"iAPX 286 Programmer's Reference" manual.
	
	Additional query words: 1.25 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM125 kbMASM500
	Version           : :1.25,5.0,5.1,6.0
	
	=============================================================================
	

{% endraw %}
