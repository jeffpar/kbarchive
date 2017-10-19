---
layout: page
title: "Q75244: FIX: Avoid externdef or proto when Initializing Data"
permalink: /kb/075/Q75244/
---

## Q75244: FIX: Avoid externdef or proto when Initializing Data

	Article: Q75244
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When defining and initializing a data structure that contains an address defined
	with externdef or proto, the linker does not resolve the address correctly in
	the Microsoft Macro Assembler (MASM) version 6.0.
	
	CAUSE
	=====
	
	The example code below illustrates this problem. In the example, a function
	table is initialized to the address of four separate functions. The two
	functions defined with "externdef" and "proto far" do not cause the assembler to
	generate the correct EXTDEF (EXTernal DEFinition) record. As a result, the
	linker doesn't resolve the addresses correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL large
	
	  FN    typedef  proto far
	  PFN   typedef  far  ptr FN
	
	  ST_ST struct   1b
	             func1    PFN    ?
	             func2    PFN    ?
	             func3    PFN    ?
	             func4    PFN    ?
	  ST_ST   ends
	
	  extern         FN_1A:FN
	  externdef      FN_2A:FN
	  FN_3A   proto far
	
	  DATA  segment word public "DATA"
	
	        ST_ST    <FN_1A, \ 
	                  FN_2A, \  ; This doesn't work.
	                  FN_3A, \  ; This doesn't work either.
	                  FN_4A>
	
	  DATA  ends
	
	  _TEXT segment word public 'CODE'
	
	  FN_4A   proc    far
	        ret
	  FN_4A   endp
	
	  _TEXT   ends
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
