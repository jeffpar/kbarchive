---
layout: page
title: "Q90784: Err Msg: Invalid Device Request Reading Drive..."
permalink: kb/090/Q90784/
---

## Q90784: Err Msg: Invalid Device Request Reading Drive...

	Article: Q90784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use SuperStor version 1.3 by AddStor with the Microsoft Windows 3.1
	SMARTDRV.EXE file, you may receive the following error message:
	
	  Invalid device request reading drive c
	
	and your system may stop responding (hang).
	
	CAUSE
	=====
	
	SuperStor loads a device driver called SSTORDRV.SYS in the CONFIG.SYS file, and
	optionally loads DEVSWAP.COM, which swaps the physical drive letter for the
	compressed drive.
	
	Versions of SuperStor earlier than 1.3h do not work with SMARTDrive version 4.0.
	When SMARTDrive loads, it "unloads" the SuperStor driver, making the compressed
	drives unavailable. Versions 1.3h and 1.3i correct this problem.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Restart your computer with a bootable floppy disk in drive A.
	
	2. Create a CONFIG.SYS file on the bootable floppy that contains the SuperStor
	  driver, SSTORDRV.SYS.
	
	3. Restart your computer again using the bootable floppy disk in drive A. This
	  should allow you to access the compressed volume of your SuperStor drive.
	
	4. Open the AUTOEXEC.BAT file in a text editor and remove the SMARTDRV.EXE line.
	
	MORE INFORMATION
	================
	
	SuperStor is a disk-compression program, similar to Stacker, that can increase
	the storage capacity of hard, floppy, and virtual disks.
	
	
	SuperStor is manufactured by AddStor, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 system disk add store super stor
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
