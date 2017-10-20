---
layout: page
title: "Q39517: Comparing String Arguments in Macros"
permalink: /kb/039/Q39517/
---

## Q39517: Comparing String Arguments in Macros

{% raw %}

	Article: Q39517
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using IF directives, relational operators could be used to form the
	conditions. Note: The relational operators treat the expressions as follows:
	
	  EQ and NE treat their operators as 16-bit numbers
	
	  LT, LE, GT, and GE treat their operators as 17-bit numbers.
	
	The relational operators cannot be used for comparing string arguments. It is
	often necessary to compare string arguments in MACROs. IFIDN and IFDIF
	directives are available for this purpose. IFIDN grants assembly if two
	arguments are identical; IFDIF grants assembly if two arguments are different.
	The syntax is as follows:
	
	      IFIDN <argument1>,<argument2>
	      IFDIF <argument1>,<argument2>
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
