---
layout: page
title: "Q71697: PC DOS: Creating Action Field Items for the Operator Program"
permalink: /kb/071/Q71697/
---

## Q71697: PC DOS: Creating Action Field Items for the Operator Program

	Article: Q71697
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2a, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Operator program (OPERATOR.EXE) looks in the GLB directory of the Microsoft
	Mail database for a text file named OPERATOR.GLB. The OPERATOR.GLB file contains
	a list of action items you will be able to choose from the Action field in
	Operator.
	
	Action items should be separated by hard carriage returns.
	
	For example, create a text file with the following information:
	
	  Telephoned
	  Returned your call
	  Please call
	  Will call again
	  Wants to see you
	  Left package
	
	The list of action items will be sorted when it is viewed from within the
	Operator program. This feature is not explained in the Microsoft Mail for PC
	Networks documentation.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2a
	
	=============================================================================
	
