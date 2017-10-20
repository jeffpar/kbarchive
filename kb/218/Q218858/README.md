---
layout: page
title: "Q218858: USB Device Listed Under the Other Devices Section in Device Mgr"
permalink: /kb/218/Q218858/
---

## Q218858: USB Device Listed Under the Other Devices Section in Device Mgr

{% raw %}

	Article: Q218858
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kbtool kbHardware
	Last Modified: 13-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Device Manager, in the Other Devices category, you may see a Universal Serial
	Bus (USB) device with a question mark icon, and the USB devices that are
	attached to the computer may not work properly.
	
	CAUSE
	=====
	
	This behavior can occur if the USB supplement for Windows 95 Service Release
	(OSR) 2.1 or 2.5 is not installed, or is not installed correctly.
	
	RESOLUTION
	==========
	
	To resolve this behavior, install the USB supplement:
	
	1. Remove the Universal Serial Bus device from the Other Devices category in
	  Device Manager. To remove the device, click it, and then click Remove.
	
	2. Close Device Manager, and then quit all running programs.
	
	3. Install Usbsupp.exe from the the Other\Usb folder on the Windows 95 OSR 2.1
	  or 2.5 CD-ROM.
	
	4. After restarting the computer, verify that the Universal Serial Bus
	  Controller category appears correctly in Device Manager.
	
	Additional query words: kbtshoot osr2 Usbsupp exe
	
	======================================================================
	Keywords          : kbenv kbtool kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
