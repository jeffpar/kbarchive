---
layout: page
title: "Q135322: Default Printer Not Changed in PowerPoint"
permalink: /kb/135/Q135322/
---

## Q135322: Default Printer Not Changed in PowerPoint

	Article: Q135322
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the default printer in Windows 95 while PowerPoint is running, the
	target printer for the current presentation does not change to the new default.
	
	CAUSE
	=====
	
	The way PowerPoint for Windows 95 handles the default printer is different from
	the way earlier versions of PowerPoint handle it.
	
	When you create a new presentation, by default it is set up to print to the
	Windows 95 default printer. However, if you change that default printer while
	the presentation is open, PowerPoint does not automatically recompose the
	presentation for the new printer driver.
	
	If you close your presentation and then re-open it, it will be set up for the new
	printer driver.
	
	RESOLUTION
	==========
	
	To resolve this problem, reset the printer before you print the presentation.
	
	To reset the printer, use the following steps:
	
	1. On the File menu, click Print.
	
	2. Choose the desired printer from the Name list.
	
	3. Click OK.
	
	Additional query words: Additional query words: 7.00 7.0 main primary powerpnt w_powerpnt point power
	
	======================================================================
	Keywords          : kbenv kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
