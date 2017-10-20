---
layout: page
title: "Q87550: FIX: CV 4.0 Port Input Command Does Not Display Value"
permalink: /kb/087/Q87550/
---

## Q87550: FIX: CV 4.0 Port Input Command Does Not Display Value

{% raw %}

	Article: Q87550
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Port Input (I) command should display the byte from the specified hardware
	port. This feature does not work correctly in Microsoft CodeView versions 4.0,
	4.01, and 4.05.
	
	(Note: This command is only valid under MS-DOS. Under Windows, it should be
	ignored, and as a result does not display a value.)
	
	RESOLUTION
	==========
	
	You can write a function that will achieve the same result. The following is an
	example. To use it to check port 2f0h, type "?in(0x2f0)" (without the quotation
	marks) at the CodeView command prompt.
	
	    #pragma check_stack(off)
	     unsigned in( unsigned x ) {
	        _asm {
	           push dx             // save register
	           mov  dx, x
	           in   ax, dx
	           pop  dx             // restore register
	           }
	     }                         // 
	     #pragma check_stack()
	
	To use this function, it must be compiled and linked with CodeView symbolic
	information. It is not necessary to call this function in the program to use it
	when debugging, but you must step into the program before evaluating this
	function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	Additional query words: 4.00 inp
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS
	Version           : :4.0,4.01,4.05
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
