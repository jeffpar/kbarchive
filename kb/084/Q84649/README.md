---
layout: page
title: "Q84649: Characters in Menus and Dialog Boxes Corrupt or Truncated"
permalink: kb/084/Q84649/
---

## Q84649: Characters in Menus and Dialog Boxes Corrupt or Truncated

	Article: Q84649
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Missing or misaligned characters in menus or dialog boxes of Windows
	applications running under Windows 3.1 can be caused by a modified
	[FontSubstitutes] section in the WIN.INI file.
	
	MORE INFORMATION
	================
	
	If a Windows application looks for Helv as its font in dialog boxes and that
	font does not exist, the application refers to the [FontSubstitutes] section in
	the WIN.INI file. Normally, MS Sans Serif is substituted for Helv. However, if
	this section has been modified to read Helv=Arial instead of Helv=MS Sans Serif,
	missing or misaligned characters may occur.
	
	The [FontSubstitutes] section should read as follows:
	
	  [FontSubstitutes]
	  Helv=MS Sans Serif
	  Tms Rmn=MS Serif
	  Times=Times New Roman
	  Helvetica=Arial
	
	If the [FontSubstitutes] section is correct as described above, check to see if
	MS San Serif has been installed in Windows 3.1. If it has not been installed,
	the same missing character and misalignment problems occur.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10 3.11 word for windows winword excel cut off corruption garbled
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
