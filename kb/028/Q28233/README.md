---
layout: page
title: "Q28233: DOCERR: Signed/Unsigned Comparisons"
permalink: /kb/028/Q28233/
---

## Q28233: DOCERR: Signed/Unsigned Comparisons

	Article: Q28233
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
	
	Page 336 of the "Microsoft Macro Assembler 5.0 Programmer's Guide" and page 336
	of the "Microsoft Macro Assembler 5.1 Programmer's Guide" have the information
	on signed and unsigned comparisons reversed. In the section on CMP, the table
	incorrectly reads as follows:
	
	  Letter   Meaning
	  G        Greater than (for unsigned comparisons)
	  L        Less than    (for unsigned comparisons)
	  A        Above        (for signed comparisons)
	  B        Below        (for signed comparisons)
	
	The signed/unsigned comparisons should be reversed to read as follows:
	
	  Letter   Meaning
	  G        Greater than (for signed comparisons)
	  L        Less than    (for signed comparisons)
	  A        Above        (for unsigned comparisons)
	  B        Below        (for unsigned comparisons)
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
