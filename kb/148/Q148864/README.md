---
layout: page
title: "Q148864: File Conflict Installing IrDA with OEM Service Release 1"
permalink: kb/148/Q148864/
---

## Q148864: File Conflict Installing IrDA with OEM Service Release 1

	Article: Q148864
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Windows 95 Infrared Driver (IrDA) version 1.0 in
	a Windows 95 OEM Service Release 1 installation, a version conflict is reported
	with the Infrared.dll file and you are prompted to keep the existing file.
	
	CAUSE
	=====
	
	Windows 95 OEM Service Release 1 installations already have infrared support
	included. The version number of the Infrared.dll file was changed for OEM
	purposes.
	
	RESOLUTION
	==========
	
	You can safely keep the existing file or overwrite it. Because infrared support
	is already included, there is no difference in functionality.
	
	
	MORE INFORMATION
	================
	
	If Windows 95 was preinstalled on your computer and you have not installed
	Windows 95 Service Pack 1, you can determine whether you have Windows 95 OEM
	Service Release 1 by using the right mouse button to click My Computer and then
	clicking Properties on the menu that appears. If the version number reported is
	4.00.950a, you are using OEM Service Release 1 and you do not need to install
	IrDA or any of the other Windows 95 Service Pack 1 updates or components.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	
	=============================================================================
	
