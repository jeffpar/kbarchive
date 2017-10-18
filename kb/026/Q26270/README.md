---
layout: page
title: "Q26270: FIX: Relational Operators with MOV May Evaluate Incorrectly"
permalink: kb/026/Q26270/
---

## Q26270: FIX: Relational Operators with MOV May Evaluate Incorrectly

	Article: Q26270
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) versions 5.0, 5.1, and 5.1a, some of the
	relational operators evaluate to the wrong value when used with a MOV
	instruction.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following listing-file sections are examples of this problem. It is
	important to note that FFFF=true, and 0000=false. It is also important to note
	that when FFFFh is used with the GT, GE, LE, and LT operators, it is interpreted
	as the largest positive number, not as -1.
	
	Sample Listing File
	-------------------
	
	1                                .MODEL SMALL
	2                                .CODE
	3 0000  B8 0000                  MOV AX, 0FFFFH GT -1
	4 0003  B8 FFFF                  MOV AX, 0FFFFH LE -1
	5                                END
	*******************************************************
	
	1                                .386
	2                                .MODEL SMALL
	3                                .CODE
	4 0000  66| B8 FFFF              MOV AX, -1  GE  0FFFFFFFFH
	5 0004  66| B8 FFFF              MOV AX, 0FFFFFFFFH  LE  -1
	6 0008  66| B8 0000              MOV AX, 0FFFFFFFFH  GT  -1
	7 000C  66| B8 0000              MOV AX, -1  LT  0FFFFFFFFH
	8                                END
	
	Additional query words: 5.00 5.10 5.10a 6.00 buglist5.00 buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
