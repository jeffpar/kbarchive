---
layout: page
title: "Q40627: Mnemonic Letters Indicating Types of Jumps Documentation Error"
permalink: /kb/040/Q40627/
---

## Q40627: Mnemonic Letters Indicating Types of Jumps Documentation Error

{% raw %}

	Article: Q40627
	Product(s): See article
	Version(s): 5.00   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_masm
	Last Modified: 24-APR-1989
	
	Page 336 of the "Microsoft Macro Assembler Programmer's Guide"
	incorrectly associates the mnemonic letters "G" and "L" with jumps on
	unsigned comparisons, and the letters "A" and "B" with jumps on signed
	comparisons.
	
	The two sets of letters should be reversed with their respective
	comparisons to form the following, correct table:
	
	   Letter        Meaning
	
	   J             Jump
	   G             Greater than (for signed comparisons)
	   L             Less than (for signed comparisons)
	   A             Above (for unsigned comparisons)
	   B             Below (for unsigned comparisons)
	   E             Equal
	   N             Not

{% endraw %}
