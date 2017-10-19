---
layout: page
title: "Q139087: PPT7: Turning off Background Printing Increases Print Speed"
permalink: /kb/139/Q139087/
---

## Q139087: PPT7: Turning off Background Printing Increases Print Speed

	Article: Q139087
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from PowerPoint, the print spooling operation may be slow.
	
	CAUSE
	=====
	
	Slow print spooling can be caused by two different conditions:
	
	- The background printing option is turned on in PowerPoint.
	
	  -or-
	
	- The printer settings are not set correctly.
	
	RESOLUTION
	==========
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Click to clear the Print In Background check box.
	
	To check the applicable printer settings from within Windows 95, follow these
	steps:
	
	1. On the Windows Start menu, point to Settings, and then click Printers.
	
	2. Right-click the appropriate printer icon, and then click Properties on the
	  menu that appears.
	
	3. Click the Details tab, and then click Spool Settings.
	
	4. Be sure the "Spool print jobs so program finishes printing faster" option is
	  selected.
	
	5. Be sure the "Start printing after first page is spooled" option is selected.
	
	MORE INFORMATION
	================
	
	Background printing is enabled by default in PowerPoint 97. There are two modes
	of printing: background and foreground. When you print with background printing
	turned on, you can resume work on your presentation very quickly. The print job
	is sent to the printer in the background. However, it takes longer to print a
	job in the background, and PowerPoint performs more slowly while a background
	print job is being spooled.
	
	When you print with background printing turned off, you cannot resume work on
	your presentation until the entire print job has been spooled. However, the
	print job is sent much faster using this setting.
	
	While you are printing in the background, a printer icon appears on the status
	bar. You can cancel the print job by double-clicking this icon. You can queue
	several PowerPoint print jobs to one or more printers. When a print job is in
	progress, a printer icon appears on the Windows taskbar. Double-click the icon
	to open that printer's queue.
	
	Additional query words: spool slow hang crash ppt7 ppt95 powerpnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	
	=============================================================================
	
