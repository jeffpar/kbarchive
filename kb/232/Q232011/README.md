---
layout: page
title: "Q232011: Error Message Starting Windows 95 OSR2 with Unknown Device"
permalink: /kb/232/Q232011/
---

## Q232011: Error Message Starting Windows 95 OSR2 with Unknown Device

	Article: Q232011
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw osr2 win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are starting your computer, you may be prompted to insert a
	manufacturer's driver disk if an unknown device is detected. If you click Browse
	to locate the .inf file without first inserting the disk, you may experience any
	of the following symptoms:
	
	- You receive an error message with exception code 6 at 0000:00000017 on a blue
	  screen.
	
	- You receive a "Divide by zero" error message.
	
	- You receive an error message with exception code 0D at 0C7A:0000794D.
	
	RESOLUTION
	==========
	
	To prevent this behavior from occurring, use any of the following methods:
	
	- Insert the driver disk before you click Browse.
	
	- Insert the disk after the driver is not found, and then click Back to let
	  Windows locate the driver.
	
	- If you click Other Locations, insert the driver disk and then type "a:"
	  (without the quotation marks) when you are prompted for the path to the
	  driver.
	
	If you do not use any of these methods and you receive an error message, simply
	restart the computer and follow the instructions on the screen.
	
	Additional query words: osr2 osr2.1 osr2.5
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
