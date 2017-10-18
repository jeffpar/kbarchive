---
layout: page
title: "Q32810: BSESUB.INC Contains Incorrect Declarations"
permalink: kb/032/Q32810/
---

## Q32810: BSESUB.INC Contains Incorrect Declarations

	Article: Q32810
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the file BSESUB.INC that comes with Microsoft Macro Assembler version 5.1 and
	5.1a, the KBDINFO structure fields should all be declared with the DW directive;
	however, the fields are declared by the DB directive instead.
	
	MORE INFORMATION
	================
	
	The following is the KBDINFO structure as declared in the BSESUB.INC that comes
	with MASM 5.1 and 5.1a
	
	     KBDINFO struc
	         kbxl_cb           db ?
	         kbxl_fsMask       db ?
	         kbxl_chTurnAround db ?
	         kbxl_fsInterim    db ?
	         kbxl_fsState      dw ?
	     KBDINFO ends
	
	The following is the KBDINFO structure as declared in the BSESUB.INC that comes
	with MASM 6.0
	
	     KBDINFO         STRUCT  2 ; kbst
	     cb_             WORD    0
	     fsMask_         WORD    0
	     chTurnAround_   WORD    0
	     fsInterim_      WORD    0
	     fsState_        WORD    0
	     KBDINFO         ENDS
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
