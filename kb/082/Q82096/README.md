---
layout: page
title: "Q82096: Disabling Drafix CAD Fonts in Windows 3.0"
permalink: /kb/082/Q82096/
---

## Q82096: Disabling Drafix CAD Fonts in Windows 3.0

	Article: Q82096
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Foresight Resources Corporation's Drafix CAD for Windows versions 1.0, 1.1, and
	1.11 place a font entry and a section entry in the WIN.INI file.
	
	The font entry makes an extra 16 fonts available to Windows applications. To
	disable the Drafix CAD fonts, start Control Panel, choose the Fonts icon, and
	remove the "frc fonts" line.
	
	MORE INFORMATION
	================
	
	Drafix CAD versions 1.0, 1.1, and 1.11 place entries in the WIN.INI file to make
	their fonts available in the Drafix CAD drawing screen.
	
	Drafix CAD for Windows version 2.0 has its own DRAFIX.INI file that loads these
	fonts.
	
	Below is an example of the WIN.INI entries that the 1.0, 1.1, and 1.11 versions
	of Drafix CAD add and a listing of the names of the 16 fonts that Drafix CAD
	makes available to Windows.
	
	     [fonts]
	     frc Fonts (All res)=DRAFIX.FON
	
	     [DrafixWindowsCAD]
	     backgroundcolor=1
	     dwgdir=c:\Windows\cad\dwg
	     symboldir=c:\Windows\cad\slb
	
	The following is a list of fonts used inside the Drafix CAD for Windows drawing
	screen:
	
	  Block                 Greek Math
	  Century Bold          Helvetica
	  Century Italic        Italic
	  Century Bold Italic   Centura Bold
	  Complex               Simplex
	  Cursive               Slant
	  Cursive Bold          Special
	  Gothic Bold           Times Roman
	
	For more information, contact Foresight Resources Corporation's Technical
	Support.
	
	Drafix CAD is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.00 3.00a 3rdparty cadd third party 3rd win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
