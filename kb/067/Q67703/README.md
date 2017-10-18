---
layout: page
title: "Q67703: Setup Does Not Detect That Windows 3.0 Is Already Installed"
permalink: kb/067/Q67703/
---

## Q67703: Setup Does Not Detect That Windows 3.0 Is Already Installed

	Article: Q67703
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to change Windows' configuration and you are NOT logged into the
	Windows directory (where the SETUP.EXE resides) before you start Windows 3.0
	SETUP.EXE, the Setup program does not detect that Windows 3.0 is already
	installed and does not display the current Windows configuration as you would
	expect. Instead, Setup begins installing a new copy of Windows 3.0.
	
	To change the Windows configuration, log into the Windows directory from MS-DOS
	before running SETUP.EXE
	
	MORE INFORMATION
	================
	
	The "Microsoft Windows User's Guide" for version 3.0 provides instructions on
	how to install new Windows device drivers on page 564 under "To install a device
	driver not supplied with Windows." Step 1 is correct but does not specify that
	you must be in the Windows directory after exiting Windows in order for Setup to
	display the list of the current Windows configuration as expected in step 2.
	
	Additional query words: 3.00 3.00a documentation error docerr win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
