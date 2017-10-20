---
layout: page
title: "Q84230: DPT 2011 and 2012B Controllers Need at Least 2G BIOS"
permalink: /kb/084/Q84230/
---

## Q84230: DPT 2011 and 2012B Controllers Need at Least 2G BIOS

{% raw %}

	Article: Q84230
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to DPT technical support, if you use the DPT hard drive controller
	model 2011 or 2012B with the Microsoft Windows operating system version 3.1, you
	must use ROM version 2G as a minimum. The latest version of ROM for these cards
	is 3C. The 3C version has a number of speed improvements. Without a correct ROM
	version, you may experience cross-linked files and problems running in 386
	enhanced mode.
	
	MORE INFORMATION
	================
	
	Use one of the following three methods to determine what version of ROM you
	have:
	
	- Start the computer and note the ROM version information from the DPT banner
	  screen.
	
	  -or-
	
	- Run the DPTTEST.EXE program that comes with the card; it will display the ROM
	  version.
	
	  -or-
	
	- Look at the two ROMs on the upper left-hand corner of the card. Find the chip
	  that begins with FWxxxx; the next line will display the ROM version.
	
	NOTE: SMARTdrive may require the /double_buffer+ switch in the CONFIG.SYS file if
	the controller is not Virtual DMA Services (VDS) compliant.
	
	NOTE: If you are using Quarterdeck's QEMM memory manager, it is necessary to
	contact Quarterdeck or DPT technical support to adjust the way QEMM monitors INT
	13h.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 DTP SCSI ESDI cache 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
