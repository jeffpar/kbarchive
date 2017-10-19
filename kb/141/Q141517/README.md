---
layout: page
title: "Q141517: Obtaining Better Output with the Epson Stylus Driver"
permalink: /kb/141/Q141517/
---

## Q141517: Obtaining Better Output with the Epson Stylus Driver

	Article: Q141517
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is provided by Epson of America.
	
	To obtain the best quality output support using the new updated Epson Stylus
	driver (Version 3.30), please use the following table to adjust the Gamma RGB
	values.
	
	The Recommended values are:
	
	  Resolution   Paper Type   Stylus COLOR   Stylus Pro   Stylus Pro XL
	  -------------------------------------------------------------------
	  360          Plain            1.0            1.0          1.0
	  360          Coated 360 dpi   1.0            1.0          1.0
	  360          Coated 720 dpi   1.5            1.5          1.5
	  720          Coated 720 dpi   1.0            0.7          0.7
	
	To make these modifications please do the following:
	
	The steps outlined are for permanent changes to the Gamma. If you desire to
	change it only on an as needed basis, then make your modifications from your
	Windows Application.
	
	[Per Job Modification]
	
	1. Print Setup
	
	2. Select Properties
	
	3. Choose Halftone
	
	4. Choose Input RGB Gamma
	
	5. Make the modifications based on the table above.
	
	[Permanent Modification]
	
	1. Highlight the Epson Stylus Series driver (Using PrintManager)
	
	2. Select Properties from the Printer Menu
	
	3. Choose Details, Job Defaults, Halftone
	
	4. Choose Input RGB Gamma
	
	5. Make the modifications based on the table above.
	
	The information included here is provided by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the accuracy of the
	information or the output produced.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
