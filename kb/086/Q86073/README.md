---
layout: page
title: "Q86073: Reinstalling a Windows 3.0 Printer Driver in Windows 3.1"
permalink: /kb/086/Q86073/
---

## Q86073: Reinstalling a Windows 3.0 Printer Driver in Windows 3.1

	Article: Q86073
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If printing problems occur in Microsoft Windows 3.1, you may need to reinstall a
	Windows version 3.0 printer driver as a temporary solution.
	
	MORE INFORMATION
	================
	
	Before making any printer changes, make a backup copy of the WIN.INI file, which
	is located in the WINDOWS directory.
	
	Steps to Reinstall a Windows 3.0 Printer Driver in Windows 3.1
	--------------------------------------------------------------
	
	1. Find the Windows 3.0 disk that contains the printer driver, and insert the
	  disk in drive A or B.
	
	2. From Control Panel choose Printers. Select the current Windows 3.1 printer,
	  then choose the Remove button.
	
	3. In File Manager change to the WINDOWS\SYSTEM directory. Select the Windows
	  3.1 printer driver and choose Delete from the File menu.
	
	4. Reinstall the printer driver by running Control Panel and choosing Printers.
	
	  a. Choose the Add button.
	
	  b. Select the Install Unlisted Or Updated Printer option.
	
	  c. Choose the Install button.
	
	5. Instead of installing the Windows 3.1 disk, install the Windows 3.0 disk that
	  contains the appropriate driver.
	
	If there is still a problem, remove any settings from the WIN.INI file that
	reference the Windows 3.1 printer driver.
	
	Additional query words: 3.10 WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
