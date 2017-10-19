---
layout: page
title: "Q81712: QMS Printer Emulation and Windows"
permalink: /kb/081/Q81712/
---

## Q81712: QMS Printer Emulation and Windows

	Article: Q81712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the use of the PS-810, PS-1500, and PS-820 PostScript
	printers and the Big Kiss laser printer with Microsoft Windows.
	
	MORE INFORMATION
	================
	
	PS-810, PS-1500, and PS-820
	---------------------------
	
	If you use Windows version 2.x, 3.0, or 3.0a with the QMS PostScript printer
	PS-810, PS-1500, or PS-820, use the PSCRIPT.DRV printer driver.
	
	NOTE: The dual-bin capability of these printers is not supported by the
	PSCRIPT.DRV driver.
	
	  QMS Printer     Windows 2.x, 3.0, 3.0a PostScript Printer
	  -----------     -----------------------------------------
	
	  QMS PS-1500     Apple LaserWriter Plus
	
	  QMS PS-820      QMS-PS 800 Plus,
	      PS-810      Hewlett-Packard (HP) LaserJet Plus, or
	                  HP7475a plotter
	
	QMS also distributes its own PostScript driver for Windows 3.0. This driver dated
	11/03/93, must be used with the QMS PS-2200 and is available from QMS technical
	support.
	
	Using the Big Kiss Laser Printer with Windows
	---------------------------------------------
	
	The Big Kiss laser printer supports Epson FX-80 emulation. If the Big Kiss is
	using ROM version 3.0 or later, it supports Hewlett-Packard (HP) LaserJet
	emulation.
	
	If you have ROM version 3.0, you can check the startup page, which is printed
	when you turn on the printer, to determine what emulation mode the printer is
	using. Under Windows 3.0, 3.0a, or 3.1, install the printer driver that
	corresponds with the emulation mode the printer is set to use. If you do not
	have ROM version 3.0, you can obtain an update by contacting QMS technical
	support. Ask for the parts department and order the "Big Kiss ROM Upgrade."
	
	The Kiss Plus also supports the same HP LaserJet and Epson emulation modes. The
	printer needs the Kiss Module 20, 30, or 40 to support HP LaserJet emulation. If
	you have Module 10, you can either upgrade the ROM, or install the Epson FX-80
	printer driver for Windows 3.0.
	
	The Big Kiss II supports the Epson FX-80 emulation only. This is because the HP
	LaserJet emulation does not support two paper trays.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.00 3.00a 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300a kbWin310
	Version           : WINDOWS:2.x,3.0,3.0a,3.1
	
	=============================================================================
	
