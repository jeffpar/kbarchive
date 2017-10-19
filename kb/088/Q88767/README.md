---
layout: page
title: "Q88767: Using the IBM Personal PagePrinter 4216-31 with Windows"
permalink: /kb/088/Q88767/
---

## Q88767: Using the IBM Personal PagePrinter 4216-31 with Windows

	Article: Q88767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The IBM Personal PagePrinter 4216-31 is compatible with Microsoft Windows. This
	article discusses the following functionality issues:
	
	- PagePrinter Emulation and History
	
	- PagePrinter Current Drivers
	
	MORE INFORMATION
	================
	
	PagePrinter Emulation and History
	---------------------------------
	
	The IBM Personal PagePrinter 4216-31 replaces the IBM 4216-30. It supports the
	following emulation:
	
	- PostScript
	
	- IBM Proprinter XL
	
	- Hewlett-Packard LaserJet Plus
	
	- Diablo 630
	
	The standard configuration is 2 MB of RAM and one of the following interfaces:
	RS/232, Centronics Parallel, or AppleTalk. It uses its own MS-DOS level drivers
	in the CONFIG.SYS and/or AUTOEXEC.BAT files, which are needed for the printer to
	function within Windows. Normally, Windows prints to the port called EPT.
	
	The EPT port cannot be redirected like LPTx ports can. For example, you can use
	LPT1.OS2, but you cannot use EPT.OS2.
	
	If you own a 4216-30, then you can order an upgrade kit directly from IBM. This
	makes the 3216-30 a 4216-31, with the exception of sheet feeder support.
	
	The printer also supports a dual-bin sheet feeder.
	
	PagePrinter Current Drivers
	---------------------------
	
	The IBM drivers need to be version 2.0 or later. There is a README.TXT file that
	comes on the driver's disks that documents the installation procedure.
	
	
	Additional query words: 3.00 3.00a 3.0 3.0a 3rdparty page-printer page printer ept eps 2.0 2.03 2.10 2.11 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
