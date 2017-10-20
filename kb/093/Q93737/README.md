---
layout: page
title: "Q93737: Using OnTrack's Disk Manager 5.1 with Windows 3.1"
permalink: /kb/093/Q93737/
---

## Q93737: Using OnTrack's Disk Manager 5.1 with Windows 3.1

{% raw %}

	Article: Q93737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses using OnTrack's Disk Manager version 5.1 with Microsoft
	Windows version 3.1.
	
	MORE INFORMATION
	================
	
	Compatibility with SmartDrive version 4.0
	-----------------------------------------
	
	According to OnTrack Technical Support, Disk Manager version 5.1 is compatible
	with SmartDrive version 4.0, although there may be some problems using it with
	SmartDrive's Double_Buffer command, depending upon your hardware configuration:
	
	- System with no SCSI adapter
	
	  OnTrack recommends removing the
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE
	     /DOUBLE_BUFFER
	
	  line in the CONFIG.SYS on all systems that do not have a SCSI host adapter.
	
	- System with a SCSI adapter, but no drives with more than 1024 cylinders
	
	  OnTrack recommends adding the line
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE
	     /DOUBLE_BUFFER+
	
	  in order to support partitions larger than 32 MB with MS- DOS versions 3.3 and
	  earlier. If the plus sign is omitted, SmartDrive will fail.
	
	- System with a SCSI adapter and drives with more than 1024 cylinders
	
	  OnTrack recommends removing the SmartDrive DEVICE= statement (even if it is
	  using the Double_Buffer command) in the CONFIG.SYS file on all systems with a
	  SCSI adapter and drives with more than 1024 cylinders. It should be noted
	  that with this configuration Windows will not run in 386 enhanced mode.
	
	Compatibility with Windows 3.1 Swap Files
	-----------------------------------------
	
	According to OnTrack, Disk Manager 5.1 is compatible with Windows 3.1 swap files
	but you may be prevented from creating a permanent swap file in the following
	situations:
	
	- Head or sector-per-track mismatch (unless IDE)
	
	  If the number of heads and sectors per track specified by your CMOS drive type
	  entry does not match the actual number of heads and sectors per track of your
	  drive, your configuration prevents the use of a permanent swap file.
	  Resolving this conflict requires that you reinstall your drive and will
	  likely result in lost disk space. If you must use a permanent swap file,
	  OnTrack Technical Support can provide suggestions on reconfiguring your
	  system to allow it.
	
	- Large partitions with MS-DOS version 3.3 and earlier
	
	  If you are using MS-DOS 3.3 or earlier and have a partition larger than 32 MB,
	  you cannot use a permanent swap file. To use a permanent swap file with your
	  system, you must either upgrade to MS-DOS 4.0 or later and reinstall your
	  system or make all partitions 32 MB or less and reinstall with your current
	  version of MS-DOS.
	
	- Drives with more than 1024 cylinders
	
	  Permanent swap files can be accessed by Windows only if they are created
	  within the first 1024 cylinders of your drive. Make sure you create your swap
	  file on a partition that contains 1024 cylinders or less. Otherwise, Windows
	  will issue a corrupt swap file error when started. If you have a drive with
	  more than 1024 cylinders, you need to manually enable permanent swap file
	  support by modifying the DMDRVR device statement in your CONFIG.SYS file to
	  include a /P option as shown below:
	
	  device=c:\dmdrvr.bin /p
	
	If you have problems with corrupt swap file errors when using the /P option, it
	is likely that your drive partition is not located within the first 1024
	cylinders.
	
	For additional information, call OnTrack Technical Support.
	
	Disk Manager is manufactured by OnTrack Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
