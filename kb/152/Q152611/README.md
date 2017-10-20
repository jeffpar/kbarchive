---
layout: page
title: "Q152611: OSR2 Cannot Dual-Boot Between Windows 3.x and Windows 95"
permalink: /kb/152/Q152611/
---

## Q152611: OSR2 Cannot Dual-Boot Between Windows 3.x and Windows 95

{% raw %}

	Article: Q152611
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to dual-boot Windows version 3.x on a computer running Windows 95 OEM
	Service Release 2, you receive one of the following error messages:
	
	- This version of Windows does not run on MS-DOS 6.x or earlier.
	
	- You started your computer with a version of MS-DOS incompatible with this
	  version of Windows. Insert a Startup diskette matching this version of
	  Windows and then restart.
	
	  The system has been halted. Press CTRL+ALT+DELETE to restart your computer.
	
	- This version of Windows cannot be run on this version of DOS.
	
	CAUSE
	=====
	
	Beginning with OSR2, dual-booting Windows 3.x is not supported in Windows 95.
	
	RESOLUTION
	==========
	
	To dual-boot between Windows 3.x and Windows 95, you need to install the retail
	version of Windows 95. If you have FAT32 drives, you need to remove the FAT32
	partition and create a FAT16 partition with the Windows 95 or MS-DOS 6.x version
	of Fdisk.exe.
	
	For additional information about how to perform this task, please see your
	printed Windows documentation or online Help.
	
	Neither MS-DOS 6.x nor the retail version of Windows 95 will recognize a FAT32
	volume.
	
	MORE INFORMATION
	================
	
	Windows 3.x was designed to use the FAT12 and FAT16 file system, and could
	potentially damage a FAT32 volume.
	
	
	Additional query words: bootmulti
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
