---
layout: page
title: "Q84428: HP DeskJet Printer Driver Support in Windows 3.1"
permalink: /kb/084/Q84428/
---

## Q84428: HP DeskJet Printer Driver Support in Windows 3.1

	Article: Q84428
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
	
	Two printer drivers are available that support the Hewlett-Packard (HP) DeskJet
	family of printers under Microsoft Windows version 3.1. The HP DeskJet family of
	printers includes the HP DeskJet, HP DeskJet Plus, HP DeskJet 500, and HP
	DeskJet 500C. You can use either the HP DeskJet Series printer driver version
	2.1 (DJ500C.DRV) or the Microsoft HP DeskJet printer driver (HPDSKJET.DRV). The
	Microsoft HP DeskJet printer driver is supported by the Microsoft Universal
	Printer Driver (UNIDRV.DLL), which is included with Windows 3.1.
	
	The best driver to select depends on the type of printing and fonts you require.
	Using versions of the HP driver (DJ500C.DRV) earlier than version 2.1 is not
	recommended because these versions were created for use with an earlier version
	of Windows and do not offer TrueType font support.
	
	
	To identify which driver is installed, look at their descriptions in the Control
	Panel. The DJ500C.DRV driver written by Hewlett-Packard (HP) lists the printer
	name as "HP DeskJet Series v 2.x," where "2.x" is either 2.0 or 2.1. The
	HPDSKJET.DRV printer driver provided with Windows 3.1 lists the printer name as
	"HP DeskJet," "HP DeskJet Plus," or "HP DeskJet 500."
	
	MORE INFORMATION
	================
	
	Use the HP DeskJet Series driver version 2.1 if you require support for
	Intellifont format fonts or if you are doing color printing with the DeskJet
	500C. Black and gray scale printing with any member of the HP DeskJet printer
	family is supported by this driver. This driver also includes support for the 14
	TrueType fonts that come with Windows 3.1 and allows TrueType fonts to be
	scaled. The HP series driver version 2.1 comes with three Intellifont format
	fonts(CG Times, Universe, and Courier), which can be scaled. The driver does not
	support font cart- ridges or soft fonts, and offers limited compatibility with
	Windows 3.1 (see #2 below).
	
	The Microsoft HP DeskJet printer driver that ships with Windows 3.1 is the
	recommended driver for TrueType and device font support. This driver supports
	both portrait and landscape printing at 300 dots-per-inch (dpi) resolution for
	the 14 TrueType fonts that come with Windows 3.1, as well as internal, soft, and
	cartridge fonts (with the exception of the K and L cartridges). The Microsoft HP
	DeskJet printer driver does not provide direct support for the DeskJet 500C, but
	you can select the DeskJet 500 driver and print in black to a 500C.
	
	Both the HP DeskJet Series version 2.1 and the Microsoft HP DeskJet printer
	driver can be loaded at the same time in Windows 3.1, but only one driver can be
	active. You can switch between the drivers as required.
	
	The HP DeskJet Series driver version 2.0 for Windows 3.0 that comes with the
	DeskJet 500C will not work with Windows 3.1. You need to upgrade to the HP
	DeskJet Series driver version 2.1 for Windows 3.1. The version 2.1 driver offers
	limited compatibility with Windows 3.1 and is available in the DeskJet library
	(5) of HPPER on CompuServe. Download D5WIN3.ANN for more information.
	
	Known Problems with the HP DeskJet Series Driver Version 2.1
	------------------------------------------------------------
	
	HP has extensively tested the HP DeskJet Series printer driver version 2.1 with
	Windows 3.1. Although the overall test results have been very positive, the
	following problems have been identified when this driver is used with Windows
	3.1:
	
	
	- The printout is smeared when printing from Windows Write. Printing from
	  Windows Write to the DeskJet, DeskJet Plus, or DeskJet 500 with version 2.1
	  of the HP driver will result in a smear at the left margin of the page. To
	  work around this problem, use the Microsoft HP DeskJet printer driver when
	  printing from Windows Write.
	
	- Some fonts in some point sizes are formatted incorrectly. Some decorative
	  fonts (Brush, Dom Casual, Uncial and Park Avenue) and the Windows MS Dialog
	  and MS Serif fonts may not work correctly in certain point sizes. The
	  formatting of these fonts may appear incorrect both on the screen and on the
	  printout. Documents formatted with these fonts may appear to have carriage
	  returns at random positions throughout the text.
	
	- General protection (GP) faults may occur on 80286 systems. Computers with
	  80286 microprocessors may experience occasional GP faults while printing.
	  These GP faults may require the system to be rebooted. This problem occurs
	  with 80286 machines only. If you are using an 80286 machine, use the
	  Microsoft HP DeskJet printer driver.
	
	- Portrait/Landscape icon function. The icon indicating portrait/landscape
	  orientation in the Printer Setup dialog box fails to change when landscape
	  mode is selected. The orientation selection change works properly, but the
	  icon always remains in the portrait position.
	
	
	Additional query words: gpf true type TT desk jet 3.1 grayscale typeface
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
