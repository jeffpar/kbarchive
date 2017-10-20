---
layout: page
title: "Q79829: FIX: /Zm and &#36;-Constant Produces A2075 in MASM 6.0"
permalink: /kb/079/Q79829/
---

## Q79829: FIX: /Zm and &#36;-Constant Produces A2075 in MASM 6.0

{% raw %}

	Article: Q79829
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) version 6.0, the following error message
	may be produced
	
	  A2075: jump destination too far : by xxxxx byte(s)
	
	when using the /Zm option, the MASM driver with MASM 6.0, or OPTION M510. When
	MASM 5.1 compatibility is not used or MASM 5.1 is used, the code assembles
	correctly.
	
	CAUSE
	=====
	
	This behavior is caused by using the current address operator, $, minus a
	constant (for example, jmp $-5), and the MASM driver with MASM 6.0, OPTION M510,
	or the /Zm switch when assembling.
	
	RESOLUTION
	==========
	
	Use a label instead of the current address operator or assemble without the MASM
	5.1 switch.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The /Zm switch is the MASM 5.1 compatibility switch in MASM 6.0. The MASM driver
	calls ML with the /Zm option in MASM 6.0. OPTION M510 is a directive that
	specifies MASM 5.1 compatibility.
	
	Sample Code
	-----------
	
	  ; Assembly options need: /Zm
	
	  DOSSEG
	  .MODEL small
	  .STACK 4096
	  .DATA
	  .CODE
	  start:  mov     al,5h
	  here:   dec     al
	          jnz     $-2             ; This line causes the A2075 error.
	          ;jnz    here            ; Uncomment this line and comment out
	          mov     ax,4c00h        ; jnz $-2 to get the code to assemble
	          int     21h             ; correctly.
	  END     start
	
	Additional query words: 6.00 5.10 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
