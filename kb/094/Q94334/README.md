---
layout: page
title: "Q94334: Using MS-DOS Upgrade Fdisk Program with EXTDISK.SYS"
permalink: /kb/094/Q94334/
---

## Q94334: Using MS-DOS Upgrade Fdisk Program with EXTDISK.SYS

{% raw %}

	Article: Q94334
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If were using COMPAQ MS-DOS version 4.0 or later before you upgraded to MS-DOS
	6.0 or later, and you are using EXTDISK.SYS, you should use the COMPAQ version
	of the Fdisk program. If you were using COMPAQ MS-DOS version 3.31 or earlier
	before you upgraded to MS-DOS 6.0 or later, and you are using EXTDISK.SYS, you
	should contact Compaq for an updated version of EXTDISK.SYS.
	
	MORE INFORMATION
	================
	
	Some COMPAQ systems use a driver called EXTDISK.SYS to access secondary disk
	drives. This driver is MS-DOS version-dependent. If you use the MS-DOS version
	of Fdisk when EXTDISK.SYS is loaded, Fdisk displays incorrect drive letters for
	the hard disks attached to the second controller.
	
	WORKAROUND
	==========
	
	You can work around this problem by using the COMPAQ version of Fdisk. To
	install the old version of Fdisk:
	
	1. Delete FDISK.EXE from the DOS directory.
	
	2. Copy FDISK.* from your COMPAQ MS-DOS disks to your DOS directory. For
	  example:
	
	     copy a:\fdisk.* c:\dos
	
	3. Add Fdisk to the SETVER.EXE version table for your version of COMPAQ MS-DOS.
	  For example:
	
	     setver fdisk.exe 4.0
	
	4. Restart your computer.
	
	NOTE: You must use SETVER to tell EXTDISK.SYS that you are using a previous
	version of MS-DOS. For more information, query on the following words in the
	Microsoft Knowledge Base:
	
	  " MS-DOS and SETVER and EXTDISK.SYS " (without the quotation marks)
	
	Additional query words: 6.22 6.00 6.20 EXTDRV.SYS
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
