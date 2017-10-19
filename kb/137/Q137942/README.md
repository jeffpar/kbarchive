---
layout: page
title: "Q137942: Troubleshooting Poor Performance in Microsoft Backup"
permalink: /kb/137/Q137942/
---

## Q137942: Troubleshooting Poor Performance in Microsoft Backup

	Article: Q137942
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a backup operation in Microsoft Backup, it may take longer than
	you expect. This poor performance may or may not be accompanied by poor hard
	disk performance while you perform other tasks in Windows 95.
	
	CAUSE
	=====
	
	This behavior can be caused by any of the following factors:
	
	- Lack of available memory.
	
	- Hard disks that are using MS-DOS Compatibility mode. This mode may be in use
	  for either the file system or for virtual memory.
	
	- Poor hard disk performance due to other factors, such as a less than optimal
	  hard disk and controller configuration, or the use of disk compression on a
	  computer with a relatively slow processor.
	
	- File fragmentation on the hard disk.
	
	- Unusable sectors on the backup tape.
	
	
	RESOLUTION
	==========
	
	Lack of Available Memory
	------------------------
	
	A lack of available memory is typically caused by having too many programs open
	at the same time, or by not having enough physical RAM installed in the
	computer. To resolve this problem, close all running programs before starting
	the backup process. If doing so does not improve performance, remove all
	programs from the Startup folder and from the "load=" and "run=" lines in the
	Win.ini file, and restart Windows 95. If performance is still poor, you may need
	to add more physical RAM to your computer to improve performance.
	
	Hard Disks Using MS-DOS Compatibility Mode
	------------------------------------------
	
	If the Performance tab in System properties shows that one or more of the hard
	disks in your computer is using MS-DOS Compatibility mode, resolving this
	problem should improve performance in Backup. For more information about
	troubleshooting MS-DOS Compatibility mode, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q130179 Troubleshooting MS-DOS Compatibility Mode on Hard Disks
	
	To access the Performance tab, double-click the System icon in Control Panel, and
	then click the Performance tab.
	
	Poor Hard Disk Performance
	--------------------------
	
	Even if your hard disks are not using MS-DOS Compatibility mode, the performance
	of Backup may be affected by the performance of your hard disks. If you are
	using an IDE hard disk, the performance of the hard disk may be affected by
	another device that is connected to the same IDE controller channel. Older hard
	disks with slow access speeds, CD-ROM drives, and tape drives all may adversely
	affect performance when connected to the same IDE controller channel as your
	hard disk. To resolve this problem, move the slower device to a separate IDE
	controller, or to the second IDE channel on an EIDE dual-port controller.
	
	If you are using disk compression on a computer with a relatively slow processor,
	hard disk performance may not be as good as if you were not using disk
	compression. If you are using third-party disk compression software that uses a
	real-mode driver to access your compressed drives, you may be able to improve
	performance by replacing the real-mode driver with a protected-mode driver. For
	information about obtaining such a driver, contact the manufacturer of your
	third-party disk compression software.
	
	File Fragmentation on Hard Disk
	-------------------------------
	
	Badly fragmented hard disks can affect the performance of Backup, as well as the
	performance of other tasks in Windows 95. To resolve this problem, run Disk
	Defragmenter to defragment your hard disks. To run Disk Defragmenter, click the
	Start button, point to Programs, point to Accessories, point to System Tools,
	and then click Disk Defragmenter.
	
	Unusable Sectors on Backup Tape
	-------------------------------
	
	Backup can detect and avoid unusable sectors on a tape, but the process that it
	uses to do so can be time consuming. If you suspect that performance problems in
	Backup are caused by unusable sectors on a tape, try using a new tape, or a tape
	that you know does not contain unusable sectors.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
