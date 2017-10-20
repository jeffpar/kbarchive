---
layout: page
title: "Q82543: SMARTDrive 4.0: Third-Party Disk Partitioning Software"
permalink: /kb/082/Q82543/
---

## Q82543: SMARTDrive 4.0: Third-Party Disk Partitioning Software

{% raw %}

	Article: Q82543
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive (SMARTDRV.EXE) version 4.0, which comes with Microsoft Windows
	operating system version 3.1, is compatible with third-party disk partitioning
	and compression software such as Disk Manager, SpeedStor, SuperStor, and
	Stacker.
	
	MORE INFORMATION
	================
	
	SMARTDrive VERSION 4.0 COMPATIBILITY
	------------------------------------
	
	Stacker
	-------
	
	SMARTDrive has built-in detection for STAC Electronics' Stacker version 2.0. As a
	result, SMARTDrive does not cache a stacked drive and receives the following
	message:
	
	  Unable to use a disk cache on the specified drive
	
	SMARTDrive does not detect Stacker versions 1.x, and these "stacked" drives can
	be cached. It is NOT recommended to cache a stacked drive.
	
	SMARTDrive may be confused when a drive is swapped with the Stacker SSWAP
	command. Microsoft recommends loading SMARTDrive in the AUTOEXEC.BAT after all
	Stacker operations (such as SSWAP) have been performed.
	
	SuperStor
	---------
	
	SMARTDrive must be loaded after all SuperStor software. SMARTDrive must be
	specifically told NOT to cache SuperStor drives unless version 2.04 or later of
	the SuperStor driver is being used.
	
	You can specifically disable caching on all SuperStor drives, as follows
	
	  c:\windows\smartdrv.exe d- e-
	
	where drives D and E are SuperStor drives.
	
	SMARTDrive is not compatible with SuperStor's Create Mountable Drive, Mount, and
	Dismount commands. Do not use these commands if SMARTDrive is loaded.
	
	Caching a SuperStor-compressed drive with SMARTDrive 4.0 results in read-write
	errors from the SuperStor drive if the SuperStor driver is earlier that version
	2.04.
	
	SuperStor 1.3 is not compatible with SMARTDrive version 4.0. SuperStor version
	2.0 should work with SMARTDrive; however, it is advisable to disable caching for
	the SuperStor partitions.
	
	According to SuperStor, using version 2.04 with SMARTDrive 4.0 results in the
	correct drives being cached (that is, the uncompressed drive will be cached and
	the compressed drive will be not cached).
	
	Note: The information about SuperStor version 2.x has been provided by SuperStor,
	and has not been tested or confirmed by Microsoft.
	
	SpeedStor
	---------
	
	If SMARTDrive produces errors reading or writing to a Storage Dimensions'
	SpeedStor drive, then modify the SSTOR.SYS line in the CONFIG.SYS file:
	
	  DEVICE=C:\SSTOR.SYS /VIRTUAL
	
	SSTOR.SYS must be at least version 6.4 to be used with SMARTDrive. An upgrade to
	this version is available from Storage Dimensions.
	
	Disk Manager (DMDRVR.BIN)
	-------------------------
	
	DMDRVR.BIN must be the first line in the CONFIG.SYS file (before HIMEM.SYS or
	other memory managers). If DMDRVR.SYS is located in the CONFIG.SYS file instead
	of DMDRVR.BIN, then it will be necessary to upgrade. The upgrade is available
	from either ONTRACK Computer Systems or on the retail MS-DOS 5.0 Upgrade.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 compression stacked 1024 smart drive on track super store stor speed speedstore superstore
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
