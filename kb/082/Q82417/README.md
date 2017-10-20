---
layout: page
title: "Q82417: Error Message When Installing Roland MIDI Devices"
permalink: /kb/082/Q82417/
---

## Q82417: Error Message When Installing Roland MIDI Devices

{% raw %}

	Article: Q82417
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install either the Roland LAPC1 or Roland MPU-401 driver from the
	Microsoft Windows Control Panel, the following message is generated:
	
	  Roland MPU-401
	
	  A configuration problem has occurred. Use the drivers option in the Control
	  Panel to reconfigure the MPU-401 driver.
	
	CAUSE
	=====
	
	This error message occurs because the current settings for the Roland device are
	incorrect (you haven't had a chance to set them yet).
	
	This message only appears when either the PORT or IRQ for the Roland device is
	incorrect. After correctly setting them, you will no longer see the message.
	
	RESOLUTION
	==========
	
	Ignore this message during first installation and choose the OK button to
	correctly set the PORT and IRQ settings for the device.
	
	MORE INFORMATION
	================
	
	There are separate entries for the Roland MPU-401 and the Roland LAPC1 in the
	dialog box that appears when you select the Drivers icon from the Control Panel,
	but they actually use the same Windows device driver.
	
	The Roland LAPC1 is comprised of a Roland MPU-401 and a Roland MT-32. Access to
	the LAPC1 is provided using the MPU-401. When installing the Windows driver for
	the LAPC1, the error message is the same as for the MPU-401 because this message
	comes from the Windows device driver MPU401.DRV.
	
	The Roland MPU-401 is a port; it provides similar services as a serial port.
	
	KBCategory: kbmm kb3rdparty
	KBSubcategory: win31 windrvr
	
	Additional query words: 3.10 Roland LAPC1 MPU-401 MPU401 sonic 3.11 control panel setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
