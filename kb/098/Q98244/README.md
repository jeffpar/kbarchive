---
layout: page
title: "Q98244: Installing OS/2 1.3x on a Unisys PW2-3256 Computer"
permalink: kb/098/Q98244/
---

## Q98244: Installing OS/2 1.3x on a Unisys PW2-3256 Computer

	Article: Q98244
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Computers that provide an Adaptec SCSI BIOS by means of the Western Digital 6260
	VLSI chip on the motherboard hang on the copyright screen of OS/2 1.3x. This
	includes the Unisys PW2-3256.
	
	CAUSE
	=====
	
	On some Unisys machines with the WD6260 SCSI BIOS, the ROM signature says
	Western Digital, not Adaptec, which confuses OS/2. Western Digital licenses the
	Adaptec BIOS for their 6260 chip, which they sell to Unisys and other OEMs. OS/2
	thinks that a Western Digital signature means to use a WD1003 compatible driver,
	which is the root problem.
	
	RESOLUTION
	==========
	
	To install OS/2 1.3x on a Unisys PW2-3256, back up Installation disks A and B,
	renaming WD*.BID to WD*.BAK on the backups. Now you should be able to boot from
	Disk A, and successfully continue installing LAN Manager 2.1, 2.1a, or 2.2. With
	the Western Digital drivers no longer listed, OS/2 selects the correct Adaptec
	drivers.
	
	Additional query words: 2.20 2.2 hang install os2131 os2130
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
