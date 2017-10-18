---
layout: page
title: "Q162705: Incorrect Colors Printed on HP Laserjet Color 5"
permalink: kb/162/Q162705/
---

## Q162705: Incorrect Colors Printed on HP Laserjet Color 5

	Article: Q162705
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a document or slide from Word 7.0 or PowerPoint 7.0 to a HP
	Laserjet Color 5 printer, the colors on the printout do not match the colors in
	Word or PowerPoint.
	
	CAUSE
	=====
	
	This problem is caused by text and graphics merging. Rasdd.dll, which deals with
	printer languages based on raster (bitmap) images, has an inherent Z ordering
	problem.
	
	
	RESOLUTION
	==========
	
	Enabling the "Print Text as Graphics" option will fix this problem. To enable
	this option, perform the following steps:
	
	1. In the Printers folder, select the color Laserjet printer.
	
	2. On the File menu, click Document Defaults.
	
	3. Click the Advanced tab then click to select the "Print Text as Graphics"
	  option.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
