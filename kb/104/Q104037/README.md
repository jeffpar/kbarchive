---
layout: page
title: "Q104037: Microsoft Backup Doesn't Write to Second Disk After Time-Out"
permalink: kb/104/Q104037/
---

## Q104037: Microsoft Backup Doesn't Write to Second Disk After Time-Out

	Article: Q104037
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a time-out occurs during a backup procedure, Microsoft Backup may not
	continue successfully (although it appears to do so).
	
	CAUSE
	=====
	
	This problem occurs if you wait until the drive light goes out when you are
	switching disks. At that point, Microsoft Backup asks you if you want to
	continue or quit. After you choose to continue, Microsoft Backup appears to
	finish normally; however, the second (or subsequent) disk may be blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Backup versions 6.0
	and 6.2. This problem was corrected in later version of MS-DOS.
	
	
	Additional query words: 6.00 6.20 timeout time out msbackup.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
