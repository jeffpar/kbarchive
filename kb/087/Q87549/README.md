---
layout: page
title: "Q87549: FIX: ESP Not Updated Correctly After PUSHFD, POPFD"
permalink: kb/087/Q87549/
---

## Q87549: FIX: ESP Not Updated Correctly After PUSHFD, POPFD

	Article: Q87549
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for OS/2 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When single-stepping through a PUSHFD or a POPFD in Microsoft CodeView versions
	3.0, 3.11, 3.12, 3.14, 3.5, 4.0, 4.01, and 4.05 the ESP register is changed by
	only 2 bytes rather than 4 bytes.
	
	RESOLUTION
	==========
	
	The problem only occurs when single-stepping. Placing the cursor on the next
	instruction and pressing F7 will result in CodeView correctly updating the ESP
	register. If you use this workaround, make sure the next instruction does not
	modify the stack pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 3.0, 3.11,
	3.12, 3.14, 3.5, 4.0, 4.01, and 4.05. This problem was corrected in CodeView
	version 4.1.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. Single-step over the
	instructions to see ESP change by only 2 bytes. Restart and run to the first NOP
	and then the second to see that ESP is then correctly updated.
	
	Sample Code
	-----------
	
	  ; Assembly options needed: /Zi
	
	  _text segment word public 'code'
	     ASSUME cs:_text, ds:_text
	  .386
	     PUSHFD
	     NOP
	     POPFD
	     NOP
	
	     MOV ah, 4ch
	     INT 21h
	  _text ENDS
	     END
	
	Additional query words: 3.00 3.50 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	
