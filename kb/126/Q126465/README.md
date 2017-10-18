---
layout: page
title: "Q126465: Macintosh Client Computers Cannot Print at 600 DPI"
permalink: kb/126/Q126465/
---

## Q126465: Macintosh Client Computers Cannot Print at 600 DPI

	Article: Q126465
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	When you print from a Macintosh client computer to a non-Postscript
	printer that supports up to 600 dots per inch (DPI), and it is connected to
	a Windows NT Server running the Services for Macintosh, 300 DPI is the
	maximum resolution you can use. However, if you print to a Postscript
	printer, you can print at 600 DPI.
	
	Windows NT functions this way by design. The printer driver for Windows NT
	uses basic raster image processors (RIP) for non-Postscript printers.
	Contact third-party printer manufacturers for additional information on
	full-featured RIPs.
	
	
	Additional query words: prodnt sfm
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
