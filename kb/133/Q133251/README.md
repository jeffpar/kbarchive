---
layout: page
title: "Q133251: Err Msg: Sub or Function Not Defined in Visual Basic"
permalink: /kb/133/Q133251/
---

## Q133251: Err Msg: Sub or Function Not Defined in Visual Basic

	Article: Q133251
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Visual Basic applications under Windows NT Server, the following
	error message appears:
	
	  Sub or Function Not Defined
	
	
	CAUSE
	=====
	
	This problem occurs if a specified routine is not available to the calling
	procedure, or a routine is not available in a specified dynamic link library
	(DLL).
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Close all applications except for the Visual Basic application.
	
	2. Run WPS.EXE located in the <Visual Basic root>\CDK directory (available
	  with Visual Basic Professional Edition).
	
	3. Compare the DLL and executable (EXE) files on the computer with files on
	  another computer where the Visual Basic application works.
	
	4. Rename the files on the computer (that do not match the files on the other
	  computer where the Visual Basic application works) to another file name.
	
	Additional query words: vb app prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
