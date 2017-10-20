---
layout: page
title: "Q153958: No Support for Print Performance Architecture under Windows NT"
permalink: /kb/153/Q153958/
---

## Q153958: No Support for Print Performance Architecture under Windows NT

{% raw %}

	Article: Q153958
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hewlett-Packard has introduced a new architecture targeted for the home market
	called Print Performance Architecture (PPA). Conceptually, PPA resembles other
	high-performance architectures such as Microsoft Windows Printing System and
	Adobe Print Gear. These technologies offer high-speed output by eliminating any
	intermediate print language and process pages in the host format (in this case,
	graphical device interface, or GDI) directly into bitmaps for printing.
	
	Because PPA is a departure from traditional printing architecture, Windows NT is
	not able to support this device by means of its universal PCL driver (RASDD).
	
	Windows 2000 does support PPA devices.
	
	MORE INFORMATION
	================
	
	PPA eliminates any intermediary page description protocol, namely printer
	command language (PCL), between the host and the printer. As a result, two
	process-intensive steps are eliminated:
	
	- The conversion of the page description from the graphic environment's form
	  (GDI for the Windows Environment) into PCL by the printer driver is
	  eliminated.
	
	- In the printer, the conversion of the PCL description into a bitmap is
	  eliminated. Instead, in the PPA architecture there is only one conversion
	  from GDI straight to a bitmap.
	
	To better understand the PPA architecture, it is necessary to review how a PCL
	and PPA device prints.
	
	PCL Printing Process
	--------------------
	
	(Using a Deskjet device as an example)
	
	Host:
	
	- Application and OS System: User chooses to print. Application spools
	  high-level GDI description of printed page to hard drive.
	
	- Rasterization and Bitmap Processing: Windows driver renders GDI objects and
	  translates into four-plane color rasters and text.
	
	- PCL Encoding: Windows driver translates rasters and text into PCL.
	
	- I/O: Windows driver sends PCL to the Printer over the I/O channel.
	
	Printer:
	
	- I/O: PCL data arrives in I/O buffer.
	
	- PCL Decoding and Formatting: PCL data moved from I/O buffer into a format
	  buffer. Text converted to rasters.
	
	- Swath Management: Formatted raster data is moved into a temporary buffer.
	
	- Swath Management: Rasters are converted into Printer sweeps formatted for
	  Print Cartridges.
	
	- Mechanical and Print Head Control: Print sweeps are sent out to the print
	  head and ink is fired, resulting in a printed page.
	
	PPA Printing Process
	--------------------
	
	Host:
	
	- Application and OS System: User chooses to print. Application spools
	  high-level GDI description of printed page to hard drive.
	
	- Rasterization and Bitmap Processing: Windows driver renders GDI objects and
	  translates it into four-plane color rasters and text.
	
	- Swath Management: Rasters are converted into Print sweeps formatted for the
	  Print cartridge.
	
	- I/O: Windows Driver sends Demand Protocol Architecture (DPA) commands to the
	  printer over the I/O channel.
	
	Printer:
	
	- I/O: DPA data arrives in I/O buffer using Direct Memory Access (DMA).
	
	- Mechanical and Print Head Control: Print sweeps are sent out to the print
	  head and ink is fired using DMA.
	
	HP Print Devices That Support Only PPA
	--------------------------------------
	
	Currently, there are three models that support PPA only:
	
	Hewlett-Packard Deskjet 820Cxi (Windows PPA)
	Hewlett-Packard Deskjet 820Cse (Windows PPA)
	Hewlett-Packard Deskjet 1000c (Windows PPA)
	
	Other HP PPA Printers
	---------------------
	
	Hewlett-Packard Deskjet 720C
	Hewlett-Packard Deskjet 722c
	
	These printers support both PPA and PCL3 emulation.
	
	NOTE: Hewlett-Packard no longer supports the DeskJet 720, 722 and 722c series
	printers under Windows NT version 3.51.
	
	
	Additional query words: WPS Windows Printing System Lasermaster winprint GDI Printer perfmon
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
