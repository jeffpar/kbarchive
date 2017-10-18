---
layout: page
title: "Q84641: Installation Error with Sound Blaster Pro Driver from WRK"
permalink: kb/084/Q84641/
---

## Q84641: Installation Error with Sound Blaster Pro Driver from WRK

	Article: Q84641
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an attempt to install the Creative Sound Blaster Pro Wave and MIDI driver
	from the Microsoft Windows Resource Kit version 3.1 for Microsoft Windows
	operating system version 3.1, the following message may appear:
	
	  The old driver is still being used by Windows. You must quit and restart
	  Windows before you can add the updated driver.
	
	CAUSE
	=====
	
	This message will appear if the driver was previously installed and removed from
	the Drivers portion of Control Panel.
	
	RESOLUTION
	==========
	
	To properly reinstall the Sound Blaster driver, delete the SBPMIXER.CPL file
	from the \WINDOWS\SYSTEM directory, then do the following:
	
	1. Run Control Panel.
	
	2. Choose the Drivers icon.
	
	3. Choose the Add button.
	
	4. From the List Of Drivers box, select Unlisted Or Updated Driver and choose
	  the OK button.
	
	5. Insert the Windows Resource Kit disk in the specified drive or change the
	  drive letter, then choose the OK button.
	
	6. Select the Creative Sound Blaster Pro Wave And MIDI driver, then choose the
	  OK button.
	
	7. Choose the Restart Now button.
	
	Additional query words: wrk 3.10 3.11 3rdparty soundblaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
