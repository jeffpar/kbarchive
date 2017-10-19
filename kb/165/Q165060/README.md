---
layout: page
title: "Q165060: Printing a Fax May Produce a Solid Black Page"
permalink: /kb/165/Q165060/
---

## Q165060: Printing a Fax May Produce a Solid Black Page

	Article: Q165060
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:; Win2000:95
	Operating System(s): 
	Keyword(s): kbprint win95
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Microsoft Fax, the document may be printed as a solid black
	page. All other Windows-based programs print correctly.
	
	CAUSE
	=====
	
	There is a issue with Faxview and some older printer drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- If you have a Canon BubbleJet printer, upgrade your printer driver to version
	  3.96 or later. These drivers are available from Canon.
	
	  To check the version of your driver, click Start, point to Settings, click
	  Printers, right-click your printer, click Properties, click the Paper tab,
	  and then click About.
	
	- Remove the existing printer from the Printers folder and move any printer
	  drivers installed for the printer from the Windows or Windows\System folders.
	  Install a current Windows 95 printer driver for your printer.
	
	- You may be able to work around this problem by installing Microsoft Imaging
	  for Windows 95. This replaces the fax viewer and prints faxes correctly.
	
	- Add a Dimond compatible driver. To do this, follow these steps:
	
	  1. Click Start, point to Settings, and then click Printers.
	
	  2. Right-click the printer you want, and then click the Color Management tab.
	
	  3. Click Add, click Dimond Compatible, click Add, and then click OK.
	
	
	MORE INFORMATION
	================
	
	For additional information about Imaging for Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q142327 Imaging for Windows 95 Version 1.0 Readme.txt File
	
	Additional query words: bubble jet bj hp
	
	======================================================================
	Keywords          : kbprint win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95
	
	=============================================================================
	
