---
layout: page
title: "Q196537: PC MMTA: External Doesn't Automatically Restart with &gt; 4 GB Vol"
permalink: /kb/196/Q196537/
---

## Q196537: PC MMTA: External Doesn't Automatically Restart with &gt; 4 GB Vol

	Article: Q196537
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the MS Mail Multitasking Message Transfer Agent (MMTA) External.exe
	program against a large (greater than 4 GB) disk volume using the MinKDiskFull
	and MinKDiskNotFull options, it stops when it falls below the specified "Disk
	Full" limit. However, when it frees up space above the "Not Full" limit, it does
	not automatically restart.
	
	CAUSE
	=====
	
	The MMTA uses a data type of "32 bit unsigned long" for these parameters,
	limiting it to 4 GB.
	
	WORKAROUND
	==========
	
	Customers with this problem can run the MMTA against a smaller volume, thereby
	avoiding reaching this size limit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	Multitasking MMTA for Windows NT.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
