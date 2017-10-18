---
layout: page
title: "Q69840: Windows Err Msg: Maximum Number of Printers Already Installed"
permalink: kb/069/Q69840/
---

## Q69840: Windows Err Msg: Maximum Number of Printers Already Installed

	Article: Q69840
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Printers option in Control Panel allows a maximum of 15 printer drivers to
	be installed. If you reach this limit, the following message is displayed:
	
	  Maximum number of printers already installed
	
	During Windows installation, there is a limit of eight printer drivers that can
	be installed. However, after initial setup, you can install a total of 15
	printer drivers. An attempt to install more than 15 results in the message noted
	above.
	
	MORE INFORMATION
	================
	
	The above error message can also be caused by a corrupted WIN.INI file. For
	instructions about how to rebuild the WIN.INI file, query on the following words
	in the Microsoft Knowledge Base:
	
	  create and win.ini and without and third-party
	
	You can install more than 15 printers by choosing the Add button and selecting
	Unlisted Printer Or Updated Printer in the List Of Printers box.
	
	Microsoft cannot guarantee the reliability of Windows if more than 15 printers
	are installed. If the WIN.INI file exceeds the maximum size, you may experience
	system crashes or data loss. In addition, some third-party Windows-based
	applications may not be able to handle large WIN.INI files, or may cause general
	protection (GP) faults because of the excessively large [PrinterPorts] section.
	
	Additional query words: gpf 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11 win31 win30 fault windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
