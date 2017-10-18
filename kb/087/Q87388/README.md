---
layout: page
title: "Q87388: PC DB: How to Tell If a CONTROL.GLB File Is Corrupted"
permalink: kb/087/Q87388/
---

## Q87388: PC DB: How to Tell If a CONTROL.GLB File Is Corrupted

	Article: Q87388
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are some tests to determine whether a CONTROL.GLB file is
	corrupt:
	
	1. The file size must be 8 bytes in length.
	
	2. The contents of the nmailbag and nletter fields do not look abnormally large.
	  This is not necessarily a corruption that will cause the mail system not to
	  work; instead, it is an indication that there was some file corruption in the
	  database and that there may be future problems.
	
	MORE INFORMATION
	================
	
	Offset  Size  Name                Description
	----------------------------------------------------------------------
	
	0       4     long nmailbag       For generating user or gateway
	                                 associated filenames
	4       4     long nletter        For generating mail, attachment and
	                                 P1 filenames
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
