---
layout: page
title: "Q87366: Using WordStar for Windows and Bitstream Facelift"
permalink: /kb/087/Q87366/
---

## Q87366: Using WordStar for Windows and Bitstream Facelift

	Article: Q87366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses issues surrounding using WordStar for Windows with the
	Bitstream Facelift soft font package in Windows. WordStar, Facelift, and Correct
	Grammar for Windows are bundled together.
	
	This article addresses two issues:
	
	- The recommended installation procedure
	
	- Why WordStar says the printer is not installed when loading
	
	MORE INFORMATION
	================
	
	Recommended WordStar with Facelift Installation
	-----------------------------------------------
	
	WordStar technical support recommends the following order when installing these
	packages:
	
	1. Install WordStar for Windows.
	
	2. Install Bitstream Facelift.
	
	3. Install Correct Grammar for Windows.
	
	WordStar Says Printer Not Installed When Loading
	------------------------------------------------
	
	When you first start WordStar with Windows 3.1, you may receive the following
	message:
	
	  The printer driver used to create this document is not currently installed.
	  Do you want to select another printer?
	
	The WordStar templates were created using Bitstream Facelift version 2.2. To
	correct this problem and prevent it from recurring, you should load the
	templates, accept the error message, and resave the templates with the default
	printer driver.
	
	To save the templates with the default printer driver:
	
	1. In WordStar, choose Open from the File menu.
	
	2. Choose the Template button.
	
	3. Select DEFAULT.WST and choose the OK button.
	
	4. From the Edit menu, choose Preferences.
	
	5. Choose the Document button.
	
	6. Select DEFAULT.WST, then choose the Save button.
	
	7. Close WordStar or open a new file.
	
	8. When WordStar asks to save changes to the template, choose the Yes button.
	
	9. Repeat these steps for every template used.
	
	If the Facelift fonts are still not available, then reinstall the printer driver
	and then reinstall Bitstream Facelift.
	
	WordStar, Facelift, and Correct Grammar for Windows are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty gpf gp fault word star
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
