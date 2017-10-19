---
layout: page
title: "Q152650: Win95 Changes to Full Screen During Inventory Process"
permalink: /kb/152/Q152650/
---

## Q152650: Win95 Changes to Full Screen During Inventory Process

	Article: Q152650
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the logon process, when running the hardware inventory phase on Windows
	95 clients, the inventory window will change to "full screen" mode. This has
	been known to affect screen resolution of notebooks and have an adverse effect
	on touch screen monitors. To prevent this from happening, modify the
	Lmscript.pif file located in the system directory on the client.
	
	1. Using the My Computer icon, select the \Windows\System directory.
	
	2. Find Lmscript.pif, select it and right-click on it.
	
	3. Select Properties.
	
	4. Select Program.
	
	5. Select 'Minimized' from the Run dialog box.
	
	6. Select Apply.
	
	Next time the logon process runs, the logon window will remain minimized on the
	task bar. Consequently, the screen never enters "full screen" mode.
	
	Additional query words: prodsms sms lmscript pif
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
