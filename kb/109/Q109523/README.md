---
layout: page
title: "Q109523: Windows NT Resource Kit Repair Utility Error"
permalink: /kb/109/Q109523/
---

## Q109523: Windows NT Resource Kit Repair Utility Error

	Article: Q109523
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run REPAIR /C to create a new Emergency Repair Disk, the utility starts
	copying files to disks and may successfully create one or more disks. At some
	point in the process, it starts prompting for new disks, reading them for a few
	seconds without putting any files on the disk and then asking for another disk.
	This continues as long as you insert new disks.
	
	CAUSE
	=====
	
	This problem occurs when a file that is too large for the floppy disk in use is
	put into the repair directory when you run REPAIR /S or REPAIR /S /X. The file
	in question could be one of your registry hives that has grown large or any file
	that has been placed in the %SystemRoot%\SYSTEM32 subdirectory since the
	original Emergency Repair Disk was created.
	
	RESOLUTION
	==========
	
	Currently, the only way to work around this problem is to locate the file in the
	REPAIR directory that is too large and delete if from the directory before
	running REPAIR /C. However, this solution does not work if the file in question
	is one of the registry hives.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
