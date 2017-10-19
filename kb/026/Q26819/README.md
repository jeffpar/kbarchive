---
layout: page
title: "Q26819: FIX: &quot;Value Out of Range&quot; Error"
permalink: /kb/026/Q26819/
---

## Q26819: FIX: &quot;Value Out of Range&quot; Error

	Article: Q26819
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
	
	MASM gives a "value out of range" error on the following example:
	
	     false  equ  0
	     true   equ  not false
	     db     true              ;MASM choke on this line
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.0, 5.1, and
	5.1a. This problem was corrected in version 6.0.
	
	Additional reference works: 5.00 5.10 5.10a
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500 kbMASM510a
	Version           : :5.0,5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
