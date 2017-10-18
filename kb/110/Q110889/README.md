---
layout: page
title: "Q110889: Can't Choose Second Operating System on Olivetti M6 Computer"
permalink: kb/110/Q110889/
---

## Q110889: Can't Choose Second Operating System on Olivetti M6 Computer

	Article: Q110889
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot successfully load the secondary operating system (MS-DOS) from Boot
	Loader on an Olivetti M6 series computer if you are booting from a SCSI hard
	disk drive connected to an Adaptec 154X controller. The following error message
	appears:
	
	  Non-system disk or disk error.
	
	If you boot from the onboard IDE controller or any other hardware configuration,
	this problem does not occur.
	
	CAUSE
	=====
	
	This problem is caused by the specific interaction between the Olivetti M6
	series computer and the Adaptec 154X controller.
	
	
	WORKAROUND
	==========
	
	You can use a bootable floppy disk to avoid using Boot Loader in one of the
	following two ways:
	
	1. Boot from a bootable MS-DOS disk when you want to use MS-DOS.
	
	2. Boot from a bootable MS-DOS disk. Use the SYS command to change the boot
	  sector from the Windows NT Boot Loader to MS-DOS. When you want to return to
	  Windows NT, boot with the Windows NT setup disk. Choose R for repair. After
	  you insert the Emergency Repair disk, choose only to verify boot files on
	  drive C.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem has been corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
