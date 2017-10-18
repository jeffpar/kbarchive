---
layout: page
title: "Q98485: Using Windows and MS-DOS 5 Upgrade After Installing MS-DOS 6.x"
permalink: kb/098/Q98485/
---

## Q98485: Using Windows and MS-DOS 5 Upgrade After Installing MS-DOS 6.x

	Article: Q98485
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): ; MS-DOS:6.0,6.2,6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to MS-DOS 6.0 or later, you may have trouble reinstalling
	Windows from your Windows and MS-DOS 5.0 Upgrade disks. If you need to reinstall
	Windows at a later date, the Setup program will look for MS-DOS 5.0 or earlier
	and may attempt to reinstall MS-DOS 5.0.
	
	CAUSE
	=====
	
	After you install MS-DOS 6 Upgrade, the Setup program on the Windows and MS-DOS
	5.0 Upgrade disks may attempt to install MS-DOS 5.0. If you run Setup from Disk
	1 of the Windows and MS-DOS 5.0 for IBM PS/2 package, you receive the following
	message:
	
	  Insert Disk 1 and press CTRL+ALT+DEL
	
	If you follow the instructions in this message, Setup attempts to install MS-DOS
	5.0. If you are using the Windows and MS-DOS 5.0 Upgrade package, you receive
	the following message:
	
	  Cannot identify your version of DOS. Press Enter to exit Setup.
	
	WORKAROUND
	==========
	
	To install only Windows from either the Windows and MS-DOS 5.0 for IBM PS/2
	package or Windows and MS-DOS 5.0 Upgrade package, use the following steps:
	
	1. Place Disk 3 in drive A or drive B.
	
	2. Change to that drive by typing "A:" (without the quotation marks) or "B:"
	  (without the quotation marks) and pressing ENTER.
	
	3. For a normal Windows setup, type "winsetup" (without the quotation marks) and
	  then press ENTER. For an administrative setup on the network, type "winsetup
	  /a" (without the quotation marks) and then press ENTER.
	
	Note: All setup switches apply, but be sure you type "winsetup" (without the
	quotation marks) rather than "setup."
	
	Additional query words: "Windows setup only" 3.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500
	Version           : :; MS-DOS:6.0,6.2,6.21
	
	=============================================================================
	
