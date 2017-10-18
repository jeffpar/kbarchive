---
layout: page
title: "Q123109: Macintosh Clients Not Able to Use Downloaded Fonts"
permalink: kb/123/Q123109/
---

## Q123109: Macintosh Clients Not Able to Use Downloaded Fonts

	Article: Q123109
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Macintosh clients are not able to use downloaded fonts on a PostScript printer
	when printing through a Windows NT Server.
	
	CAUSE
	=====
	
	The PostScript driver on Macintosh queries the printer to discover what fonts
	are available on the printer. Windows and Windows NT do not query the printer
	for fonts. Windows and Windows NT use a file called a PostScript Printer
	Description (PPD) file to determine the capabilities of the printer. This file
	includes information such as resolution, number of trays and the types of fonts.
	When the Macintosh client sends the query to the print queue of a Windows NT
	Server, the Windows NT Server only reports back the fonts listed in the PPD file
	installed on the server.
	
	RESOLUTION
	==========
	
	In order for Windows NT Server to report downloaded printer fonts for Macintosh
	client computers, you need to modify the PPD file. The PPD files are found in
	several locations depending on the version of Windows NT and the type of
	computer (that is, x86, Alpha or MIPS).
	
	For Windows NT version 3.1, the location of the PPD file is at the following:
	
	  \WINNT\SYSTEM32\SPOOL\DRIVERS\W32X86\<PPD filename>.PPD (For
	  Intel-based computers)
	
	For Windows NT version 3.5, the location of the PPD file is at the following:
	
	  \WINNT\SYSTEM32\SPOOL\DRIVERS\W32X86\1\<PPD filename>.PPD (For
	  Intel-based computers)
	
	NOTE: To determine which PPD file is being used, search for the printer driver
	name in PRINTER.INF using a text editor such as Notepad. The file, PRINTER.INF,
	is located in the %SYSTEMROOT%\SYSTEM32 subdirectory. Only one PPD per printer
	driver is available. If a particular PPD driver is modified to include the
	additional fonts, all printer drivers using the PPD file has access to these
	fonts.
	
	MORE INFORMATION
	================
	
	When you modify the PPD file to specify additional fonts, modify only the
	section under the following heading and use the format specified for each font:
	
	*% Font Information =============================
	
	* Font [fontname: coding] "(version)"
	
	where: fontname = the PostScript language name of the font
	
	  coding = the type of coding for the font (Standard, Special and ISOLatin1 are
	  typical values for coding)
	  version = the version number of the font.
	
	As an example, the following lists the default Times family fonts found in an
	Apple LaserWriter II NTX:
	
	*Font Times-Bold: Standard "(001.001)"
	*Font Times-BoldItalic: Standard "(001.001)"
	*Font Times-Italic: Standard "(001.001)"
	*Font Times-Roman: Standard "(001.001)"
	
	For information about font names, codings and version numbers of your fonts,
	refer to your font manual(s).
	
	The third-party products discussed here are manufactured by Apple Computer, Inc.,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	Version           : 3.50
	
	=============================================================================
	
