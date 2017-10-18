---
layout: page
title: "Q195211: Windows NT Setup Detects Partitions as Unformatted or Damaged"
permalink: kb/195/Q195211/
---

## Q195211: Windows NT Setup Detects Partitions as Unformatted or Damaged

	Article: Q195211
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT, Setup may not correctly detect formatted
	partitions and may display them as unformatted or damaged.
	
	CAUSE
	=====
	
	This issue can occur if all of the following conditions exist:
	
	- The combined size of the primary and extended partitions on your hard disk
	  exceeds 8 gigabytes (GB).
	
	- You used the Fdisk.exe tool included with Microsoft Windows 98 to partition
	  the hard disk.
	
	- You used the Windows 98 Fdisk.exe tool to create a logical drive that extends
	  into the area that exceeds 8 GB.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, ensure that the combined size of the partitions
	(the primary and extended partitions) is 8 GB or less, run Setup again, and then
	use Disk Administrator to reclaim any unused hard disk space. To do so, use the
	following steps:
	
	1. For information about using the FDISK command to partition your hard disk,
	  see the "Repartitioning Your Hard Disk" and "Formatting Your Hard Disk"
	  sections in the following article in the Microsoft Knowledge Base:
	
	  Q106423 Repartitioning Your Hard Disk to Upgrade to 6.0 or 6.2
	
	  NOTE: You can use the Windows 98 Startup disk in place of the MS-DOS 6.0, 6.2,
	  6.21, or 6.22 disks mentioned in the article.
	
	2. Run Setup again.
	
	3. After Windows NT is installed, use Disk Administrator to reclaim any unused
	  space on the hard disk:
	
	  a. Click Start, point to Programs, point to Administrative Tools, and then
	     click Disk Administrator. If this is the first time you have started Disk
	     Administrator, click OK, and then click Yes.
	
	
	  b. Click the unused partition that you want to reclaim, right-click the
	     unused partition, and then click Create.
	
	  c. Click Yes.
	
	  d. In the Create Partition Of Size box, type the size of the partition you
	     want, and then click OK.
	
	  e. On the Partition menu, click Commit Changes Now, and then click Yes.
	
	  f. Click OK, and then click OK.
	
	  g. Right-click the partition you configured in steps B-F, and then click
	     Format.
	
	  h. Click Start, and then click OK.
	
	  i. When the format process is complete, click OK, click Close, and quit Disk
	     Administrator.
	
	MORE INFORMATION
	================
	
	For information about partition types and Windows NT Setup, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q127851 Problems Access FAT16 Drives Larger Than 2 GB
	
	  Q151414 Windows 95 Partition Types Not Recognized by Windows NT
	
	  Q69912 MS-DOS Partitioning Summary
	
	Additional query words: free extra
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
