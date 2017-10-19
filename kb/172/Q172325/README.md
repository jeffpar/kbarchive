---
layout: page
title: "Q172325: WD97: Color Pattern Borders Print Incorrectly on Some Printers"
permalink: /kb/172/Q172325/
---

## Q172325: WD97: Color Pattern Borders Print Incorrectly on Some Printers

	Article: Q172325
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print a document with color borders, some colors may be missing, or the
	border may print as black and white.
	
	WORKAROUND
	==========
	
	Changing the dithering setting may improve the print quality of some printers.
	
	NOTE: The method for changing the dithering setting varies with the operating
	system and the version of the printer driver that you are using.
	
	In Microsoft Windows 95, follow these steps to change the dithering setting:
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Right-click the printer icon, for example, the HP Color LaserJet icon, and
	  then click Properties on the shortcut menu.
	
	3. Click the Graphics tab.
	
	4. Under Dithering, click Coarse or Fine and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following printers are known to exhibit this behavior.
	
	HP Color LaserJet (MS) Driver, Version 3.78 (released with Windows 95)
	----------------------------------------------------------------------
	
	Comments: Bad dithering; color border on screen is printed as different colors on
	paper.
	
	HP DJ 1200C PostScript Driver, Version 4.00 and HP1200C1.PPD
	------------------------------------------------------------
	
	Comments: Colored pattern borders are printed as black and white.
	
	Desk Writer 560C driver 6.0 from Apple
	--------------------------------------
	
	Comments: Bad dithering; color border on screen is printed as different colors on
	paper.
	
	Canon Bubble-Jet BJC 600e, Version 3.2 (released with Win 95)
	-------------------------------------------------------------
	
	Comments: Colored pattern borders print as black & white.
	
	For additional information about problems printing color images, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q169787 WD97: Some Colors Missing From DIB Images w/HP LaserJet
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kb3rdparty kbprint word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
