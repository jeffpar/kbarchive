---
layout: page
title: "Q163630: Output on a Tektronix 300i Printer is Less Clear In WinNT 4.0"
permalink: /kb/163/Q163630/
---

## Q163630: Output on a Tektronix 300i Printer is Less Clear In WinNT 4.0

	Article: Q163630
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The same document may appear slightly less clear when printed from Windows NT
	4.0 than when the same document is printed from Windows NT 3.51 to a Tektronix
	300i printer. Similar results have been reproduced in a Tektronix Phaser 540NCLA
	and the Apple Laser Writer driver.
	
	
	CAUSE
	=====
	
	Under Windows NT 4.0, the printer is using the color related options in the PPD
	file.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps to set the printer settings to
	work with the printer hardware defaults:
	
	1. From the Start menu, point to Settings, and then click Printers.
	
	2. Select the Tektronix 300I printer then click Document Defaults from the File
	  menu.
	
	3. Click the Advanced tab, and then select Printer Features under Document
	  Options.
	
	4. Set each printer feature to Use Current Setting in the Printer.
	
	Additional query words: resolution detail fuzzy
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
