---
layout: page
title: "Q127134: Windows NT Setup: SCSI Boot Disk Size Limitations"
permalink: /kb/127/Q127134/
---

## Q127134: Windows NT Setup: SCSI Boot Disk Size Limitations

{% raw %}

	Article: Q127134
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT on a computer with a large SCSI boot
	disk, Windows NT Setup may not recognize the primary active partition. This
	problem can occur when the boot disk is a single physical disk or when multiple
	physical disks are represented as one large hard disk by the SCSI drive hardware
	RAID configuration.
	
	CAUSE
	=====
	
	Windows NT Setup does not recognize boot disks, with more than 1024 cylinders.
	
	NOTE: The size of 1024 cylinder disks vary, but typically, they hold one to two
	gigabytes of data.
	
	WORKAROUND
	==========
	
	If your SCSI host adapter can be configured to perform disk geometry to system
	BIOS translation, you can install Windows NT on a boot disk with more than 1024
	cylinders. To do so, enable controller translation and repartition any existing
	partitions. If necessary, low level format the hard disk before repartitioning.
	Check with your hardware manufacture for specific advice and details.
	
	If your controller does not support disk translation, keep the boot disk size
	within the 1024 cylinder limit or purchasing an adapter capable of disk
	translation.
	
	For more information about the configuration of hard disk drive parameters, query
	on the following words in the Microsoft Knowledge Base:
	
	  WINDOWS NT and BOOT and PROCESS and IDE
	
	MORE INFORMATION
	================
	
	Windows NT Setup does not recognize an boot disk with more than 1024 cylinders
	because the Windows NT boot process must initially rely on the system BIOS INT
	13 calls (which recognize 1024 or fewer cylinders on the primary active
	partition). The initial computer boot environment is not operating system
	specific, and defines the boot parameters before the Windows NT specific boot
	files (NTLDR and NTDETECT) are loaded. Windows NT cannot change constraints
	established by the hardware and firmware routines.
	
	Additional query words: 3.10 prodnt constraints limitation geometry gigabyte
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
