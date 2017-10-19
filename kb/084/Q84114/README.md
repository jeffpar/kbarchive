---
layout: page
title: "Q84114: Incorrect Extended Characters with Mixed Device and TrueType"
permalink: /kb/084/Q84114/
---

## Q84114: Incorrect Extended Characters with Mixed Device and TrueType

	Article: Q84114
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Windows version 3.1, when you use a Hewlett-Packard (HP) Series II
	or later printer driver supported by the Universal Printer Driver (UNIDRV.DLL),
	incorrect extended characters for device fonts may print on a page where both
	TrueType and device fonts are being used. This does not occur when the Print
	TrueType As Graphics check box is selected in the Options dialog box. (To access
	the Options dialog box, choose the Printers icon in Control Panel, choose the
	Setup button, and choose the Options button.)
	
	RESOLUTION
	==========
	
	An updated version of UNIDRV.DLL, which corrects this problem, is available from
	Microsoft Product Support Services.
	
	MORE INFORMATION
	================
	
	If you use the Microsoft Diagnostics Utility (MSD) to check the Universal
	Printer Driver version, it shows the original UNIDRV.DLL as version 3.10.0.103.
	The version that corrects the extended charter problem is version 3.10.0.104. To
	use MSD to check the UNIDRV.DLL version:
	
	1. Run MSD. (MSD.EXE is located in the Windows program directory.)
	
	2. From the File menu, choose Find File.
	
	3. On the Search For command line, type UNIDRV.DLL.
	
	4. On the Start From command line, type the drive and directory where Windows is
	  located. For example:
	
	  c:\windows\system
	
	5. Choose the Search button to search for the file.
	
	The file version is displayed to the right of the filename.
	
	
	Additional query words: 3.10 true type UNIDRV.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
