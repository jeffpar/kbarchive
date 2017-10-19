---
layout: page
title: "Q85870: FIX: L1035 Error, FUNCTIONS Statement First in .DEF File"
permalink: /kb/085/Q85870/
---

## Q85870: FIX: L1035 Error, FUNCTIONS Statement First in .DEF File

	Article: Q85870
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.3
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, version 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L1035: syntax error in module-definition file
	
	CAUSE
	=====
	
	In the module-definition (.DEF) file, the FUNCTIONS statement is the first
	statement in the file.
	
	RESOLUTION
	==========
	
	Modify the module-definition file to place another statement before the
	FUNCTIONS statement. For example, you can specify the NAME statement before the
	FUNCTIONS statement, as follows:
	
	     NAME test
	     FUNCTIONS:MySeg _FuncName
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK version 5.3 for MS- DOS.
	This problem was corrected in LINK version 5.31 for MS-DOS.
	
	MORE INFORMATION
	================
	
	LINK version 5.3 introduces the FUNCTIONS statement to the module- definition
	file. The FUNCTIONS statement can place a function into a specified segment or
	into an overlay.
	
	Additional query words: 5.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK530DOS
	Version           : MS-DOS:5.3
	Solution Type     : kbfix
	
	=============================================================================
	
