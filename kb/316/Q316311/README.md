---
layout: page
title: "Q316311: HOW TO: Configure a Mirror Set on Windows NT Server 4.0"
permalink: /kb/316/Q316311/
---

## Q316311: HOW TO: Configure a Mirror Set on Windows NT Server 4.0

{% raw %}

	Article: Q316311
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Configuring a Mirror Set on a Windows NT Server 4.0 Computer
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure a mirror set on a Windows
	NT Server 4.0 computer. A mirror set is a set of two equal-sized partitions that
	are exact duplicates of each other, and which are located on two separate
	physical disks. When data is written to the mirror set, it is written to both
	partitions. Mirror sets can be very useful because provide a very high level of
	fault tolerance.
	
	Requirements
	------------
	
	- A computer (that meets the requirements listed on the Hardware Compatibility
	  List) on which Windows NT Server 4.0 is installed.
	- One blank hard disk, that is at least as large as the partition you want to
	  mirror, must be installed in the computer. If you are configuring a mirror
	  set of the boot partition, the disk should be identical (same manufacturer,
	  model number, and size) to the disk that contains the boot partition.
	
	Configuring a Mirror Set on a Windows NT Server 4.0 Computer
	------------------------------------------------------------
	
	You can use Disk Administrator to configure a mirror set on a Windows NT Server
	4.0-based computer. Any partition can be mirrored to another disk of equal or
	larger size. You must be logged on as an administrator, or as a user that has
	administrator privileges to configure a mirror set. To configure a mirror set:
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click Disk Administrator.
	
	  If a Disk Administrator dialog box appears, indicating that this is the first
	  time that Disk Administrator has been run, click OK.
	
	  If a Confirm dialog box appears, click Yes to write a signature to the disk.
	  If additional Confirm dialog boxes appear, click Yes in each one.
	
	2. In the Disk Administrator dialog box, click the partition that you want to
	  mirror. Press and hold CTRL while you click the area that is marked Free
	  Space on the additional disk that will be used for the mirror set, and then
	  release the CTRL key.
	
	3. In the Disk Administrator dialog box, click Establish Mirror on the Fault
	  Tolerance.
	
	  If a Disk Administrator dialog box is displayed, indicating that this is a
	  mirror set of the boot partition, click OK.
	
	4. In the Disk Administrator dialog box, click Commit Changes Now on the
	  Partition menu. In the Confirm dialog box, click Yes.
	
	  If another Confirm dialog box is displayed, click Yes. In the Disk
	  Administrator dialog box, click OK.
	
	  If another Disk Administrator dialog box is displayed, click OK to shut down
	  and restart your computer.
	
	5. Because your computer's disk configuration has changed, it is recommended
	  that you use the Rdisk.exe utility to create a new Emergency Repair disk.
	
	  In addition, if you have mirrored the partition that contains your Windows NT
	  Server 4.0 system files (sometimes called the "boot partition"), it is
	  recommended that you create a fault-tolerance boot disk.
	
	REFERENCES
	==========
	
	For additional information about how to use Rdisk.exe to create a new Emergency
	Repair disk, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q158866 How to Manually Create an Emergency Repair Disk
	
	For additional information about how to create a fault-tolerance boot disk, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119467 How to Create a Bootable Disk for an NTFS or FAT Partition
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
