---
layout: page
title: "Q85227: FIX: Using EXTERNDEF w/ a label May Work Incorrectly"
permalink: kb/085/Q85227/
---

## Q85227: FIX: Using EXTERNDEF w/ a label May Work Incorrectly

	Article: Q85227
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) initializing a data structure with the
	offset of a label declared with EXTERNDEF or PROTO can cause incorrect results.
	
	RESOLUTION
	==========
	
	Use EXTERN to perform the same task as the EXTERNDEF; this method will work
	properly. Also, instead of using OFFSET to initialize a WORD field in the
	structure, use the label to initialize a NEAR PTR field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	EXTERNDEF was introduced as a convenient way to declare shared data structures,
	variables, symbols, and labels inside a header file. The same functionality can
	be obtained by using EXTERN and PUBLIC. To replace "EXTERNDEF <name>":
	
	- If <name> is used in the current module but is not defined, use "EXTERN
	  <name>:<qualified type>".
	
	- If <name> is defined in the current module, use "PUBLIC <name>".
	
	Using this method, each EXTERN and PUBLIC will be specific to certain source
	files, which prevents the use of one global include file.
	
	Sample Code
	-----------
	
	  ; Assemble options needed:  /c /Zi
	  ; Link options needed: /CO
	  ; If SOURCE1.ASM and SOURCE2.ASM are assembled and linked together,
	  ; The structure fields an_st.func2 and an_st.func3 will be improperly
	  ; initialized with the offset 0x0000.
	
	  ;===========================<source1.asm>=============================
	  .MODEL small
	
	  st_st STRUCT 1b
	     func1 WORD ?
	     func2 WORD ?
	     func3 WORD ?
	     func4 WORD ?
	  st_st ENDS
	
	  ; Uncomment the line below to have fn_2a properly marked for external
	  ; linkage. Note that if the EXTERNDEF statement is not commented out,
	  ; the EXTERN statement must come first for this to work properly.
	  ;EXTERN fn_2a:NEAR
	
	  EXTERN fn_1a:NEAR
	  EXTERNDEF fn_2a:NEAR
	  fn_3a PROTO NEAR
	
	  .DATA
	  an_st st_st { \ 
	     offset fn_1a,
	     offset fn_2a, ; This doesn't work.
	     offset fn_3a, ; This doesn't work either.
	     offset fn_4a}
	
	  .CODE
	     .startup
	     .exit 0
	  fn_4a:
	     ret
	  END
	
	  ;===========================<source2.asm>=============================
	  .MODEL small
	  EXTERNDEF fn_1a:NEAR
	  EXTERNDEF fn_2a:NEAR
	  EXTERNDEF fn_3a:NEAR
	
	  .CODE
	  fn_1a:
	     ret
	  fn_2a:
	     ret
	  fn_3a:
	     ret
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
