---
layout: page
title: "Q89483: Print Manager Status Bar Reports Share Name Information"
permalink: /kb/089/Q89483/
---

## Q89483: Print Manager Status Bar Reports Share Name Information

	Article: Q89483
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows for Workgroups, the Print Manager status bar for a
	shared printer may report a different printer name than the default printer
	name.
	
	You can correct this by changing the Comment field in the Share Printer As dialog
	in Print Manager, on the Workstation that is sharing the printer.
	
	MORE INFORMATION
	================
	
	When running Windows for Workgroups in 386 enhanced mode, you can share a local
	printer that is physically connected to your computer with others on the
	network. When sharing a printer in Print Manager the status bar may show a
	different printer name than the default printer.
	
	For example, if a Hewlett-Packard (HP) LaserJet IIIsi is being shared, but you
	type HP LaserJet II in the comment field in the Share Printer As dialog in Print
	Manager. The Print Manager status bar will show HP LaserJet II.
	
	Steps to Resolve the Problem
	----------------------------
	
	1. From the Main group, start Print Manager.
	
	2. From the Printer menu, choose Share Printer As.
	
	3. Type the user defined printer name in the Comment field. (This is what will
	  appear as the printer name on other computers.)
	
	4. Choose the OK button.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
