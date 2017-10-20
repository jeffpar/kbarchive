---
layout: page
title: "Q145941: Cannot Boot to MS-DOS On a Windows NT Mirrored FAT Partition"
permalink: /kb/145/Q145941/
---

## Q145941: Cannot Boot to MS-DOS On a Windows NT Mirrored FAT Partition

{% raw %}

	Article: Q145941
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT allows you to dual boot between Windows NT and another operating
	system, such as Windows 95 or MS-DOS. However, if you establish a mirror on the
	system partition that contains the two operating system files, MS-DOS stops
	responding (hangs) after it displays "Starting MS-DOS..." and the following
	appears when you start Windows 95:
	
	  The following file is missing or corrupt: Command.com
	  Type the name of the command interpreter.
	
	CAUSE
	=====
	
	MS-DOS looks for the System ID Byte in the partition table to determine what
	type of FAT file system to use. The system ID byte has three valid values that
	MS-DOS can determine:
	
	Value     File System
	-----     -----------
	0x01      MS-DOS 12 Bit FAT
	0x04      MS-DOS 16 Bit FAT
	0x06      MS-DOS 16 Bit FAT (Greater than 32 MB in size)
	
	When you set up fault tolerance in Windows NT on a FAT system partition, the high
	order bit of the system ID byte changes to 0x86, which MS-DOS does not
	recognize.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Use Disk Administrator to break the mirror and shut down Windows NT.
	
	2. Reboot the computer and start MS-DOS or Windows 95.
	
	NOTE: You may install Windows NT to another partition and establish the mirror.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
