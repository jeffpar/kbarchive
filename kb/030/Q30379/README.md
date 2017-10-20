---
layout: page
title: "Q30379: FIX: Structure References Using '.' Cause Confusion"
permalink: /kb/030/Q30379/
---

## Q30379: FIX: Structure References Using '.' Cause Confusion

{% raw %}

	Article: Q30379
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Variable names in the assembler can begin with the following character:
	
	     '.'
	
	Structure references use the character '.' as an add operator. This means the
	label '.cat' is different than the element 'cat' in a structure. The assembler
	can become confused distinguishing the two uses in a program, and can generate
	the following error message:
	
	  Error A2028: Operator expected' occurs on 'mov ax,duck.cat'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MASM versions 5.1 and 5.1a.
	This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	         .MODEL SMALL
	     mouse  struc
	     cat     dw   1
	     dog     dw   2
	     mouse  ends
	         .DATA
	     duck    mouse  <>
	         .CODE
	     start:  mov  ax,@data
	             mov  ds,ax
	     .cat    dw   4
	             mov  ax,duck.cat
	      END start
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
