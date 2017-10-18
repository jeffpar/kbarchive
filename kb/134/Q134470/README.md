---
layout: page
title: "Q134470: Setup May Damage FAT on Primary 1 GB Internal SCSI Drive"
permalink: kb/134/Q134470/
---

## Q134470: Setup May Damage FAT on Primary 1 GB Internal SCSI Drive

	Article: Q134470
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer from a network boot disk with no special settings
	for Emm386.exe and then run Windows 95 Setup from a network drive, Setup may not
	finish correctly. When this occurs, you may find that the file allocation table
	(FAT) on drive C is damaged when you restart your computer with a startup floppy
	disk.
	
	CAUSE
	=====
	
	The damage occurs because the network boot disk loads Emm386.exe without any
	exclude ranges for the network card and Windows 95 Setup starts Smartdrv.exe.
	When SmartDrive puts its buffer into the high memory area (HMA), it overlaps the
	memory area the network card is using. During the file copy process, this data
	is damaged and gets written to the hard disk.
	
	RESOLUTION
	==========
	
	To avoid this problem, use one of the following methods:
	
	- Use the correct exclude range for the installed network card.
	
	- Start Setup with the following command to avoid starting SmartDrive:
	
	  setup /c
	
	- Do not use Emm386.exe or any other memory manager.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
