---
layout: page
title: "Q87924: FIX: CodeView 4.0 Does Not Step Over Embedded Int 3"
permalink: /kb/087/Q87924/
---

## Q87924: FIX: CodeView 4.0 Does Not Step Over Embedded Int 3

{% raw %}

	Article: Q87924
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05 
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView version 4.0 will not step over an embedded Interrupt 3
	instruction. Execution will also stop after pressing F5 for Go, and will not
	pass this instruction.
	
	RESOLUTION
	==========
	
	You can either step over the Int 3 by changing the value of the IP register, or
	use the Assemble command to change the Int 3 instruction.
	
	You can modify the IP register so it points to the instruction immediately after
	the Int 3 by modifying the register directly in the register window, or by using
	the Rip command.
	
	You can change the Int 3 to a NOP instruction using the Assemble (a) command as
	follows
	
	  >a XXXX:XXX1
	  >XXXX:XXX1 nop
	  >XXXX:XXX2
	
	where XXXX:XXX1 is the address where the Int 3 is located.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	Int 3 is a special debugging interrupt. It is often put in code to create a
	permanent, or hard breakpoint.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView400 kbCodeView401
	Version           : :4.0,4.01,4.05
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
