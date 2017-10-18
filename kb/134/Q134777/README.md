---
layout: page
title: "Q134777: Microsoft Plus! Uninstall Interruption Causes Errors Booting"
permalink: kb/134/Q134777/
---

## Q134777: Microsoft Plus! Uninstall Interruption Causes Errors Booting

	Article: Q134777
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you interrupt the Microsoft Plus! for Windows 95 Setup program while it is
	removing all the Plus! components, you may receive the following error message
	when you start your computer later:
	
	  Cannot find a device file that may be needed to run Windows or a Windows
	  application. The Windows registry or SYSTEM.INI file refers to this device
	  file, but the device file no longer exists. If you deleted this file on
	  purpose, try uninstalling the associated application using its uninstall or
	  setup program. If you still want to use the application associated with this
	  device file, try reinstalling that application to replace the missing file.
	  SAGE.VXD. Press any key to continue.
	
	CAUSE
	=====
	
	If you interrupt the Setup program before it finishes, the Plus! registry
	entries may not be removed even though the Plus! files have been removed.
	
	RESOLUTION
	==========
	
	Reinstall Plus!, and then completely remove it using the Add/Remove Programs
	tool in Control Panel.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
