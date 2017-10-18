---
layout: page
title: "Q170527: WD97: Objects Print Incorrectly on Non-Square Resolutions"
permalink: kb/170/Q170527/
---

## Q170527: WD97: Objects Print Incorrectly on Non-Square Resolutions

	Article: Q170527
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,97
	Operating System(s): 
	Keyword(s): kbgraphic kbprint word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert an inline (non-floating) object into a Word document, the object
	may be distorted when printed.
	
	The object may be stretched vertically, squished, or cropped (as though only a
	portion of the object is trying to fill the object's allocated area).
	
	CAUSE
	=====
	
	This problem occurs when the printer is set to a non-square graphics resolution:
	that is, with different values for horizontal and vertical resolution, such as
	600 X 300 dots per inch (dpi).
	
	This problem has been reported to occur with the following printer drivers, that
	print with a non-square resolution:
	
	
	- COMPAQ PAGEMARQ 15 v2012.015
	
	- COMPAQ PAGEMARQ 20 v2012.015
	
	- Digital DEClaser 5100 v2013
	
	- Digital DECcolorwriter 1000 17 fonts v2013.113
	
	- Digital DECcolorwriter 1000 39 fonts v2013.113
	
	- QMS 860+ Print System
	
	- Tektronix Phaser 240 17
	
	- Tektronix Phaser 340 600 dpi
	
	- HP DeskJet 550C (and other DeskJets)
	
	- HP Laserjet 4
	
	- Epson LQ570 (and other dot-matrix printers)
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, use either of the following methods.
	
	Method 1: Change the Print Resolution
	-------------------------------------
	
	To change the printer resolution to a square resolution, such as 300 X 300 dpi,
	follow these steps.
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click the icon of the printer you want to use, and then click
	  Properties on the shortcut menu.
	
	3. On the Graphics tab, choose a square resolution, such as 300 X 300 dpi.
	
	4. Click OK.
	
	NOTE: Not all printers have settings to change print resolutions, and not all
	printers have non-square print resolutions.
	
	Method 2: Convert the Object to a Floating Object
	-------------------------------------------------
	
	1. Click the object to select it.
	
	2. On the Format menu, click <Object> (for example Picture).
	
	3. On the Position tab, click to select the Float Over Text check box, and then
	  click OK.
	
	For more information about converting inline objects to floating objects, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: SR1 release1 8.0 8.00 PS Adobe ACTT Corel Draw Graph Chart HPGL WMF
	
	======================================================================
	Keywords          : kbgraphic kbprint word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbWord95
	Version           : WINDOWS:7.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
