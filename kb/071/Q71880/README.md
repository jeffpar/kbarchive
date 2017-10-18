---
layout: page
title: "Q71880: Cannot Find File _DEFAULT.BAT"
permalink: kb/071/Q71880/
---

## Q71880: Cannot Find File _DEFAULT.BAT

	Article: Q71880
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute _DEFAULT.PIF from File Manager, the following error message is
	displayed:
	
	  Cannot find file, _default.bat
	
	CAUSE
	=====
	
	This is by design.
	
	_DEFAULT.PIF should not be manually executed from anywhere inside Windows. The
	_DEFAULT.PIF file is used automatically for MS-DOS applications that do not have
	a PIF. If changes are made to _DEFAULT.PIF, they are used when MS-DOS
	applications without PIFs are started under Windows.
	
	NOTE: The file referenced in the error message, _DEFAULT.BAT, does not really
	exist. It is a dummy variable used as a placeholder to allow _DEFAULT.PIF to be
	saved (see page 449 in the "Microsoft Windows User's Guide").
	
	MORE INFORMATION
	================
	
	Please refer to page 448 of the "Microsoft Windows User's Guide" for more
	information on PIFs.
	
	Additional query words: 3.00 win30 3.00a program information file
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
