---
layout: page
title: "Q131744: Adobe Acrobat PDFWriter Shows as Network Printer"
permalink: /kb/131/Q131744/
---

## Q131744: Adobe Acrobat PDFWriter Shows as Network Printer

	Article: Q131744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Adobe Acrobat, the Adobe Acrobat PDFWriter icon in the
	Printers folder is unavailable. If you use the right mouse button to click this
	icon, Work Offline is selected on the menu that appears.
	
	CAUSE
	=====
	
	The Adobe Acrobat PDFWriter prints to a port named "Disk:." This is not a valid
	name for a local port in Windows 95. If a port name is not listed in the [Ports]
	section of the WIN.INI file, Windows 95 assumes the port is a network port.
	Therefore, Windows 95 assumes the PDFWriter is a network printer. Because this
	network port does not really exist, the printer is set to offline.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the WIN.INI file. Add the
	following line to the [Ports] section of the file:
	
	  DISK:=
	
	After you add this line, save the WIN.INI file and close it, and then restart
	Windows 95.
	
	MORE INFORMATION
	================
	
	The PDFWriter is part of Adobe Acrobat 2.0. It is a utility to convert
	PostScript files to a viewable format (Portable Document Format). This
	conversion is for cosmetic purposes only; the functionality of the program is
	not affected when this symptom occurs.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
