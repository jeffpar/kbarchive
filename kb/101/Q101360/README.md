---
layout: page
title: "Q101360: MS-DOS Err Msg: DoubleSpace Has Used All the Memory..."
permalink: kb/101/Q101360/
---

## Q101360: MS-DOS Err Msg: DoubleSpace Has Used All the Memory...

	Article: Q101360
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	When you try to create or mount a DoubleSpace drive, you may receive the
	following error message:
	
	  DoubleSpace has used all the memory reserved by the settings in the Options
	  dialog box. To enable DoubleSpace to allocate more memory, you should restart
	  your computer now.
	
	  Do you want to restart your computer now?
	
	Under MS-DOS 6.22 you may receive the following error message:
	
	  Not enough MEMORY to allocate more drives for Dblspace or Drvspace need to
	  reboot and quit other applications?
	
	Restarting your computer does not help--you still cannot mount more the drive.
	
	CAUSE
	=====
	
	This error occurs if you try to compress or mount more drives than are specified
	by the Number of Removable-Media Drives setting in the DoubleSpace Options
	dialog box, or if the total number of mounted drives is greater than 15.
	
	The Number of Removable-Media Drives setting specifies how much memory
	DoubleSpace reserves for mounting additional compressed drives after startup. If
	you try to mount or create more compressed drives than DoubleSpace has reserved
	memory for, you receive the above error message.
	
	WORKAROUND
	==========
	
	You can adjust the Number of Removable-Media Drives setting by running
	DoubleSpace, choosing Options from the Tools menu, and changing the setting.
	This modifies the MaxRemovableDrives setting in the DBLSPACE.INI file.
	
	If restarting the computer does not correct this error, you may already have 15
	compressed drives mounted. Restarting does not allow you to mount or create any
	more compressed drives using DoubleSpace until you have fewer than 15 compressed
	drives mounted.
	
	To mount another compressed drive, you must first unmount one or more of the
	currently mounted compressed drives. To unmount a compressed drive, start
	DoubleSpace and select the drive to unmount, then choose Unmount from the Drive
	menu.
	
	NOTE: You can create more than 15 DoubleSpace-compressed drives, but a maximum of
	15 can be mounted at the same time.
	
	
	Additional query words: 6.00 6 6.20 dblspace.exe double space 15th 16th fifteen 15 limit ds errmsg total 16 sixteen
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
