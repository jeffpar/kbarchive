---
layout: page
title: "Q46378: MASM: Linker Error L2002: Fixup Overflow"
permalink: /kb/046/Q46378/
---

## Q46378: MASM: Linker Error L2002: Fixup Overflow

{% raw %}

	Article: Q46378
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 30-AUG-1989
	
	The following message occurs when data defined in the data segment is
	accessed with a CS segment override:
	
	foo.OBJ(foo.ASM) : error L2002: fixup overflow at 0012 in segment _TEXT
	pos: 658 Record type: 73EE
	frm seg _TEXT, tgt seg _DATA
	
	Code Sample
	-----------
	
	       .DATA
	old_dma_vect    dd      0
	       .CODE
	;
	capture proc
	      .
	        mov     word ptr cs:old_dma_vect,bx  ;(This line caused the error)
	      .
	        end capture

{% endraw %}
