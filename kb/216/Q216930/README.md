---
layout: page
title: "Q216930: Unable to Update Driver With Files in the Root Folder"
permalink: /kb/216/Q216930/
---

## Q216930: Unable to Update Driver With Files in the Root Folder

	Article: Q216930
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbtool win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Update Device Driver wizard to update a driver and you
	click Other Locations to browse to a folder, you may be unable to click OK, or
	you may receive the following error message:
	
	  The selected location does not contain an updated driver for your device.
	
	  To continue using your current driver, click Finish. To search for an updated
	  driver manually, click Other Locations. Or to begin the automatic search
	  again, click Back.
	
	CAUSE
	=====
	
	This problem can occur if you are trying to browse to an updated driver file
	that is located in the root folder of your local hard disk, or the root folder
	of a mapped network drive. Note that this behavior does not occur if the file is
	in the root folder of drive C.
	
	RESOLUTION
	==========
	
	To work around this problem, move the updated driver files from the root folder
	to a different folder, or the root folder of drive C before you try to use the
	Update Device Driver wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem is resolved in Microsoft Windows 98.
	======================================================================
	Keywords          : kberrmsg kbhw kbtool win95 kbHardware 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
