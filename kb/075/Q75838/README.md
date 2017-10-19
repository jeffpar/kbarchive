---
layout: page
title: "Q75838: Setup Changes Mouse Type and Port in SYSTEM.INI"
permalink: /kb/075/Q75838/
---

## Q75838: Setup Changes Mouse Type and Port in SYSTEM.INI

	Article: Q75838
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup may change the settings for the Logitech mouse settings back to the
	default value every time Setup is run to change any other option.
	
	MORE INFORMATION
	================
	
	To demonstrate this, assume you have a computer with a mouse port. The mouse is
	connected to COM1 and is a serial mouse. Assume the settings were
	
	     [LOGIMOUSE]
	     Type=2
	     Port=1
	
	which means a serial mouse was on COM1.
	
	Then, the settings were changed to
	
	     [LOGIMOUSE]
	     Type=1
	     Port=
	
	This change prevents the mouse from working.
	
	To make the mouse work correctly, change the SYSTEM.INI settings to the correct
	settings for the mouse.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
