---
layout: page
title: "Q316304: HOW TO: Configure a Stripe Set with Parity in Windows NT Server"
permalink: /kb/316/Q316304/
---

## Q316304: HOW TO: Configure a Stripe Set with Parity in Windows NT Server

{% raw %}

	Article: Q316304
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- How to Configure a Stripe Set with Parity on a Windows NT Server 4.0-Based
	  Computer
	- How to Format the Stripe Set with Parity
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure a stripe set with parity on
	a Windows NT Server 4.0-based computer. A stripe set with parity consists of
	equal-sized areas of free space on at least 3 disks and not more than 32 disks,
	which are combined into a single, fault-tolerant volume. When you configure a
	stripe set with parity, the computer can store a larger amount of data than it
	can if you use a single disk. You also experience faster read and write speeds
	when you configure a stripe set with parity instead of a single disk volume.
	
	Requirements
	------------
	
	To complete this procedure, you must use the following minimum system
	configuration:
	
	- A computer that is running Windows NT Server 4.0 (the computer must meet the
	  requirements that are listed on the Hardware Compatibility List [HCL]).
	
	- A computer that contains at least 3 disks and not more than 32 blank disks of
	  equal size. Confirm that these disks are not partitioned.
	
	How to Configure a Stripe Set with Parity on a Windows NT Server 4.0-Based Computer
	-----------------------------------------------------------------------------------
	
	You can use Disk Administrator to configure a stripe set with parity on a Windows
	NT Server 4.0-based computer. If a single disk in a stripe set with parity stops
	working, you can regenerate all of the data so that you do not lose any data.
	However, if two or more disks in the stripe set with parity do not work, all of
	the data on the stripe set with parity is lost.
	
	NOTE: You must be logged on either as an administrator or as a user that has
	administrator privileges to complete the following procedure.
	
	To configure a stripe set with parity:
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click Disk Administrator.
	
	  If a Disk Administrator dialog box is displayed that indicates that this is
	  the first time that you have run Disk Administrator, click OK. If a Confirm
	  dialog box is displayed, click Yes to write a signature to the disk. If
	  additional Confirm dialog boxes are displayed, click Yes in each one.
	
	2. Click the area marked "Free Space" on the first disk that you want to use in
	  the stripe set with parity, and then press and hold down the CTRL key while
	  you click the area marked "Free Space" on each additional disk that you want
	  to use in the stripe set with parity.
	
	  NOTE: You must select at least three areas of free space.
	
	3. Click "Create Stripe Set with Parity" on the Fault Tolerance menu.
	
	4. Type a number that represents the total amount of disk space that you want
	  this stripe set with parity to use (in megabytes [MB]), and then click OK.
	
	  NOTE: The minimum size and the maximum size for the stripe set are displayed
	  in this dialog box.
	
	5. Click Commit Changes Now on the Partition menu, and then click Yes in the
	  Confirm dialog box.
	
	  If another Confirm dialog box is displayed, click Yes, and then click OK in
	  the Disk Administrator dialog box. If another Disk Administrator dialog box
	  is displayed, click OK to restart your computer, log on as an administrator
	  when the computer restarts, and then restart Disk Administrator.
	
	How to Format the Stripe Set with Parity
	----------------------------------------
	
	After you create a stripe set with parity on a Windows NT Server 4.0-based
	computer, you must format the stripe set with parity before you can use it to
	store data. To do so:
	
	1. In the Disk Administrator dialog box, click the area marked Unknown on any
	  disk in the stripe set with parity, and then click Format on the Tools menu.
	
	2. Click the file system that you want to use for the stripe set with parity in
	  the File system box.
	
	  NOTE: If the size of the stripe set with parity is larger than 4096 MB, you
	  must click NTFS.
	
	3. Type a volume label for the stripe set with parity in the Volume label box,
	  and then click to select the Quick Format check box if you want to perform a
	  quick format.
	
	4. If you choose NTFS as your file system, and you want to enable compression on
	  the stripe set with parity, click to select the Enable Compression check box,
	  and then click Start.
	
	5. Click OK, click OK, and then click Close.
	
	6. Because your computer's disk configuration has changed, it is recommended
	  that you use the Rdisk.exe utility to create a new Emergency Repair disk.
	
	REFERENCES
	==========
	
	For more information about how to manage fault-tolerant volumes on a Windows NT
	Server 4.0-based computer, refer to Module 7 of Microsoft Official Curriculum,
	Course Number 922, "Supporting Microsoft Windows NT 4.0 Core Technologies."
	
	For more information about how to use Rdisk.exe to create a new Emergency Repair
	disk, see Module 17 of Microsoft Official Curriculum, Course Number 922,
	"Supporting Microsoft Windows NT 4.0 Core Technologies."
	
	For additional information about how to use Rdisk.exe to create a new Emergency
	Repair disk, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q158866 How to Manually Create an Emergency Repair Disk
	
	For additional information about a stripe set with parity, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q113933 Disk Striping and Disk Striping with Parity in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
