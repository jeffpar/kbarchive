---
layout: page
title: "Q151358: Disk Administrator Does Not Set System Partitions Correctly"
permalink: /kb/151/Q151358/
---

## Q151358: Disk Administrator Does Not Set System Partitions Correctly

{% raw %}

	Article: Q151358
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a dual-boot configuration, when you delete and re-create Windows NT file
	system (NTFS) partitions on the hard disk, extra drive letters appear when you
	boot to MS-DOS.
	
	CAUSE
	=====
	
	This is caused by Disk Administrator not setting the partition type correctly
	(the partition should be 06 for file allocation table [FAT] and 07 for NTFS).
	When the computer starts, the BIOS scans the master boot record (MBR), and when
	it finds the value 06 for the partition type, it assigns a drive letter.
	
	RESOLUTION
	==========
	
	You will need a sector editor such as Windows NT Diskedit or Norton Diskedit to
	resolve the issue. Using the sector editor, change the Partition type from 06 to
	07. An example is shown below using Windows NT diskedit:
	
	1. Start Windows NT diskedit. On the file menu, select Open and type:
	
	  "\\.\physicaldriveX" (without the quotation marks)
	
	  where X = the number in which the disk appears in Disk Administrator.
	
	2. On the Read menu, select Sectors and type 0 for the sector and 1 for the Run
	  length. This will take you to the MBR, which contains the Partition table.
	
	3. Go to line 01C0, which contains the partition type for the first partition.
	  These lines are arranged according to the order of the partitions; the first
	  partition is 01C0, the second partition is 01D0, the third partition is 01E0,
	  and so on. You will see something similar to the example below:
	
	NOTE: this is a partial view of what will be on your screen.
	
	  01C0 01 00 06 FE....
	  01D0 01 0D 07 FE....
	  01E0 01 1A 06 FE....
	  01F0 00 00 00 00....
	
	  The first partition (01C0) is FAT, and the partition type listed is 06, which
	  means FAT, so this entry is correct. The second partition (01D0) is NTFS, the
	  partition type listed is 07, which is also correct. The third partition
	  (01E0) is NTFS but the partition type listed is 06, or FAT. This is the entry
	  you must change. Move your cursor to the number 6 and change it to 7.
	
	4. Go to the Write menu select Write it, and close Windows NT Diskedit. Boot to
	  MS-DOS and verify the drive letter is removed.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
