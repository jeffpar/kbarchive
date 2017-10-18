---
layout: page
title: "Q137566: Macintosh Clients Not Printing in Color on PCL Color Printer"
permalink: kb/137/Q137566/
---

## Q137566: Macintosh Clients Not Printing in Color on PCL Color Printer

	Article: Q137566
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbprint kbPrinting
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	From your Macintosh computer, when you print a document containing color to
	a non postscript color printer that is shared under Windows NT, your
	document prints only in gray-scale black and white.
	
	CAUSE
	=====
	
	Windows NT Services for the Macintosh by design does not provide Macintosh
	clients the ability to print in color to non postscript color printers that are
	shared under Windows NT.
	
	When Services for the Macintosh converts the file, the color option is converted
	to a gray scale print job in the printer control language (PCL). The Windows NT
	TrueImage Raster Image Processor (RIP) for non postscript printers only supports
	Level 1 Postscript.
	
	Additional query words: prodnt Mac hp500c deskjet deskwriter sfm
	
	======================================================================
	Keywords          : kbinterop kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
