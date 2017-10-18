---
layout: page
title: "Q65385: Mac Srv: SAM Intercept Causes Mail Server to Hang"
permalink: kb/065/Q65385/
---

## Q65385: Mac Srv: SAM Intercept Causes Mail Server to Hang

	Article: Q65385
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Frequent Microsoft Mail server hangs can be caused by the presence of SAM
	Intercept in the System Folder of the server Macintosh. Symantec Corporation has
	confirmed a problem with SAM Intercept, which may cause Mail data file
	corruptions. This applies to SAM Intercept versions 2.0.1 and earlier.
	
	SAM Intercept randomly modifies the Mail map in RAM just before the Mail server
	writes it to disk. When a modified map is written to the Mail data file, it
	becomes corrupted. Symantec claims the problem has been corrected in the new
	maintenance release, version 2.0.2b. However, there have been reports from the
	field that may indicate that version 2.0.2b does not solve the problem.
	
	Symantec and Microsoft are researching this problem and will post new information
	here as it becomes available.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
