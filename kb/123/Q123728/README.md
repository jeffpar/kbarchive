---
layout: page
title: "Q123728: FIX: EXTERNDEF on PROC Labels Does Not Make Them Public"
permalink: kb/123/Q123728/
---

## Q123728: FIX: EXTERNDEF on PROC Labels Does Not Make Them Public

	Article: Q123728
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using MASM version 5.1 compatibility mode, adding an EXTERNDEF to a PROC
	label does not make it public.
	
	RESOLUTION
	==========
	
	Add PUBLIC to the procedures that need to be made public.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in MASM version 6.11.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem. The result is
	"error L2029: 'PROCA' unresolved external."
	
	Sample Code
	-----------
	
	  ; TEST1.ASM
	
	     externdef proca:near
	     _text segment word public 'CODE'
	     call proca
	     _text ends
	     end
	
	-----------
	
	  ; TEST2.ASM
	
	     externdef proca:near
	     _text segment word public 'CODE'
	     proca proc near
	     ret
	     proca endp
	     _text ends
	     end
	
	Additional query words: 6.10 6.00 buglist6.00 buglist6.10 fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610
	Version           : :6.0,6.1
	Solution Type     : kbfix
	
	=============================================================================
	
