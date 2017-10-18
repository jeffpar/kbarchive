---
layout: page
title: "Q163508: STOP 0xA in Ntfs.sys During Reboot"
permalink: kb/163/Q163508/
---

## Q163508: STOP 0xA in Ntfs.sys During Reboot

	Article: Q163508
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a STOP 0x0000000A in Ntfs.sys during a reboot after disk corruption
	or after the system has been shut down in a "dirty" state.
	
	CAUSE
	=====
	
	The STOP occurs while NTFS is attempting to mount a partition whose boot sector
	or MFT has become corrupted. One possible cause of corruption that can bring on
	this problem is a "dirty" shutdown, which is when the computer is turned off or
	reset without the system's being shut down first. However, other types of
	corruption can cause this problem. Not all drive corruption will cause this
	problem. In many cases the corruption will simply prevent the drive from being
	mounted, without causing a STOP during boot.
	
	There is no easy way, short of a live debug of the crashed server, to determine
	conclusively if you have encountered this problem. However, one simple test is
	to do a parallel install of Windows NT on the system. If you have encountered
	this problem, the parallel install should show the same stop 0xA in Ntfs.sys.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Identify the partition that is corrupted.
	
	2. Prevent the partition from being mounted and boot Windows NT.
	
	3. Apply the fix described below, reboot Windows NT, and/or re-enable the
	  partition.
	
	MORE INFORMATION
	================
	
	If the corrupted partition is your system or boot partition, you will most
	likely need to reformat the partition, reinstall Windows NT, and restore the
	partition information from a backup, as there will be no way to boot after
	disabling the partition.
	
	There are two methods you can use to identify the corrupted partition and prevent
	it from being mounted (as required by steps 1 and 2 above). Which method you use
	depends upon whether or not the partition is on the same drive as your
	system/boot partition. The two methods are:
	
	1. Remove or disable drives one at a time until the system boots. This method
	  will not work for the drive containing your system or boot partition, but if
	  the corrupted partition is on another drive in the system, removing them one
	  at a time and attempting to boot the system will identify which drive the
	  partition is on, as once it is removed, Windows NT should boot successfully.
	  Once you have successfully booted Windows NT you can apply the fix, shut down
	  the system, re-install or re-enable the drive, and reboot.
	
	2. Use a disk editor to disable the partitions one at a time. If the corrupted
	  partition is on the same drive as your system or boot partition, you will
	  need to boot to an alternative operating system (either MS-DOS or Windows 95
	  will work) and use a disk editor such as Norton Disk Edit to disable the
	  partition. Once the partition is disabled, Windows NT should boot
	  successfully. Then you can apply the fix, reboot and use a partition editor
	  to re-enable the partition, and then restart Windows NT. Disabling the
	  partition is accomplished by changing the system indicator byte to an
	  unsupported file system type not recognized by Windows NT.
	
	After you have disabled the partition and rebooted Windows NT, you can apply the
	fix. The fix corrects an error in NTFS which caused the STOP 0xA to occur when
	the volume was mounted during the boot sequence; however, the corruption that
	caused the error condition to occur will still be there. After the fix has been
	applied you can add back in the drive you removed or use a disk editor to
	re-enable the partition (depending on which of the above options you chose). You
	should then be able to boot into Windows NT and attempt to recover the
	partition. Depending on the extent of the corruption, recovering the partition
	may be as simple as running chkdsk against it or may require you to reformat the
	partition and restore the data from a backup copy.
	
	To replace the Ntfs.sys file using the repair process, follow the instructions in
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q150497
	  TITLE : How to Repair Windows NT System Files Without a CD-ROM Attached
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5,3.51,4.0
	
	=============================================================================
	
