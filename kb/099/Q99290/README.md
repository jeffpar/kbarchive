---
layout: page
title: "Q99290: Adaptec/MS-DOS Support for Drives Greater than 1 GB"
permalink: kb/099/Q99290/
---

## Q99290: Adaptec/MS-DOS Support for Drives Greater than 1 GB

	Article: Q99290
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Adaptec manual is somewhat misleading when it states that MS-DOS imposes a
	1G limit on storage drives. MS-DOS is limited to 1024 cylinders, but it allows
	more heads and sectors per track (255 heads and 63 sectors) than does Adaptec
	(64 heads and 32 sectors). Adaptec adopted the SCSI standard in order to surpass
	1G, but a drive is not going to run unless MS-DOS supports it.
	
	To support drives greater than 1G, you need to enable extended BIOS translation
	in EISA CONFIG, and Adaptec's 9/17/92 bid works only when the drive isn't the
	boot device.
	
	Problems can occur when it IS the boot device. When setting up a drive's
	geometry, DISK.TSD determines if it is the boot drive. If it is, use the ROM
	chain entry (BIOS related) to set the geometry because the machine has to boot
	from the ROM. This is probably where the Adaptec problem arises: the bid is
	reporting the correct values but the BIOS information has to come from the
	adapter, which appears to be setting values incorrectly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
