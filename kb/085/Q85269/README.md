---
layout: page
title: "Q85269: Intensity Control May Cause Gray Images to Print as Black"
permalink: kb/085/Q85269/
---

## Q85269: Intensity Control May Cause Gray Images to Print as Black

	Article: Q85269
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you try to print gray scale graphics images using a Microsoft Windows 3.1
	printer driver, the images may print as black if the Intensity Control under the
	Options dialog box in the printer setup is set towards "darker" on the control
	bar.
	
	To allow these images to print correctly, move the Intensity Control towards
	"lighter" on the bar.
	
	MORE INFORMATION
	================
	
	The Intensity Control increases or decreases the darkness of graphics in a
	printed document. This is part of the Options dialog box that is used to specify
	the fineness of graphics and the darkness and print quality of text. If, when
	setting up the printer driver, the Intensity Control scroll box is too far to
	the left, the graphics may appear to be too dark, to the point that grays and
	blacks on the screen will all print as black.
	
	This option is available from any printer that uses UNIDRV.DLL. This includes
	many of the Windows 3.1 printer drivers, including the Hewlett-Packard (HP)
	DeskJet drivers, and many of the Panasonic and Epson printer drivers.
	
	If your printer has this option you can get to it by doing the following:
	
	1. Select Control Panel from the Main group in Windows.
	
	2. Select the Printers icon.
	
	3. Choose the Setup button, then choose the Options button. The Intensity
	  Control settings should now be available.
	
	  Move the Intensity Control scroll bar with your mouse, or use the TAB key to
	  highlight the box and press the ARROW keys to move the box to the desired
	  intensity settings.
	
	
	Additional query words: 3.10 3.1 darkness printing color WIN31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
