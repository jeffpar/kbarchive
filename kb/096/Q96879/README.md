---
layout: page
title: "Q96879: Cannot Print Color Image from Paintbrush to DeskJet 550C"
permalink: kb/096/Q96879/
---

## Q96879: Cannot Print Color Image from Paintbrush to DeskJet 550C

	Article: Q96879
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Paintbrush image does not print in color on a Hewlett- Packard
	(HP) DeskJet 550C or 560C printer when you are using the HP DeskJet printer
	driver.
	
	CAUSE
	=====
	
	The printer driver is configured for Black and Color; you must configure the
	printer driver for All Color or it cannot print.
	
	RESOLUTION
	==========
	
	To change this setting, do the following:
	
	1. In Control Panel, choose the Printers icon.
	
	2. From the list of installed printers, select the HP DeskJet 550C, and then
	  choose the Setup button.
	
	3. Select the All Color option, and then choose the OK button.
	
	If this procedure fails, check your video driver. If it is not Microsoft VGA,
	change it and retry. If changing the driver works, be sure to remember to change
	from All Color to Black and Color when doing normal print jobs and to change
	back to All Color for Paintbrush work.
	
	Additional query words: 3.10 3.11 paint brush desk jet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
