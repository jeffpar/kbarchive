---
layout: page
title: "Q185053: Printing Duplex with HP LaserJet 5 PostScript Printer"
permalink: kb/185/Q185053/
---

## Q185053: Printing Duplex with HP LaserJet 5 PostScript Printer

	Article: Q185053
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to print duplex (print on both sides of the paper) on
	a Hewlett-Packard LaserJet 5/5M PostScript printer.
	
	MORE INFORMATION
	================
	
	To print duplex (print on both sides of the paper) on a Hewlett-Packard LaserJet
	5/5M PostScript printer, the following conditions must be met:
	
	1. The optional duplex unit must be installed and recognized by the printer.
	  Print the self test page to verify that the duplex unit is correctly
	  installed.
	
	2. In the Windows NT 4.0 PostScript driver for the HP LaserJet 5/5M, make sure
	  that the duplex option is enabled. On the Device Setting tab, click Duplex
	  Unit in the Installable Options folder and make sure that the setting is
	  Installed.
	
	3. From the application software, select Print Setup on the File file and make
	  sure that the Page Setup tab has the option "Print on both sides (duplex
	  printing)" set to either "short edge" or "long edge" as preferred.
	
	4. Set the resolution for the print job according to how much printer memory is
	  installed. Additional memory is required to print duplex at 600 dpi or on
	  larger paper sizes.
	
	The following chart shows how much memory is required for specific paper sizes,
	resolutions and optional features when printing to the LaserJet 5/5M in
	Postscript mode. Note that less memory is required for PCL mode.
	
	Size/      300 dpi simplex  300 dpi duplex  600 dpi simplex  600 dpi duplex
	Option
	
	Letter/A4  4 Megabytes      4 Megabytes     4 Megabytes      10 Megabytes
	
	Legal      4 Megabytes      5 Megabytes     4 Megabytes      12 Megabytes
	
	I/O        4 Megabytes      12 Megabytes    4 Megabytes      12 Megabytes
	buffering
	
	Resource   8 Megabytes      13 Megabytes    8 Megabytes      13 Megabytes
	saving
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
