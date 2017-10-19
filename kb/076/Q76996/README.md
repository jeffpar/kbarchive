---
layout: page
title: "Q76996: Creating Backup Disks of the MS-DOS 5 Upgrade"
permalink: /kb/076/Q76996/
---

## Q76996: Creating Backup Disks of the MS-DOS 5 Upgrade

	Article: Q76996
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the steps for creating backup copies of the MS-DOS 5
	Upgrade disks.
	
	The upgrade disks are shipped in two formats:
	
	- Six 360K 5.25-inch disks
	
	- Three 720K 3.5-inch disks
	
	Per the Microsoft Software Licensing Agreement, one copy of the MS-DOS 5 Upgrade
	is required for each computer on which it is installed.
	
	MORE INFORMATION
	================
	
	To Back Up 5.25-inch Disks to 5.25-inch Disks
	---------------------------------------------
	
	Six 5.25-inch blank disks (formatted or unformatted) are required for this
	procedure.
	
	1. Boot the computer with the current version of DOS.
	
	2. Insert disk 1 in drive A.
	
	3. Insert blank disk in drive B (if two 5.25-inch floppy disk drives are
	  available).
	
	4. Move to the C: drive root directory (C:\>), or to the directory on the
	  hard drive containing the MS-DOS files.
	
	5. Use the DISKCOPY command to copy the contents of the disks, as follows:
	
	  diskcopy a: a: (for a single floppy drive)
	
	  -or-
	
	  diskcopy a: b: (for two 5.25-inch 360K floppy drives)
	
	6. Repeat steps 3-6 for the six Upgrade disks.
	
	The DISKCOPY command will copy the the volume label of the Upgrade disks in
	addition to the disk contents.
	
	DISKCOPY requires that the source and destination disk have the same format.
	
	The COPY and XCOPY commands can also be used to backup the disks. The volume
	label is not copied with these commands.
	
	Note: The volume label from the Upgrade disk is required on the corresponding
	backup disks. There are two ways to create a volume label:
	
	- When formatting a disk, you can enter the volume label.
	
	- If a disk is already formatted, you can use the LABEL command:
	
	  label [drive]:
	
	  (Where [drive] is the location of the disk to be labeled.)
	
	The format for the volume label is DISK followed by six spaces, then the number
	of the disk. For example, the volume label for disk 1 is:
	
	  Disk      1
	
	To Back Up 3.5-inch Disks to 3.5-inch Disks
	-------------------------------------------
	
	Three 3.5-inch blank disks are required.
	
	To back up 3.5-inch disks, follow steps 1-6 above (the same procedure is used).
	
	To Back Up 5.25-inch Disks to 3.5-inch Disks
	--------------------------------------------
	
	These steps assume that drive A is 5.25-inch and drive B is 3.5-inch. Six
	3.5-inch formatted blank disks are required.
	
	1. Boot your computer with the current version of DOS.
	
	2. Insert disk 1 in drive A.
	
	3. Insert a blank formatted disk in drive B.
	
	4. Move to the drive C root directory (C:\>) or to the directory on the hard
	  drive containing the MS-DOS files.
	
	5. Enter the following at the command prompt:
	
	  " copy a:*.* b:" (without the quotation marks)
	
	  (The XCOPY command may also be used.)
	
	6. Repeat steps 2-5 for the remaining Upgrade disks.
	
	Note: The volume label from the upgrade disk is required on the corresponding
	backup disk.
	
	For additional information regarding the Microsoft MS-DOS 5.0 Upgrade License
	Agreement, please refer to the License card enclosed with the Upgrade package.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
