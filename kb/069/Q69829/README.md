---
layout: page
title: "Q69829: Running Windows in Enhanced Mode with Tandy 4000 with SCSI"
permalink: kb/069/Q69829/
---

## Q69829: Running Windows in Enhanced Mode with Tandy 4000 with SCSI

	Article: Q69829
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tandy Corporation recommends the following settings to run Microsoft Windows 3.0
	in 386 enhanced mode on a Tandy 4000 computer with a SCSI hard drive:
	
	- The /b- switch should be used when loading SMARTDrive in the CONFIG.SYS file.
	  Most of the SCSI hard drives with Tandy 4000 computers have Adaptec
	  controllers. The /b- switch turns off double buffering.
	
	  NOTE: The /b- switch would come after the Normal and Minimum Cache size
	  settings. An example of this is:
	
	  Device=C:\Windows\Smartdrv.Sys 2048 1024 /B-
	
	- The line for HIMEM.SYS must be the first device line in the CONFIG.SYS file:
	
	  Device=C:\Himem.Sys
	
	- The following line must be added to the [386Enh] section of the SYSTEM.INI:
	
	  VirtualhdIrq=False
	
	MORE INFORMATION
	================
	
	If the ROM BIOS for the SCSI hard drive is version 2.0, 2.0c or earlier, then
	the device driver SCSIHA.SYS must be loaded through the CONFIG.SYS file. This is
	needed for proper operation in enhanced mode. If the ROM BIOS is version 4.05s,
	5.05s, or later, then no additional device driver needs to be loaded.
	
	For further information on SCSI-type drive and controllers, query on:
	
	  Windows and Adaptec and SCSI
	
	The Tandy products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
