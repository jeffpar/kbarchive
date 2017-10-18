---
layout: page
title: "Q300968: Train Simulator: Installation Uses More Disk Space Than Expected"
permalink: kb/300/Q300968/
---

## Q300968: Train Simulator: Installation Uses More Disk Space Than Expected

	Article: Q300968
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Train Simulator on your computer, a complete
	installation may require a greater amount of disk space than the disk-space
	requirements listed on the box for a full install.
	
	CAUSE
	=====
	
	A complete installation of Train Simulator requires about 1.8 gigabytes (GB) of
	disk space (not including the swap file) unless you install the program to a
	FAT16 volume. If you install to a Fat16 volume, the installation may require as
	much as 2.2 GB because of the cluster size of a FAT16 volume. On a hard disk
	that uses the FAT16 file system, the smallest amount of space that a file can
	use is equal to the size of one cluster. This means that a 1-kilobyte (KB) file
	stored on the hard disk may actually use up to 32 KB of physical disk space,
	rather than 1 KB of disk space. Train Simulator installs a large number of small
	files (1 to 2 KB), including images (JPG).
	
	NOTE: This behavior does not occur on a FAT32 file system or on NTFS file
	systems, because these systems do not have a 32-KB limitation.
	
	MORE INFORMATION
	================
	
	Windows 95 Gold only supports FAT16 volumes, but Windows 95 OSR2, all versions
	of Windows 98, Windows ME and Windows 2000 can support FAT32.
	
	It may be possible to use Microsoft utilities to convert a FAT16 volume to FAT32
	in some operating systems. More information including information on who to
	contact for support of these tools can be found in the following articles:
	
	- Window98, Windows Millennium
	
	  
	
	  Q273896 How to Convert a Drive to FAT32 in Windows Millennium Edition
	
	  Q180134 How to Convert a Drive to FAT32 Using Drive Converter
	
	  Q253774 Common Questions About the FAT32 File System
	
	- Windows 2000
	
	  
	
	  Q214579 How to Use Convert.exe to Convert a Partition to NTFS
	
	  Q156560 Free Space Required to Convert FAT to NTFS
	
	- Windows 95 OSR2
	
	  Q158238 How to Determine the Version of Windows 95/98/Me in Use
	
	  Q155003 Description of Windows 95 OEM Service Release 2
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
