---
layout: page
title: "Q64515: Western Digital 7000 FASST SCSI Controller and Windows"
permalink: /kb/064/Q64515/
---

## Q64515: Western Digital 7000 FASST SCSI Controller and Windows

{% raw %}

	Article: Q64515
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Columbia Data Products has Western Digital 7000 Fasst SCSI hard disk controller
	drivers that are compatible with Microsoft Windows operating system versions 3.0
	and 3.1. The version of the SST driver for Windows is 3.36. This driver is
	available for a charge from Columbia Data Products. Version 3.3 through 3.35 of
	the SST drivers may work with Windows 3.0 and 3.1; however, Columbia Data
	Products does not guarantee the results.
	
	To use Windows 3.0 and 3.1 with the Fasst SCSI hard drive controller, edit the
	CONFIG.SYS file to read as follows:
	
	     DEVICE=SSTBIO.SYS /W:1
	     DEVICE=SSTDRIVE.SYS
	
	MORE INFORMATION
	================
	
	According to Columbia Data Products, these drivers may not work correctly if
	they are loaded high. SMARTDrive version 4.0 (SMARTDRV.EXE) may cause the system
	to stop responding (hang) or lock up at system startup if the SCSI drivers are
	loaded high.
	
	For additional information relating to these drivers, contact Columbia Data
	Products.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a3.10 3.1 loadhigh windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
