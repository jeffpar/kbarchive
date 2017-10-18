---
layout: page
title: "Q34500: FIX: Mixing &#92; and / in Command Line Causes Problems"
permalink: kb/034/Q34500/
---

## Q34500: FIX: Mixing &#92; and / in Command Line Causes Problems

	Article: Q34500
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When mixing \ and / on the MASM command line, MASM will sometimes give incorrect
	results and hang. The following command line causes these problems:
	
	  masm -I\sl200qr\sl -Mx -DVERS_DDQR -I\sl200qr/sl/cmerge/src/Common
	   \sl200qr/sl/cmerge/src/Common/comsup.asm;
	
	The option -Mx will be ignored. MASM also hangs when processing some assembler
	files.
	
	CAUSE
	=====
	
	In this case, MASM was incorrectly extracting the base name; it wrote the full
	path into an array big enough only for an 8.3 filename, thus overwriting many
	global flags.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM version 5.1a.
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
