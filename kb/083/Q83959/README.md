---
layout: page
title: "Q83959: Misleading Error Message from Embedded Sound Object"
permalink: kb/083/Q83959/
---

## Q83959: Misleading Error Message from Embedded Sound Object

	Article: Q83959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you do not have a sound driver installed and you try to activate an embedded
	sound object, Windows 3.1 displays a misleading error message. The message says
	that the device is being used by another application instead of saying that no
	device is installed.
	
	MORE INFORMATION
	================
	
	You receive the following error message if you try to activate an embedded sound
	object from an object-linking-and-embedding (OLE) client document (for example,
	Microsoft Windows Write) and no sound driver is installed:
	
	  This device is being used by another application. Either interrupt this
	  application or wait until the device is free and then try again.
	
	If this message appears, run the Sound Recorder. A more accurate error message
	will display as follows:
	
	  Sound Recorder cannot record or play back because a sound driver is not
	  installed. Use the Driver option in Control Panel to install a driver.
	
	Additional query words: 3.10 3.11 wave
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
