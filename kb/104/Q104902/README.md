---
layout: page
title: "Q104902: Print Processors and Data Types"
permalink: /kb/104/Q104902/
---

## Q104902: Print Processors and Data Types

	Article: Q104902
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT and Windows NT Advanced Server both use print processors as part of
	the overall printing procedure. The main function of a print processor is to
	interpret what type of data is being passed from the spooler to the graphics
	engine. Windows NT includes WINPRINT.DLL as its only one print processor, which
	can interpret journal and raw data types.
	
	MORE INFORMATION
	================
	
	Journal files are collections of Device Driver Interface (DDI) calls, which are
	precise commands specific to a particular hardware device. For example, a
	journal file created for a 150 dot-per-inch (dpi) LaserJet printer would not
	print properly on a 300 dpi LaserJet printer. Journal files can also contain
	TrueType font outline information, thus the destination printer need not have a
	particular font installed to render the print job. Journal files are processed,
	passed back to the spooler for routing to the graphics engine (GDI32.DLL), and
	then passed to the printer driver and finally sent to the output device.
	
	Raw files need no processing from the print processor; they are handed to the
	spooler for routing to the graphics engine. An example of a raw data type is an
	encapsulated PostScript (.EPS) file because it needs no print processor
	interpretation or conversion.
	
	Windows NT Advanced Server adds another print processor to the system:
	SFMPSPRT.DLL. This print processor interprets PostScript information passed from
	a Macintosh client and translates it to specific DDI commands that the Windows
	NT printer drivers can interpret. SFMPSPRT.DLL supports the PSCRIPT1 data type,
	which allows Macintosh clients to print PostScript files to raster printers.
	
	Though its main job is to interpret compatible data types, the print processor
	also provides access to the printing process. You can modify the printing
	process by substituting a custom program in place of the Windows NT default
	print processor. A print processor could be used to filter data, to create a
	special dialog with the printer device, or to interpret a new data type. For
	example, you might have a print processor that filters ASCII for use on a
	PostScript printer.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
