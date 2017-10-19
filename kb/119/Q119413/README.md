---
layout: page
title: "Q119413: PC Mac: Err Msg: Application 'Unknown' Has Unexpectedly Quit"
permalink: /kb/119/Q119413/
---

## Q119413: PC Mac: Err Msg: Application 'Unknown' Has Unexpectedly Quit

	Article: Q119413
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you are signing in to version 2.1,
	3.0, or 3.2 Microsoft Mail for PC Networks, Macintosh workstation:
	
	  The application 'unknown' has unexpectedly quit,
	  because an error of type 1 occurred. OK?
	
	CAUSE
	=====
	
	This error will occur if the file SERIALNO.IDX is missing from the Microsoft
	Mail for PC Networks postoffice. SERIALNO.IDX should be in the FOLDERS directory
	of the postoffice. For example, if the postoffice is on drive M, the path would
	be:
	
	  m:\folders\serialno.idx
	
	NOTE: The Microsoft Mail for PC Networks, MS-DOS workstation does NOT get this
	same error message when signing into Mail; therefore, you are able to sign in
	successfully.
	
	RESOLUTION
	==========
	
	To correct this problem, restore SERIALNO.IDX from the most recent backup.
	However, since SERIALNO.IDX is used to generate unique folder files, the FOLDERS
	directory should also be scanned for the newest folder name/number and
	SERIALNO.IDX incremented. You can use the MS-DOS DEBUG.COM or DEBUG.EXE to find
	the last SERIALNO.IDX.
	
	NOTE: It would take more than 4,000,000 file creations before the numbers would
	be reused again.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
