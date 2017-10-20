---
layout: page
title: "Q35803: DOCERR: External Addresses in &quot;=&quot; Directive"
permalink: /kb/035/Q35803/
---

## Q35803: DOCERR: External Addresses in &quot;=&quot; Directive

{% raw %}

	Article: Q35803
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On page 214, section 11.1.1, of the "Microsoft Macro Assembler 5.1 Programmer's
	Guide", the documentation indicates that the equal sign (=) directive may be
	used with expressions that evaluate to an address. However, if the address
	refers to an external label, MASM 5.1 and 5.1a will generate the error:
	
	  error A2052: Improper operand type
	
	MASM 6.0, 6.0a, and 6.0b will generate the error:
	
	  error A2026: constant expected
	
	CAUSE
	=====
	
	MASM has a restriction that the (=) directive can not be used on an external
	address.
	
	RESOLUTION
	==========
	
	You can use the EQU directive to create an alias for an external address.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  EXTRN buf1:BYTE
	  buf2 = buf1
	
	  END
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
