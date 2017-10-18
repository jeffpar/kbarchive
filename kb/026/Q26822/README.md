---
layout: page
title: "Q26822: FIX: Relational Operators Evaluate to Wrong Value"
permalink: kb/026/Q26822/
---

## Q26822: FIX: Relational Operators Evaluate to Wrong Value

	Article: Q26822
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
	
	When used with a MOV instruction, some relational operators will evaluate to the
	wrong value. The following listing file sections are examples of this problem.
	It is important to note that FFFF = true, and 0000 = false. It is also important
	to note that when FFFFh is used with the GT, GE, or LT, LE operator, it is
	interpreted as the largest positive number and not as -1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler (MASM)
	version 5.0, 5.1, and 5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following demonstrates this problem with MASM 5.0:
	
	                .MODEL SMALL
	         0000   .CODE
	         0000   B8 0000    MOV AX, 0FFFFH GT -1
	         0003   B8 FFFF    MOV AX, 0FFFFH LE -1
	         0006
	
	                .386
	                .MODEL SMALL
	         0000   .CODE
	         0000   66 | B8 FFFF   MOV AX, -1 GE 0FFFFFFFFH
	         0004   66 | B8 FFFF   MOV AX, 0FFFFFFFFH LE -1
	         0008   66 | B8 0000   MOV AX, 0FFFFFFFFH GT -1
	         000C   66 | B8 0000   MOV AX, -1 LT 0FFFFFFFFH
	         0010   END
	
	The following demonstrates the problem MASM 5.1:
	
	                .MODEL SMALL
	         0000   .CODE
	         0000   B8 0000    MOV AX, 0FFFFH GT -1
	         0003   B8 FFFF    MOV AX, 0FFFFH LE -1
	         0006
	
	                .386
	                .MODEL SMALL
	         0000   .CODE
	         0000   66 | B8 FFFF   MOV AX, -1 GE 0FFFFFFFFH
	         0004   66 | B8 0000   MOV AX, 0FFFFFFFFH LE -1
	         0008   66 | B8 FFFF   MOV AX, 0FFFFFFFFH GT -1
	         000C   66 | B8 0000   MOV AX, -1 LT 0FFFFFFFFH
	         0010   END
	
	Additional query words: 5.00 5.10 5.10a buglist5.00 buglist5.10 fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
