---
layout: page
title: "Q130376: Installing Windows NT On a Caching SCSI Controller"
permalink: /kb/130/Q130376/
---

## Q130376: Installing Windows NT On a Caching SCSI Controller

{% raw %}

	Article: Q130376
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 3.5 on a Windows NT file system (NTFS) partition
	using a SCSI Host Adapter with an onboard cache, Windows NT may not get
	installed correctly. After the initial installation completes the system reboots
	for the first time and then tries to convert the FAT partition to NTFS. The
	conversion appears to take place correctly and then reboots a second time. The
	system continually reboots itself.
	
	
	CAUSE
	=====
	
	When the conversion from FAT to NTFS takes place, the SCSI controller caches
	information about the converted partition (in this case NTFS). When the computer
	is rebooted, the SCSI controller is supposed to write status information to the
	disk, indicating that it is now an NTFS partition. Some computers, such as the
	Intel P90 PCI, issue a hard reset when the computer is rebooted. This flushes
	the partition status information from the controller's cache before it is
	written to the disk. Because the data in the cache is lost, the Windows NT
	continues to try to convert the FAT drive to NTFS after the computer is
	rebooted.
	
	WORKAROUND
	==========
	
	In some cases this problem can be avoided by either disabling the SCSI onboard
	cache or by physically removing it. The cache for some controllers may need to
	remain enabled. In particular, on some controllers that support hardware RAID,
	disabling cache is not possible. In that case, the only workaround is to install
	Windows NT as FAT on the boot drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: 3.51 prodnt scsi install
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
