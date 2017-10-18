---
layout: page
title: "Q84378: Printer Setup Limitations with Windows 3.1 Automated Setup"
permalink: kb/084/Q84378/
---

## Q84378: Printer Setup Limitations with Windows 3.1 Automated Setup

	Article: Q84378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the Automated mode of Microsoft Windows Setup, the following rules
	apply:
	
	- You can set up no more than 10 printer drivers, counting existing printer
	  drivers installed and new printer drivers being added.
	
	- The string for the name of the printer must match the string in the
	  [io.device] section of the CONTROL.INF file exactly.
	
	- The port name must match the name in the [ports] section of the WIN.INI file
	  exactly, including the colon (:).
	
	Failure to adhere to these rules may result in incorrectly configured printer
	drivers, or printer drivers not being installed.
	
	For more information on running Automated Setup, please page 75 of the Microsoft
	Windows Resource Kit.
	
	The Microsoft Windows Resource Kit is available for $19.95 (plus applicable sales
	tax) and $2.50 shipping and handling. To order, call (800) 642-7676.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
