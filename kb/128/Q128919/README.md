---
layout: page
title: "Q128919: Resources for Disabled Devices Not Freed Up"
permalink: kb/128/Q128919/
---

## Q128919: Resources for Disabled Devices Not Freed Up

	Article: Q128919
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though you disable a device in your computer's CMOS settings, Windows 95
	enables the device and consumes its resources. Windows 95 may also reinstall a
	device that is removed from Device Manager.
	
	CAUSE
	=====
	
	When Windows 95 starts, it examines the resources supplied by your computer and
	activates them as needed. Windows 95 detects Plug and Play devices regardless of
	the CMOS settings.
	
	RESOLUTION
	==========
	
	To prevent Windows 95 from activating disabled hardware, you must disable the
	hardware in the computer's CMOS settings and remove it from the current
	configuration in Windows 95. This frees the device's resources for other devices
	to use. To disable a device in the current configuration, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab, then double-click the device you want to
	  disable.
	
	4. Click the General tab, then click the Original Configuration (Current) check
	  box to clear it.
	
	5. Click the OK button.
	
	6. Restart Windows 95 when prompted.
	
	7. Disable the device in your computer's CMOS settings. For information about
	  how to disable a device in your computer's CMOS settings, please contact your
	  computer's manufacturer.
	
	Example
	-------
	
	An example of when you might want to disable a device is when you have a
	PS/2-style mouse port in your computer but you are not using a PS/2-style mouse.
	This device appears in Device Manager with an exclamation point in a yellow
	circle, meaning that the device is not working properly.
	
	For additional information about this particular issue, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q126632 Mouse Detected as PS/2-Style or Bus Does Not Work During Setup
	
	MORE INFORMATION
	================
	
	When you disable a device in Device Manager, you must restart your computer
	before you can reassign the device's resources to another device, even though
	you are not prompted to restart Windows 95.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
