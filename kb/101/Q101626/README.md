---
layout: page
title: "Q101626: Windows NT Removable Media Requirements and Limitations"
permalink: /kb/101/Q101626/
---

## Q101626: Windows NT Removable Media Requirements and Limitations

{% raw %}

	Article: Q101626
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Windows NT supports most removable hard disks and magnetic-optical
	disk drives. These disks are treated as hard disks because they must
	be partitioned and they are assigned a drive letter. However, Windows
	NT does not support write-once disk drives.
	
	Windows NT supports removable media subject to the following
	restrictions:
	
	- A removable hard disk can have only one primary partition. Extended or
	  logical partitions are not supported.
	
	- Windows NT supports only the Windows NT filesystem (NTFS) and
	  MS-DOS-compatible (FAT) file system on removable media.
	
	- The user cannot assign the drive letter for the device.
	
	- Removable disks are not supported in a fault tolerant manner.
	
	- You can install the Windows NT system files (the files contained in the WINNT
	  directory) on a removable disk. However, the NT boot files, such as NTLDR and
	  NTDETECT.COM, must be on the hard disk drive (fixed disk).
	
	- If the paging file is located on the device or if the device has the NTFS
	  installed, the media is locked until the system is shutdown.
	
	- The FAT file system locks the media while it is in use and unlocks it after
	  approximately 10 seconds of inactivity. NOTE: Windows NT supports a 20.8MB
	  "floptical" disk as a floppy disk, not as a hard disk. Each write to a floppy
	  disk is performed on a write-through cache basis and you can remove a floppy
	  disk as long as the drive light is not on.
	
	Additional query words: prodnt iomega bernoulli WORM
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
