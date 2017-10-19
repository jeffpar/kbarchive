---
layout: page
title: "Q116399: Valid File Formats in BitEdit Dependent on Installed Filters"
permalink: /kb/116/Q116399/
---

## Q116399: Valid File Formats in BitEdit Dependent on Installed Filters

	Article: Q116399
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The available open file formats in BitEdit are dependent on the filters listed
	in the WIN.INI file.
	
	MORE INFORMATION
	================
	
	The following is a list of file formats that BitEdit can open without the aid of
	graphics filters added by other applications:
	
	  DIB Microsoft Windows DIB
	  RDI Microsoft RIFF DIB
	  PCX PC Paintbrush
	  GIF CompuServe GIF
	  PIC Apple Macintosh PICT
	  TGA Truevision
	  AVI AVI (First Frame)
	
	The list of open file formats on page 5-2 in the Video for Windows "User's Guide"
	and in Video for Windows Help is misleading. BitEdit supports other graphic file
	formats only if graphic filters have been installed by another application and
	added to the [MS Graphic Import Filters] section of the WIN.INI file.
	
	The following file formats are supported provided that Windows graphic filters
	have been installed for these formats.
	
	  PLT AutoCad Import
	  CGM Computer Graphics Metafile
	  WPG DrawPerfect
	  EPS Encapsulated PostScript
	  HGL HP Graphic Language
	  DRW Micrografx Designer Plus/Draw
	  WMF Microsoft Windows Metafile
	  TIF Tagged Image File Format
	
	NOTE: The Video for Windows software does not include filters for these file
	formats.
	
	WORKAROUND
	==========
	
	To work around this problem, install an application that adds the desired
	Windows graphic filters, and rename the MMTOOLS.INI file in the Windows
	directory. This allows BitEdit to rebuild the list of available graphic formats
	in the MMTOOLS.INI file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
