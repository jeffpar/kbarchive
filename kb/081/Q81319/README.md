---
layout: page
title: "Q81319: Cannot Print from Windows 3.0, 3.0a Accessory Applications"
permalink: /kb/081/Q81319/
---

## Q81319: Cannot Print from Windows 3.0, 3.0a Accessory Applications

	Article: Q81319
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows accessory applications (Write, Notepad, Paintbrush, and so
	on) cannot print.
	
	CAUSE
	=====
	
	A compressed or otherwise invalid Windows printer driver corresponding to the
	default printer is in the Windows directory.
	
	NOTE: Applications not located in the Windows directory do not demonstrate this
	problem.
	
	For example, if the current default printer is a Hewlett-Packard (HP) LaserJet
	II, and HPPCL.DRV is in the Windows directory in compressed format, none of the
	accessory applications can print. In addition, you can't choose the Setup button
	from the Printer Setup dialog box (on the File menu in each accessory
	application).
	
	RESOLUTION
	==========
	
	Delete the compressed driver file from the Windows directory and make sure an
	uncompressed version is in the Windows SYSTEM directory.
	
	MORE INFORMATION
	================
	
	When this situation occurs, the Windows accessory applications exhibit the
	following symptoms:
	
	Notepad, Cardfile, Calendar
	---------------------------
	
	- The Print command on the File menu is unavailable (dimmed).
	
	- Choosing Printer Setup from the File menu and then choosing the Setup button
	  yields the following error message:
	
	  Cannot find printer or printer driver
	
	Write
	-----
	
	- The Print command on the File menu is unavailable (dimmed).
	
	- Upon opening Write, the following error message immediately appears:
	
	  Cannot print; check to ensure that your printer is installed correctly and
	  your disk has sufficient available space.
	
	- Choosing Printer Setup from the File menu and then choosing the Setup button
	  yields the following error message:
	
	  Cannot use printer; use Setup to install a new printer-driver file.
	
	Paintbrush
	----------
	
	- The Print command in the File menu is unavailable (dimmed).
	
	- When you choose Printer Setup from the File menu, the default printer is
	  omitted from the list of printers.
	
	
	Additional query words: greyed dimmed grey dim disabled inactive 3.0 3.0a accessories gray grayed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
