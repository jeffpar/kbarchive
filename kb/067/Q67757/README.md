---
layout: page
title: "Q67757: DOCERR: Conditional Jump Instruction Is Incorrectly Documented"
permalink: /kb/067/Q67757/
---

## Q67757: DOCERR: Conditional Jump Instruction Is Incorrectly Documented

	Article: Q67757
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
	
	Page 336 of the "Microsoft Macro Assembler 5.1 Programmer's Guide" shipped with
	MASM version 5.0 and 5.1 has a table that lists the various conditional jump
	instructions, what each means, and whether each acts on a signed or unsigned
	value. The table has the signed/unsigned values mixed up.
	
	The table currently states:
	
	  Letter  Meaning
	  ------  -------
	
	   J      Jump
	   G      Greater than (for unsigned comparisons)
	   L      Less than (for unsigned comparisons)
	   A      Above (for signed comparisons)
	   B      Below (for signed comparisons)
	   E      Equal
	   N      Not
	
	It should read:
	
	  Letter  Meaning
	  ------  -------
	
	   J      Jump
	   G      Greater than (for signed comparisons)
	   L      Less than (for signed comparisons)
	   A      Above (for unsigned comparisons)
	   B      Below (for unsigned comparisons)
	   E      Equal
	   N      Not
	
	Additional query words: 5.00 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	
	=============================================================================
	
