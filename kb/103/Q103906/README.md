---
layout: page
title: "Q103906: PC DOS: Err Msg: Notice 80: Failure to Create Folder"
permalink: /kb/103/Q103906/
---

## Q103906: PC DOS: Err Msg: Notice 80: Failure to Create Folder

	Article: Q103906
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a folder in version 2.1, 3.0, or 3.2 of Microsoft Mail for PC
	Networks, MS-DOS workstation, you may receive the following error:
	
	  Notice 80: Failure to create folder.
	
	CAUSE
	=====
	
	This error occurs if the SERIALNO.IDX file is not available or accessible.
	
	RESOLUTION
	==========
	
	To resolve this problem, either unlock the file using the appropriate network
	utility or restore the file from a backup copy. The most recent backup copy
	should be safe for restoration with the consideration that folders cannot be
	created without this file being available.
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
