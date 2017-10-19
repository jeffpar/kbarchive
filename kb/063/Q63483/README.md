---
layout: page
title: "Q63483: Setup Does Not Install Dot-Matrix Font Sets in Windows 3.0"
permalink: /kb/063/Q63483/
---

## Q63483: Setup Does Not Install Dot-Matrix Font Sets in Windows 3.0

	Article: Q63483
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows 3.0 Setup program does not automatically install the
	appropriate fonts when a dot-matrix printer is chosen.
	
	If the proper font set is not installed, you will receive low-quality print
	output when using these fonts (that is, Helvetica, Times Roman, or Courier) in
	applications for Windows.
	
	To work around this problem, install the proper font set manually by using the
	Control Panel Fonts section.
	
	MORE INFORMATION
	================
	
	Fonts for 9-Pin Dot-Matrix Printers
	-----------------------------------
	
	Most 9-pin dot-matrix printers use a resolution of 120 x 72 dots per inch (dpi).
	For this resolution, install the "D" font set. This set includes HELVD.FON,
	TMSD.FON, and COURD.FON. For font installation instructions, see the "Microsoft
	Windows User's Guide" version 3.0 manual. Once installed, the fonts should
	appear in the Control Panel Fonts section as follows:
	
	  Helv 8,10,12,14,18,24 (120 dpi)
	  Courier 10,12,15 (120 dpi)
	  Tms Rmn 8,10,12,14,18,24 (120 dpi)
	
	If you want to print in the much lower 60 x 72 dpi resolution that is optional on
	some 9-pin printers, you may want to install the "C" font set as well.
	
	Fonts for 24-Pin Dot Matrix Printers
	------------------------------------
	
	24-pin dot-matrix printers normally print at 180 x 180 dpi resolution, which is a
	1:1 aspect ratio -- the same as a VGA or 8514/A display. This means that 24-pin
	dot-matrix printers print using the VGA or 8514/A font sets (sets "E" and "F"
	respectively).
	
	Since the VGA font set is designed for a 96 dpi resolution, it will give fonts at
	approximately half the stated size for a 180 x 180 dpi dot-matrix printer.
	Similarly, the 8514/A fonts are designed for a 120 dpi resolution, and will
	print at 2/3 the stated size at 180 x 180 dpi. If the 24-pin printer resolution
	is raised to 360 x 360, VGA fonts will print at 1/4 size, and 8514/A fonts at
	1/3 size.
	
	If you change the 24-pin dot-matrix resolution to an aspect ratio that is not 1:1
	(for example, 360 x 180 dpi), you will not achieve satisfactory output using
	nonprinter fonts from Windows.
	
	24-Pin Dot Matrix with VGA or 8514/A Displays
	---------------------------------------------
	
	If you have a VGA display and a 24-pin dot-matrix printer, the proper font set is
	already installed. However, you may want to also install the 8514/A font set,
	which will give you some additional font sizes. Likewise, if you have an 8514/A,
	you may want to install the VGA font set.
	
	24-Pin Dot-Matrix Printers with EGA/Hercules or Other Displays
	--------------------------------------------------------------
	
	If you have an EGA, Hercules, or other display type, and a 24-pin dot-matrix
	printer, you will get low-quality output using nonprinter fonts (that is,
	Helvetica, Times Roman, or Courier) if the proper font set is not installed. You
	should install at least the VGA font set (set "E") for proper output. You may
	also want to install the 8514/A font set (set "F") as discussed in the section
	above.
	
	Installation Procedure
	----------------------
	
	1. Start Control Panel from the Main group in Program Manager.
	
	2. Choose the Fonts icon.
	
	3. Choose the Add button.
	
	4. Insert Disk 4 (5.25-inch disks) or Disk 5 or 6 (3.5-inch disks) in drive A.
	
	5. When prompted for the font filename, enter "A:*.FON" (without the quotation
	  marks).
	
	6. Look for the following filenames in the font files displayed:
	
	  COURD.FON
	  TMSRD.FON
	
	7. Select the appropriate font file and choose the OK button.
	
	Additional Information
	----------------------
	
	Under Windows versions 2.0, 2.03, 2.1, and 2.11, if you select a 9-pin dot-matrix
	printer when installing Windows, Setup automatically installs the proper font
	set. This allows you to produce high-quality print output using the Windows
	Helvetica, Times Roman, and Courier fonts.
	
	This change of behavior in Windows version 3.0 is by design for two reasons.
	First, the use of 9-pin dot-matrix printers has considerably declined since
	Windows versions 2.0, 2.03, 2.1, and 2.11 were produced. Second, the exclusion
	of such a feature was necessary to complete the development of the Windows 3.0
	Control Panel in time to ship the product.
	
	Additional query words: 3.00 3.0 3.00a dot matrix win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
