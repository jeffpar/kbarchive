---
layout: page
title: "Q134387: Cannot Boot Windows NT 3.5x From Duplexed Mirror Drive"
permalink: kb/134/Q134387/
---

## Q134387: Cannot Boot Windows NT 3.5x From Duplexed Mirror Drive

	Article: Q134387
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a duplex mirror and the primary drive fails, you may not be able to
	boot from your Fault tolerant boot floppy.
	
	CAUSE
	=====
	
	This problem occurs when the adapter for the shadowed drive has the BIOS
	disabled. Windows NT 3.5 and later use Multi instead of Scsi in the BOOT.INI
	file. If the BIOS is disabled, Multi does not find the controller.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Enable the BIOS on the second adapter and change Scsi references to Multi in
	  your BOOT.INI file.
	
	- Change the Multi references to Scsi in the BOOT.INI file on the floppy disk
	  you are booting from. Copy your SCSI driver to the floppy disk. Rename it
	  NTBOOTDD.SYS. Change the arc path read to read:
	
	  SCSI(1).....
	
	- Move the previously shadowed drive to the first controller.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
