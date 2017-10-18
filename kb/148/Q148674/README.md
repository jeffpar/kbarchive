---
layout: page
title: "Q148674: Err Msg: An Error Occurred While Trying to Remove MS Fury3"
permalink: kb/148/Q148674/
---

## Q148674: Err Msg: An Error Occurred While Trying to Remove MS Fury3

	Article: Q148674
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbusagekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fury 3 for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to remove Fury 3 using Add/Remove Programs option in Windows 95, you
	may receive the following error message:
	
	  An error occurred while trying to remove MS Fury3. Uninstallation has been
	  canceled.
	
	CAUSE
	=====
	
	This occurs when if you already used Windows Explorer to delete the Fury 3
	program files from your hard drive.
	
	The error message occurs because the Fury3 setup files have been removed and
	Windows cannot run the setup routine to properly remove Fury3.
	
	The Add/Remove Program option cannot remove the entry if it does not find the
	program setup files
	
	RESOLUTION
	==========
	
	To remove Fury 3 from the Add/Remove list, you need to reinstall the program.
	This installs the Fury Setup files and allows you to use the Add/Remove Programs
	option to remove Fury files and remove Fury from the Add/Remove Programs list.
	
	Additional query words: 1.00 fury3 fury-3 fury-cubed cubed uninstall uninstaller install installer
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbusage kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbGamesSearch kbZNotKeyword kbFury3
	Version           : WINDOWS:1.0,95
	Issue type        : kbprb
	
	=============================================================================
	
