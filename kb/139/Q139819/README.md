---
layout: page
title: "Q139819: Missing and Multiple Drive Letters Assigned To Partitions"
permalink: kb/139/Q139819/
---

## Q139819: Missing and Multiple Drive Letters Assigned To Partitions

	Article: Q139819
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.51 on a hard disk partition greater than 9, the
	following problems may occur:
	
	- The first primary partition is not assigned a drive letter.
	
	- The Windows NT operating system partition is assigned 2 drive letters. (Drive
	  C: and the letter that would be normally be assigned to partition L:)
	
	- From File Manager and from the MS-DOS prompt, both drive letters C: and L:
	  address the same Windows NT operating system partition.
	
	- If you assign a drive letter to the first primary partition using Disk
	  Administrator, you can then use the first primary partition in File Manager.
	
	- When you reboot the system, you lose the drive letter assigned to the first
	  primary partition and must re-assign it again.
	
	Following is an example of the above symptoms:
	
	                   [logical drives in extended partition]
	
	  Primary1      L2  L3  L4  L5  L6  L7  L8  L9  L10  <-- operating system
	  (unassigned)  D:  E:  F:  G:  H:  I:  J:  K:  C:
	
	NOTE: Both File Manager and the MS-DOS prompt address the Windows NT operating
	system partition by using drive letters C: and L: while the 1st primary
	partition is inaccessible unless you assign a drive letter to the partition
	using disk administrator.
	
	RESOLUTION
	==========
	
	- Move or re-install Windows NT into a partition numbered less than ten.
	
	  -or-
	
	- Delete partitions until the operating system partition is partition number
	  nine or less. Change the arc path in the BOOT.INI file to reflect the new
	  partition number before you reboot. The arc path looks like this:
	
	  Multi(0)Disk(0)Rdisk(0)partition(9)\winnt35
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
