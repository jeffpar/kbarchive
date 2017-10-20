---
layout: page
title: "Q69123: FIX: Long Command Line Generates Protection Violation"
permalink: /kb/069/Q69123/
---

## Q69123: FIX: Long Command Line Generates Protection Violation

{% raw %}

	Article: Q69123
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the Microsoft Macro Assembler (MASM) version 5.1 with a parameter list
	greater than 129 characters generates a protection violation under OS/2.
	
	RESOLUTION
	==========
	
	To work around this problem you can shorten the command line by using the MASM
	environment variable to declare options. That is, use MASM=/Mx /Zi etc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in version 5.1a.
	
	MORE INFORMATION
	================
	
	The following example illustrates the problem:
	
	  MASM /Mx /Zi .\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\ 
	  .\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\ 
	  .\.\.\.\.\t.asm;
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
