---
layout: page
title: "Q11910: PRB: SIZE Operator Value"
permalink: /kb/011/Q11910/
---

## Q11910: PRB: SIZE Operator Value

{% raw %}

	Article: Q11910
	Product(s): Microsoft Macro Assembler
	Version(s): 4.0,5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 4.0, 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to get the length of a text string, using the SIZE operator can
	produce undesired results. In the example below, MSG_LEN is set to a value of 1,
	but it seems it should be set to a value of 11:
	
	     MSG DB 'Darth Vader'
	     MSG_LEN EQU SIZE MSG
	
	CAUSE
	=====
	
	The value of MSG_LEN should be 1. The SIZE operator is defined to be the LENGTH
	* TYPE as stated in the documentation. The expression, LENGTH MSG, will be equal
	to 1 (when applied to a data label, the LENGTH operator returns the number of
	elements created by the DUP operator; otherwise it returns 1) and the
	expression, TYPE MSG, will be equal to 1. Therefore, the variable MSG_LEN will
	be equal to 1.
	
	RESOLUTION
	==========
	
	In Macro Assembler version 6.0, the SIZEOF operator can be used to calulate the
	total number of bytes allocated to a data item. In versions prior to 6.0, a
	simple way to calculate the value you want is as follows:
	
	     MSG DB 'Darth Vader'
	     MSG_LEN EQU $-MSG
	
	Additional query words: 4.00 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM400 kbMASM500
	Version           : :4.0,5.0,5.1,6.0
	
	=============================================================================
	

{% endraw %}
