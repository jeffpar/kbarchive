---
layout: page
title: "Q85624: How to Disable FaceLift 2.0 in Windows"
permalink: kb/085/Q85624/
---

## Q85624: How to Disable FaceLift 2.0 in Windows

	Article: Q85624
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article outlines methods to turn off, totally disable, or partially disable
	version 2.0 of Bitstream FaceLift for Windows.
	
	MORE INFORMATION
	================
	
	There are four possible ways to modify the performance of FaceLift 2.0 with
	Windows 3.0, 3.0a, and 3.1.
	
	To Turn FaceLift Completely Off
	-------------------------------
	
	1. Choose the FaceLift icon.
	
	2. Select the On/Off/Disabled button until it says Off.
	
	3. Restart Windows.
	
	FaceLift will not be available for the screen or printer, and the FaceLift shell
	drivers for the screen and printer won't load. Any changes made to the WIN.INI
	and SYSTEM.INI files when FaceLift was active are set back to the normal
	settings (or to the settings prior to when FaceLift was loaded).
	
	To Disable FaceLift
	-------------------
	
	1. Choose the FaceLift icon.
	
	2. Select the Disabled option from the On/Off/Disabled button.
	
	The FaceLift screen and printer drivers are still loaded, but FaceLift doesn't
	provide fonts for the screen or printer. The shell drivers will still be listed
	in the WIN.INI and SYSTEM.INI files. Windows does not need to be restarted for
	these changes to take effect.
	
	To Disable FaceLift for a Certain Printer
	-----------------------------------------
	
	1. Choose the FaceLift icon.
	
	2. Choose Printers.
	
	3. Select the printer for which you want to disable FaceLift.
	
	4. Clear the Print With FaceLift check box. If this box isn't selected, Windows
	  print jobs go directly to the Windows printer driver. The FaceLift fonts will
	  not be available for a printer if this box is cleared.
	
	  Disabling FaceLift for a certain printer may be helpful in determining if
	  there is a conflict between FaceLift and the printer driver. You do not need
	  to restart Windows after exiting FaceLift.
	
	To Manually Disable FaceLift
	----------------------------
	
	FaceLift's installation program modifies the SYSTEM.INI and the WIN.INI files. To
	manually disable FaceLift, you must use a text editor, such as Notepad, to
	change the following entries in these files:
	
	SYSTEM.INI
	----------
	
	Change the following entry
	
	  DISPLAY.DRV=SHELLSCR.DRV
	
	to
	
	  DISPLAY.DRV=system display
	
	where "system display" is your display driver. To determine what your display
	driver is, see the DISPLAY.ORG= entry, which indicates what the "original"
	display driver was before FaceLift modified the DISPLAY.DRV= entry.
	
	Change the following entry
	
	  DISPLAY.ORG=system display
	
	to:
	
	  ;DISPLAY.ORG=system display
	
	NOTE: The semicolon (;) comments out the line (that is, it causes Windows to
	ignore the line).
	
	WIN.INI
	-------
	
	The section named [TYPEFACES] should be commented out with semicolons.
	
	For example:
	
	  ;[Typefaces]
	  ;Active=1
	  ;CacheFonts=8
	  ;...and so on
	  ;BTFont1=c:\BTFONTS\CE0630.TDF,C:\BTFONTS\BX000630.SPD
	  ;...and so on
	
	For more information on FaceLift, call Bitstream Technical Support.
	
	FaceLift is manufactured by Bitstream, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 Face lift Fonts win31 unchecked checked 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
