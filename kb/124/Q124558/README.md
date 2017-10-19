---
layout: page
title: "Q124558: DriveSpace Err Msg: MINI.CAB File Is Missing or Damaged..."
permalink: /kb/124/Q124558/
---

## Q124558: DriveSpace Err Msg: MINI.CAB File Is Missing or Damaged...

	Article: Q124558
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error messages when you run DriveSpace to perform an
	operation that requires full restartability:
	
	- Files required to manage your compressed drive(s) are missing on drive
	  <x>. To restore these files, copy the MINI.CAB file from your Windows
	  95 Setup Disk 1 or CD-ROM into your Windows directory. The next time you run
	  DriveSpace, the missing files will be restored.
	
	  ID Number: DRVSPACE575
	
	  -and-
	
	- Windows might not be able to restart this operation if it is interrupted.
	  Check to make sure drive x is not full; you may need as much as 1.5 MB of
	  free space to continue.
	
	  ID Number: DRVSPACE311
	
	CAUSE
	=====
	
	These errors occur when the files in the hidden FAILSAFE.DRV\FAILSAFE directory
	on drive C (or the host for drive C) are missing and DriveSpace cannot find the
	MINI.CAB file in your Windows 95 SYSTEM subdirectory.
	
	These errors can also occur if there is a file named Failsafe.drv in the root
	folder of drive C (or the host for drive C).
	
	RESOLUTION
	==========
	
	Copy the MINI.CAB file from your original Windows 95 distribution media to your
	Windows 95 SYSTEM subdirectory.
	
	NOTE: MINI.CAB is located on the standard 1.44-megabyte (MB) disk 1 of the
	3.5-inch distribution media format (DMF) disk set and can be copied using
	Windows Explorer or at an MS-DOS prompt (using EXTRACT is not necessary). On
	CD-ROM installation media, MINI.CAB is located in the WIN95 directory.
	
	MORE INFORMATION
	================
	
	DriveSpace operations that can prevent Windows from restarting properly if
	interrupted by a power loss or accidental reboot are fully restartable. To
	ensure restartability in these cases, DriveSpace uses a mini-version of Windows
	(a subset of Windows 3.1 also used by Setup).
	
	DriveSpace extracts the mini-version files (from the MINI.CAB file in your
	Windows 95 SYSTEM subdirectory to a hidden FAILSAFE.DRV directory on the
	physical boot drive) before beginning an operation that requires full
	restartability. This ensures that DriveSpace can complete its operation in the
	event of a power loss or accidental reboot.
	
	DriveSpace requires the mini-version of Windows during the following operations:
	
	- Compressing an existing drive that contains Windows files (including the swap
	  file).
	
	- Uncompressing a DriveSpace- or DoubleSpace-compressed drive that contains
	  Windows files (including the swap file).
	
	- Changing the size of a DriveSpace- or DoubleSpace-compressed drive that
	  contains Windows files (including the swap file).
	
	- Changing the estimated compression ratio (ECR) for a DriveSpace- or
	  DoubleSpace-compressed drive that contains Windows files (including the swap
	  file).
	
	You should not delete the FAILSAFE.DRV directory created by DriveSpace unless you
	have a MINI.CAB file in your Windows SYSTEM subdirectory. DriveSpace does not
	delete FAILSAFE.DRV after successfully completing a restartable operation. This
	allows future restartable operations to be completed more quickly.
	
	Additional query words: err msg dxxspace
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
