---
layout: page
title: "Q83118: Printers Not Supporting TrueType in Windows 3.1"
permalink: /kb/083/Q83118/
---

## Q83118: Printers Not Supporting TrueType in Windows 3.1

{% raw %}

	Article: Q83118
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, all printer drivers support TrueType fonts
	except for the Generic/Text Only printer driver (TTY.DRV) and the plotter driver
	(HPPLOT.DRV).
	
	MORE INFORMATION
	================
	
	Printer drivers support TrueType in one of two ways:
	
	- All dot-matrix printer drivers, the Hewlett-Packard (HP) DeskJet driver
	  (HPDSKJET.DRV), the Canon LBP II and III drivers (LBP8II.DRV and
	  CANONIII.DRV), and the Olivetti DM109/309 driver (DM309.DRV) support printing
	  TrueType fonts as raster graphic data. The IBM 4019 driver (IBM4019.DRV, also
	  known as the Lexmark 4019), the original HP LaserJet, LaserJet Plus, and
	  LaserJet 500+ also support TrueType fonts in this way.
	
	- Other printer drivers support TrueType by downloading TrueType font
	  information to the printer, the same way that other soft fonts are
	  downloaded, and then requesting the font the same way other device- resident
	  fonts are requested. This is the way that TrueType is supported for the HP
	  LaserJet Series II (and later HP LaserJet models, including the HP LaserJet
	  III family), and the PostScript driver (PSCRIPT.DRV).
	
	Printer drivers written for Windows 3.0 by original equipment manufacturers
	(OEMs) automatically support TrueType fonts if they support printing bitmap
	fonts (such as TmsRmn and Helv in Windows 3.0 and MS Serif and MS Sans Serif in
	Windows 3.1). If they don't, these drivers must be modified to support TrueType
	fonts.
	
	
	Additional query words: 3.10 3.1 KBPrint 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
