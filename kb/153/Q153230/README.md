---
layout: page
title: "Q153230: ErrMsg: Complete Gardening Cannot Start Your Video Driver"
permalink: /kb/153/Q153230/
---

## Q153230: ErrMsg: Complete Gardening Cannot Start Your Video Driver

{% raw %}

	Article: Q153230
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbmmkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Complete Gardening for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Complete Gardening, you receive the following error
	message:
	
	  Microsoft Complete Gardening cannot start your video driver.
	
	  For information on correcting this, see the Readme.wri file on the product CD
	  or Windows 95 Help.
	
	When you click OK, the program closes.
	
	CAUSE
	=====
	
	The following entry may be missing from the [mci] section of the System.ini
	file:
	
	  avivideo=mciavi.drv
	
	-or-
	
	Motion Video Device (Media Control) is disabled or missing
	
	RESOLUTION
	==========
	
	System.ini Changes
	------------------
	
	Examine the [mci] section of the System.ini file (located in the Windows folder).
	Make sure the following entry exists:
	
	  avivideo=mciavi.drv
	
	If the above entry does not exist or is incorrect, make the necessary changes
	using a text editor such as Microsoft Notepad.
	
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	Enabling the Motion Video Device Driver
	---------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced tab.
	
	4. Click the small plus (+) symbol to the left of Media Control Devices, and
	  then double-click Motion Video Device (Media Control).
	
	  If this device is not listed, see the "To Add the Missing Motion Video Device
	  Driver" section below.
	
	5. Click Use This Media Control Device.
	
	6. Click OK, and then click OK again.
	
	  NOTE: Restarting Windows 95 is not necessary.
	
	Adding the Missing Motion Video Device Driver
	---------------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware, and then click Next.
	
	3. When you are asked if you want Windows to detect your hardware, click No.
	  Then click Next.
	
	4. In the list of Hardware types, click Sound, Video and Game Controllers, and
	  then click Next.
	
	5. In the Manufacturer area, select Microsoft MCI.
	
	6. In the Models area, select Motion Video Device (Media Control).
	
	7. Click Next, and then click Finish. Follow the screen instructions.
	
	8. Restart Windows.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148194 Complete Gardening: Readme.wri Contents
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbmm kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword kbCompleteGardening
	Version           : WINDOWS:1.0,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
