---
layout: page
title: "Q75275: FIX: Assembling with /Sg May Cause A2075 Error"
permalink: kb/075/Q75275/
---

## Q75275: FIX: Assembling with /Sg May Cause A2075 Error

	Article: Q75275
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to generate a listing file with /Fl and /Sg, the Microsoft Macro
	Assembler (MASM) version 6.0 generates A2075 errors (jump destination too far :
	by xxx byte(s)).
	
	RESOLUTION
	==========
	
	To work around the problem, either avoid the use of /Sg or use the /Sa option
	instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
