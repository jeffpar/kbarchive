---
layout: page
title: "Q28596: DOCERR: Correction for Shifting and Rotating Bits"
permalink: kb/028/Q28596/
---

## Q28596: DOCERR: Correction for Shifting and Rotating Bits

	Article: Q28596
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 325 of the "Microsoft Macro Assembler 5.0 Programmer's Guide" and page 325
	of the "Microsoft Macro Assembler 5.1 Programmer's Guide" incorrectly state the
	following under section 16.8, "Shifting and Rotating Bits:"
	
	  Bits can be moved right (toward the most-significant bits) or left
	  (toward the 0 bit).
	
	It should say the following:
	
	  Bits can be moved right (toward the 0 bits) or left (toward the
	  most significant bit).
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
