---
layout: page
title: "Q70773: Optimizing Use of PCL Soft Fonts in Windows 3.0"
permalink: /kb/070/Q70773/
---

## Q70773: Optimizing Use of PCL Soft Fonts in Windows 3.0

	Article: Q70773
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses how you can optimize the use of PCL soft fonts in
	Microsoft Windows 3.0. This article describes how you can minimize the amount of
	disk space used by soft fonts and how you can improve the speed of printing
	documents using soft fonts.
	
	MORE INFORMATION
	================
	
	Printer Fonts
	-------------
	
	To reduce the amount of disk space and printer memory taken up by soft fonts,
	Microsoft recommends that only the following typographic soft font range be
	installed:
	
	  6,7,8,9,10,11,12,14,18,24,30,48,60,72
	
	To further save the amount of disk space and printer memory taken up by soft
	fonts, the following suggestions are made:
	
	1. Load only point sizes that will normally be used in a given font style. For
	  example, for Helv install:
	
	  a. 11 point for body text
	
	  b. 9 point for headers and footers
	
	  c. 14, 24, or 30 point bold for subheads and headlines
	
	  -or-
	
	  Choose one footnote size (recommended = 6 point)
	  Choose three body text sizes (recommended = 8, 10, 12 point)
	  Choose four headline sizes (recommended = 14, 24, 30, 72 point)
	
	2. Generate normal and italic for all point sizes.
	
	3. Generate bold points sizes equal or greater than 14 point. At lower point
	  sizes, the PCL driver can simulate bold text effectively. If the central use
	  of bold is for headlines, then the starting point size may be changed to 24
	  point.
	
	4. Avoid loading bold italic fonts because they are seldom used. The PCL driver
	  can simulate bold italic.
	
	5. Character sets also should be limited. If special characters (that is, the
	  bullet, accent marks) are not used in documents, then use the USASCII
	  character set. If these special characters are needed, then use Windows ANSI,
	  ECMA-94, or Roman-8 character sets (in order of preference).
	
	6. Use Windows ANSI, ECMA-94, Roman-8 for point sizes below 14 points and
	  USASCII for 14 point and above. USASCII contains half as many special
	  characters, and therefore takes up half the space of the others.
	
	Screen Fonts
	------------
	
	When selecting to install screen fonts to match up with the PCL soft font that
	have been installed, do not load screen fonts for Tms Rmn, Helv, or Courier.
	Windows already provides these screen fonts.
	
	Screen fonts that use system memory may slow the overall performance of Windows.
	Microsoft recommends installing only the following shortened typographic range
	of screen fonts in normal face only: 8, 9, 10, 12, 14, 18, and 24.
	
	Screen fonts are sized and modified by the screen driver to provide normal, bold,
	italic, and bold italic from one screen font. If bold or italic are installed,
	the corresponding normal face must also be installed. Otherwise, bold or italic
	will be displayed when normal was intended.
	
	The process of selection that an application and screen driver use may not select
	the intended screen font installed for a particular printer font. Screen fonts
	are selected by the contents of the header information in the font files by the
	application and the screen driver. The screen font that provides the "best
	match" according to the header information of the file will be used by the
	application.
	
	REFERENCES
	==========
	
	"Microsoft Windows Device Development Kit: Printers and Fonts Kit," pages 12-1 -
	12-4.
	
	
	Additional query words: 3.00 3.00A win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
