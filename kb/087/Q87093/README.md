---
layout: page
title: "Q87093: Adding Windows 3.0 Support for Unlisted HP Printer Cartridges"
permalink: /kb/087/Q87093/
---

## Q87093: Adding Windows 3.0 Support for Unlisted HP Printer Cartridges

	Article: Q87093
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you are using Microsoft Windows version 3.0 and you have a Hewlett- Packard
	(HP) font cartridge (for example, Pretty Faces) that is not listed in the
	Cartridges box of the printer setup dialog box, you can add support for this
	cartridge as described in this article.
	
	MORE INFORMATION
	================
	
	Follow these steps to add support for your HP font cartridge:
	
	1. Quit Windows. (Do not use the MS-DOS Prompt icon to exit Windows.)
	
	2. Your HP font cartridge includes AUTOFONT Support disks that contain character
	  widths and other font information your software will use to format text.
	
	  a. Insert AUTOFONT Support Installer/Metrics disk 1 in drive A.
	
	  b. Type "A:AUTOFONT" (without the quotation marks) and press ENTER.
	
	  c. Follow the screen prompts to install the .TFM files for your cartridge.
	
	3. Start Windows. Run Control Panel, and choose the Printers icon.
	
	4. Make sure an HP LaserJet family printer is active in the Installed Printers
	  box.
	
	5. Choose the Configure button.
	
	6. Choose the Setup button.
	
	  NOTE: If you are using a LaserJet III printer, choose the About button to find
	  out the version number of your Microsoft PCL/HP LaserJet driver. If it is not
	  version 3.7 or later, you will have to order an updated driver from the
	  Hewlett-Packard Driver Distribution Center at (303) 353-7650. If your driver
	  is recent enough, choose the OK button to return to the Setup window.
	
	7. Choose the Fonts button.
	
	8. Choose the Add Fonts button.
	
	9. Type "C:\AUTOFONT" (without the quotation marks) as the source drive and
	  directory. (If you have installed the AutoFont Support files onto another
	  drive, indicate the correct path.) Choose the OK button.
	
	10. The HP Font Installer reads the AUTOFONT directory and displays the name of
	  your cartridge in the box on the right. Select the name and choose the Add
	  button.
	
	11. Choose the OK button if you want to accept the default destination drive and
	  directory for your printer font metrics. If you want to store them
	  elsewhere, enter the new path.
	
	12. When the HP Font Installer finishes adding the cartridge name to the box on
	  the left, choose the Exit button to return to the Setup dialog box.
	
	13. Select the name of your cartridge in the Cartridges box and choose the OK
	  button.
	
	14. Choose the OK button until you return to the Control Panel window. You can
	  now select your new HP bitmapped cartridge fonts from within a Windows 3.0
	  application.
	
	  NOTE: The Cartridges box does not come with screen fonts, so Windows displays
	  its own representative screen fonts.
	
	
	Additional query words: HPLJ HPIII HPII HPIID HPIIP HPIIISI HPIIID HPIIIP LJ III II IID IIP IIISI IIID IIIP 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
