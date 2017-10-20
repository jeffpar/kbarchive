---
layout: page
title: "Q61871: FIX: PWB 1.0 Requires Decimal Value for Stack Size LINK Option"
permalink: /kb/061/Q61871/
---

## Q61871: FIX: PWB 1.0 Requires Decimal Value for Stack Size LINK Option

{% raw %}

	Article: Q61871
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Programmer's WorkBench (PWB) version 1.0, there is a problem with
	changing a program's stack size in some situations. When specifying the stack
	size in the Link Options dialog box (from the Options menu), you must enter the
	value in the form of a decimal integer. Although the Help menu tells you this
	field accepts positive integers in octal and hexadecimal form, PWB 1.00 will not
	accept them.
	
	CAUSE
	=====
	
	When an octal or hexadecimal value is entered in the stack-size field, any
	digits specified as A-F are discarded and replaced by 0 (zero). If digits
	precede a letter, the digits are retained and the letters are discarded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0. This problem
	was corrected in PWB version 1.1.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
