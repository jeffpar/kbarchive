---
layout: page
title: "Q246799: Drive in Volume Set Is Missing After You Use Repair Process"
permalink: /kb/246/Q246799/
---

## Q246799: Drive in Volume Set Is Missing After You Use Repair Process

{% raw %}

	Article: Q246799
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run a repair process on a Microsoft Windows NT Server 4.0-based
	computer that is configured with a volume set, one of the drives may not appear
	in Windows Explorer. Also, Disk Administrator may show the drive with or without
	an assigned drive letter and may list it as Unknown.
	
	All configurations that use fault tolerance with either file allocation table
	(FAT) or NTFS file system volumes may exhibit these symptoms.
	
	CAUSE
	=====
	
	This behavior can occur when you use repair information from your hard disk
	drive instead of from an updated Emergency Repair Disk, and the information on
	the hard drive does not include the latest fault tolerance configuration.
	
	RESOLUTION
	==========
	
	To resolve this issue, please refer to the instructions in the following
	articles in the Microsoft Knowledge Base:
	
	  Q131658 Use Ftedit.exe to Recover Fault Tolerant Disk Configuration.
	
	  Q149927 Ftedit.exe: What You Can and Can't Use It For
	
	MORE INFORMATION
	================
	
	When you run the Rdisk utility and choose the Update Repair Info option, the
	system writes up-to-date information to the %SystemRoot%\Repair folder on the
	hard disk drive, and then it prompts you to update or create the ERD. If you
	choose Create Repair Disk, the system does not update the repair information
	before copying it directly to the ERD.
	
	It is also important to make sure that Ftdisk is set to a start value of Boot and
	that it is started. Ftdisk is the device driver that handles input and output
	for volume sets, stripe sets, mirror sets, and stripe sets with parity. If the
	drive still appears as Unknown in Disk Administrator after you restore disk
	information, use the Devices tool in Control Panel to check the start value of
	Ftdisk.
	
	Additional query words: Emergency damage
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
