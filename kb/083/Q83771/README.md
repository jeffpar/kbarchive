---
layout: page
title: "Q83771: Missing .WPD File Causes Incorrect Tray and Size"
permalink: /kb/083/Q83771/
---

## Q83771: Missing .WPD File Causes Incorrect Tray and Size

	Article: Q83771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows 3.1 contains Windows Printer Description files (files with a
	.WPD extension). When a PostScript printer driver (PSCRIPT.DRV version 3.5) is
	used with Windows, if the specific .WPD file is missing or damaged, the
	following default values are used:
	
	Paper Source:   Upper Tray
	               Manual Feed
	
	Paper Size:     Letter 8.5 by 11 inches
	               Legal 8.5 by 14 inches
	               Note 8.5 by 11 inches
	               A4 210 by 297 millimeters
	               B5 182 by 257 millimeters
	               Letter Small 8.5 by 11 inches
	               A4 Small 210 by 297 millimeters
	
	MORE INFORMATION
	================
	
	.WPD files from Windows 3.0 and the Supplemental Driver Library (SDL) are
	ignored by Windows 3.1.
	
	
	Additional query words: 3.10 agfa 9000 PS Compugraphic 400 genics apple laserwriter II NT NTX PlusAST Turbolaser colormate 2250 3250 scriptprinter digital DEClaser linotronic 200 230 printserver 4019 PS17 PS39 4029 II-30 PagePrinter II-31 330 530 630 truelaser silentwriter ibm nec 90 990 lc890 olivetti pg 306 hs 308 qms 800 810 820 colorpoint seiko
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
