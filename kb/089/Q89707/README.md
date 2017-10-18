---
layout: page
title: "Q89707: Shaded Areas Don't Print the Same in Windows 3.0 and 3.1"
permalink: kb/089/Q89707/
---

## Q89707: Shaded Areas Don't Print the Same in Windows 3.0 and 3.1

	Article: Q89707
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Versions 3.5, 3.51, 3.52, and 3.53 of the PostScript driver that ships with
	Windows 3.1 do not print shaded areas at the same resolution as the PostScript
	driver that ships with Windows 3.0. The Windows 3.0 PostScript driver prints
	shaded areas at 75 dots per inch (dpi) while the Windows 3.1 PostScript printer
	driver prints shaded areas at 300 dpi.
	
	This functionality was changed in the Windows 3.1 implementation of the
	PostScript driver to provide consistency between all printer drivers. For
	example, the PostScript printer driver for Windows 3.1 behaves the same way as
	the Windows 3.1 printer drivers for the Hewlett-Packard LaserJet series of
	printers.
	
	
	Additional query words: 3.10 PSCRIPT.DRV 3.5x shade shading winword word ms-draw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
