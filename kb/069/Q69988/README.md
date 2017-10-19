---
layout: page
title: "Q69988: Percent Character Not Allowed in Identifiers in MASM 6.0"
permalink: /kb/069/Q69988/
---

## Q69988: Percent Character Not Allowed in Identifiers in MASM 6.0

	Article: Q69988
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Macro Assembler (MASM) version 6.0 and later, the percent character "%"
	is not allowed in any identifier name. The valid characters that can be used in
	an identifier are listed on page 13 of the "Macro Assembler 6.0 Programmer's
	Guide."
	
	MORE INFORMATION
	================
	
	The following is a possible error that may occur if you attempt to use an
	identifier containing a percent character:
	
	  file.asm(6): error A2009: syntax error in expression
	
	Because the percent character is also used as the expansion operator (see page
	238 of the "Macro Assembler 6.0 Programmer's Guide"), the assembler will not
	accept the percent character in identifiers, even in MASM 5.1 compatibility mode
	(selected by using the /Zm switch).
	
	The Macro Assembler version 5.1 does not document the percent character as being
	valid in identifiers, but it was accepted by the assembler.
	
	One workaround for this situation is to remove the percent character from the
	identifier.
	
	Additional query words: kbinf 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
