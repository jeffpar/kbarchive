---
layout: page
title: "Q77208: Windows 3.0 Err Msg: Unable to Run Setup for xxxxx Driver..."
permalink: /kb/077/Q77208/
---

## Q77208: Windows 3.0 Err Msg: Unable to Run Setup for xxxxx Driver...

	Article: Q77208
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may receive the following error message when you try to set up your printer
	using Control Panel
	
	  Unable to run setup for xxxxxxxx driver, file is invalid.
	  Please reinstall printer.
	
	were xxxxxxxx represents eight-character printer driver filename.
	
	MORE INFORMATION
	================
	
	This error message can occur if one or more of the following conditions exist:
	
	- The printer driver *.DRV is damaged or was designed to work with an earlier
	  version of Windows (2.x).
	
	- The location of the driver *.DRV is in the Windows directory. The printer
	  driver should be in the Windows SYSTEM directory.
	
	- The printer driver is compressed.
	
	NOTE: Several Windows 2.x applications install incorrect printer drivers in the
	Windows directory when trying to add or replace their own drivers.
	
	WORKAROUND
	==========
	
	Delete the printer driver (.DRV) file in the Windows directory:
	
	1. Verify that the correct printer driver (.DRV) is located in the Windows
	  SYSTEM directory.
	
	2. Delete the incorrect driver located in the WINDOWS directory.
	
	3. Run Control Panel.
	
	4. Choose the Printer icon.
	
	5. Select the printer driver and choose the Configure button.
	
	6. Choose the Remove button.
	
	7. Reinstall the printer driver.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," for version 3.0 pages 158-163
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
