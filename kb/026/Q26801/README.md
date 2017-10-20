---
layout: page
title: "Q26801: FIX: Byte Order Incorrect in Listing File For Doublewords"
permalink: /kb/026/Q26801/
---

## Q26801: FIX: Byte Order Incorrect in Listing File For Doublewords

{% raw %}

	Article: Q26801
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The byte order shown in the listing file produced by MASM 5.0 for doublewords is
	incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.0. The problem
	was correctly in MASM version 5.1.
	
	MORE INFORMATION
	================
	
	The listing file produced by MASM 5.0 for the following sample code shows var as
	0A0F0000, while MASM 5.1 shows var correctly as 00000FA0.
	
	Sample Code
	-----------
	
	  ;Assemble options needed: none
	
	  .model small
	  .data
	
	  var  dd  4000
	
	  end
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM500
	Version           : :5.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
