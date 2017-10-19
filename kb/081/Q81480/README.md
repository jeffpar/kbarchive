---
layout: page
title: "Q81480: Kensington Expert Mouse Setup and Windows"
permalink: /kb/081/Q81480/
---

## Q81480: Kensington Expert Mouse Setup and Windows

	Article: Q81480
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbhw kbtshoot kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Kensington Expert Mouse is shipped with a Setup program that installs a
	Kensington Mouse driver (EXMOUSE.DRV) and a virtual mouse device driver
	(EXVMD.386) for Windows.
	
	The Kensington Setup program modifies the SYSTEM.INI file directly without the
	use of the Microsoft Windows Setup program. If the Kensington Mouse does not
	operate properly within Windows, these SYSTEM.INI file entries may require
	modification.
	
	MORE INFORMATION
	================
	
	The Kensington Mouse Setup program places the following entries into the
	SYSTEM.INI file:
	
	     [boot]
	     mouse.drv=exmouse.drv
	
	     [386Enh]
	     mouse=exvmd.386
	
	     (Replaces the entry: device=*vmd)
	
	The Kensington Mouse Setup then copies the EXMOUSE.DRV and EXVMD.386 device files
	to the WINDOWS\SYSTEM directory.
	
	If the Kensington Mouse does not work properly in Windows, these lines may
	require modification.
	
	The following steps modify the Kensington Mouse installation and allow testing
	with the Windows mouse drivers:
	
	1. Create a backup copy of the SYSTEM.INI file.
	
	2. Run the Windows Setup program, and change the mouse driver to "Microsoft or
	  IBM PS/2 Mouse."
	
	3. For enhanced mode problems, disable (place a semicolon at the beginning of
	  the line) the "device=exvmd.386" line in the [386Enh] section of the
	  SYSTEM.INI file. Replace this entry with the following line:
	
	  device=*vmd
	
	Note that in the [386Enh] section of SYSTEM.INI, the "mouse=" and "device=" are
	synonymous when specifying the mouse driver and may be used interchangeably.
	
	If you are using a Kensington Expert Mouse and the above entries do not appear in
	the SYSTEM.INI file, run the Expert Mouse Setup program and specify the location
	of the Windows directory on the hard drive.
	
	For additional information, contact Kensington technical support.
	
	The Kensington product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: vxd vxds 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
