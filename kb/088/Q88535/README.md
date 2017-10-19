---
layout: page
title: "Q88535: Ports Above LPT3 Must Be Added to the WIN.INI File"
permalink: /kb/088/Q88535/
---

## Q88535: Ports Above LPT3 Must Be Added to the WIN.INI File

	Article: Q88535
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For the ports LPT4 through LPT9 to be active and usable in Microsoft Windows for
	Workgroups, they must be manually added to the [Ports] section of the WIN.INI
	file.
	
	NOTE: Some applications (particularly, MS-DOS-based applications) may not print
	using ports LPT4 through LPT9.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups supports the use of LPT4 through LPT9 for connecting to
	network printers, but you are unable to connect to them unless they are
	referenced in the [Ports] section of the WIN.INI file.
	
	A default WIN.INI file only contains parallel port references up to LPT3. For the
	extra ports to be usable, they must be manually added to the [Ports] section of
	the WIN.INI file.
	
	Adding Extra Ports
	------------------
	
	To add the extra ports, do the following:
	
	1. From the Accessories Group, start Notepad.
	
	2. From the File menu, choose Open.
	
	3. In the File Name box, type
	
	  WIN.INI
	
	  then choose the OK button.
	
	4. From the Search menu, choose Find.
	
	5. In the Find What box, type
	
	  [PORTS]
	
	  then choose the OK button.
	
	6. Use your arrow keys to move down the LPT3:= entry in the [PORTS] section.
	
	7. Press the END key, then press the ENTER key.
	
	8. On the new line, type "LPT4:=" (without the quotation marks), then press
	  ENTER.
	
	9. Repeat step 8 for LPT5 through LPT9.
	
	10. From the File menu, choose Save.
	
	11. From the File menu, choose Exit.
	
	All parallel ports through LPT9 are now available for use.
	
	Additional query words: 3.11 3.10 wfwg limit lptx lpt max maximum number limitation
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
