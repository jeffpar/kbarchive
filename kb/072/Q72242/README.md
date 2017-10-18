---
layout: page
title: "Q72242: Cannot Format Fonts in Write"
permalink: kb/072/Q72242/
---

## Q72242: Cannot Format Fonts in Write

	Article: Q72242
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The italic, bold, or point size may not work for a font in Write for Microsoft
	Windows version 3.0.
	
	CAUSE
	=====
	
	This happens when the font selected is not available to the current printer.
	
	The first time you save a document in Write, Write retains information about
	fonts that are available to the current printer. For example, if the first time
	Write is run, the printer is a PostScript printer, Avant Garde is listed as an
	available font. When the document is saved, Write saves a list of the fonts
	available to the PostScript printer to the WIN.INI file. The next time Write is
	run, though the current printer is NOT a PostScript printer, Write still
	displays Avant Garde as an available font. Because the font is not available for
	the current printer, you cannot manipulate (italicize, bold, and so on) the
	font.
	
	RESOLUTION
	==========
	
	To solve this problem, do one of the following:
	
	- Check the printer setup to make sure that the proper printer is being used.
	  If you set up for the wrong printer, the listed fonts in Write may not be
	  available to your printer.
	
	- Delete the section similar to the following from your WIN.INI file:
	
	        [MSWrite]
	        Font1=AvantGarde,32,0
	        Font2=Courier,48,0
	        Font3=Bookman,16,0
	        Font4=Garamond,16,0
	        Font5=Helv,32,0
	        Backup=1
	
	  Then, reboot Windows. This reinitializes the fonts that Write displays as
	  available, based on the currently selected printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows Write version 3.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
