---
layout: page
title: "Q88771: Using the IBM 4019 with Windows"
permalink: /kb/088/Q88771/
---

## Q88771: Using the IBM 4019 with Windows

	Article: Q88771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The IBM 4019 Laser printer (also know as Lexmark 4019) is compatible with
	Microsoft Windows 3.1. The following functionality and issues apply to its use
	with Windows 3.0, 3.0a, and 3.1 (except where noted):
	
	- IBM 4019 Emulation Settings
	
	- New IBM Driver for Windows 3.0
	
	- IBM Font Installer Duplicates ALT+A Accelerator in Windows 3.0
	
	- Support for the IBM Print Sharing Device
	
	- Print TrueType as Graphics in Windows 3.1
	
	MORE INFORMATION
	================
	
	IBM 4019 Emulation Settings
	---------------------------
	
	The IBM 4019 laser printer supports the following emulations:
	
	- IBM Personal Printer Data Stream (PPDS) (ASCII)
	
	  To use this mode, press and hold the PAPER button when you turn on the
	  printer.
	
	- Hewlett-Packard (HP) LaserJet Series II
	
	  To use this mode, press and hold the FONT button when you turn on the printer.
	
	- Plotter emulation (IBM 7372, HP 7475a color plotters
	
	  To use this mode, press and hold the ORIENTATION button when you turn on the
	  printer.
	
	- PostScript mode
	
	  To use this emulation, you must purchase and install the IBM 17 or 35
	  PostScript Font upgrade. For Windows 3.0, the driver is available on the
	  Supplemental Driver Library (SDL). Windows 3.1 comes with the 4019 PostScript
	  drivers. To use this mode, press and hold both the PAPER and the FONT buttons
	  when you turn on the printer.
	
	  To confirm the mode you are in, press the ORIENTATION button when the printer
	  is online. A number appears in the status window:
	
	  1 = PPDS, 2 = HP LaserJet, 3 = Plotter, 4 = Postscript
	
	New IBM Driver for Windows 3.0
	------------------------------
	
	The most current Windows driver for the 4019 is available from Lexmark by calling
	(606) 232-3000. The 4019.DRV is dated 3/7/91. This driver corrects problems that
	may occur when you print from version 1.1 of Word for Windows.
	
	IBM Font Installer Duplicates ALT+A Accelerator in Windows 3.0
	--------------------------------------------------------------
	
	The Windows 3.0 printer driver for the 4019 has a built-in Font Installer. This
	installer duplicates the ALT+A accelerator key. To work around this problem, use
	the mouse or the TAB key to navigate the dialog box.
	
	Support for the IBM Print Sharing Device
	----------------------------------------
	
	Windows does not support the IBM Print Sharing Device. This device has a timeout
	setting that should be set to its maximum of 60 seconds. This may help Windows
	to print. For more information on troubleshooting print sharing devices, query
	on the following words in the Microsoft Knowledge Base:
	
	  "electronic" (without the quotation marks) and "print" (without the quotation
	  marks) and "share" (without the quotation marks) and "tshoot" (without the
	  quotation marks)
	
	Print TrueType as Graphics in Windows 3.1
	-----------------------------------------
	
	The 4019 requires that the Print TrueType As Graphics box be selected.
	
	
	Additional query words: 3.10 3.00 3.00a 3.0 3.0a 3rdparty w4wprint w_winword delay 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
