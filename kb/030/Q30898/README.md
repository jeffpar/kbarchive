---
layout: page
title: "Q30898: DOCERR: KBDINFO Incorrectly Defined"
permalink: /kb/030/Q30898/
---

## Q30898: DOCERR: KBDINFO Incorrectly Defined

{% raw %}

	Article: Q30898
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
	
	The KBDINFO structure found in BSESUB.H is incorrectly defined, as follows:
	
	      KBDINFO struc
	              kbxl_cb                 db ?
	              kbxl_fsMask             db ?
	              kbxl_chTurnAround       db ?
	              kbxl_fdInterim          db ?
	              kbxl_fsState            dw ?
	      KBDINFO ends
	
	The members of the structure should all be declared as words (dw) rather than
	bytes.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
