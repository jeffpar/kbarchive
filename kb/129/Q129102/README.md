---
layout: page
title: "Q129102: Recovering Windows NT After a Boot Failure on an NTFS Drive"
permalink: /kb/129/Q129102/
---

## Q129102: Recovering Windows NT After a Boot Failure on an NTFS Drive

{% raw %}

	Article: Q129102
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
	
	SUMMARY
	=======
	
	When Windows NT is installed on an Windows NT file system (NTFS) formatted boot
	drive, recovering from a boot failure can be difficult because you cannot access
	the NTFS partition without a running Windows NT. If you have both Windows NT 3.1
	and 3.5 installed, recovery is even more difficult because Windows NT 3.5 NTFS
	is not compatible with Windows NT 3.1.
	
	This article covers a few boot-failure scenarios, and how to recover from them,
	or at least gain access to the partition. This article does not describe how to
	solve many specific problems, instead it is a general guideline on methods of
	gaining access to an NTFS boot partition.
	
	MORE INFORMATION
	================
	
	Simple (Non-Setup Related) Boot Failures
	----------------------------------------
	
	If you have been running Windows NT successfully, and it fails to boot, you can
	use the following simple procedure to try and recover from the problem:
	
	1. Verify that the problem has not been caused by changes or failures in the
	  hardware. Loose cables, bad cables, new cards, new drives, and even new
	  settings on existing controllers can all cause boot problems.
	
	2. If Windows NT failed to boot after you installed a new device driver, try
	  pressing the spacebar at the OSLOADER screen and selecting the Last Known
	  Good option. If the boot process failed before you logged on to the system,
	  this should correct the problem.
	
	3. Try creating an NTFS boot disk as described in the article Q119467: Creating
	  a Boot Disk for an NTFS Partition. This will generally only help in a
	  situation where your basic boot files (NTLDR, NTDETECT.COM, NTBOOTDD.SYS) or
	  your BOOT.INI file are corrupted or incorrect.
	
	4. Boot from the Windows NT Setup disk (or run SETUPLDR on a RISC-based machine)
	  and run the emergency repair process. For Windows NT 3.1, this requires an
	  emergency repair disk, for Windows NT 3.5 an emergency repair disk may not be
	  required but can help if the repair directory on the hard drive is damaged.
	  This will solve most boot problems that involve bad system files or a
	  corrupted registry.
	
	If none of the above steps resolves the problem, or if you do not have an
	emergency repair disk, you may need to try one of the more drastic steps listed
	at the end of the article.
	
	Setup Related Boot Failures
	---------------------------
	
	If you were in installing Windows NT (either a new installation or upgrading from
	Windows NT 3.1 to 3.5) and Windows NT failed to boot, and Setup was interrupted,
	the recovery steps listed above will generally not work (unless you aborted
	setup at a very early stage). If you were upgrading a Windows NT 3.1
	installation to Windows NT 3.5, avoid using an emergency repair disk created by
	Windows NT 3.1 if you reached the point in setup where it was copying files to
	the drive (as that is when Setup updates your file system to the 3.5 version of
	NTFS). Assuming that the failure was not some easily correctable problem (bad
	installation media, incompatible or malfunctioning hardware) there are two
	methods you can use to gaining access to your drive and data:
	
	1. If you have enough free disk space, try installing Windows NT again into a
	  different directory. This will sometimes work when an upgrade failed, and in
	  any situation where you have to get access to the data but have been unable
	  to get your current installation of Windows NT to boot. This also allows you
	  to fix boot problems that involve bad drivers or other configuration problems
	  that the above methods did not help with. In many cases you can simply boot
	  the alternate Windows NT installation and delete the bad driver in question
	  (unless the driver is required to booting the system).
	
	2. If all other attempts to gain access to an NTFS partition have failed,
	  including installing Windows NT to a new directory, try is removing the hard
	  disk drive and install it in a machine that is running Windows NT. The
	  machine you move the drive to must be running a version of Windows NT that is
	  equal to or greater than the one that failed. This allows for changes in the
	  file system drivers. Alternatively, you can install a new boot drive in the
	  machine that is failing to boot Windows NT, and then install Windows NT on
	  that drive. In either case, when you are moving SCSI drives from one machine
	  to another, make sure that both machines use SCSI controllers made by the
	  same manufacturer, and are configured the same way. Different controllers can
	  use different translation schemes and different settings.
	
	In any situation, it may be best to simply re-install and restore from a recent
	backup. Most of the above instructions are for situations where you do not have
	a recent backup and must either get your current copy of Windows NT working or
	gain access to important data. None of the above methods should be a considered
	a replacement for frequent backups or other methods of ensuring data
	recoverability (such as strip sets, mirror drives, etc.).
	
	Additional query words: prodnt boot recover stop blue screen hang trap hung tshoot floppy
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
