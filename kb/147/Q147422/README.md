---
layout: page
title: "Q147422: Multimedia Err Msg: Not Enough Memory to Start Program"
permalink: kb/147/Q147422/
---

## Q147422: Multimedia Err Msg: Not Enough Memory to Start Program

	Article: Q147422
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Oceans or Microsoft World of Flight, you may
	receive the following error message:
	
	  Not enough memory to start program. Exiting now.
	
	CAUSE
	=====
	
	This error message can occur if the Motion Video Device [Media Control] is not
	installed or is not enabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the Motion Video Device. To do this, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware.
	
	3. Click Next, click No, and then click Next.
	
	  NOTE: If you are using Windows 98, click Next, click Next, click No, and then
	  click Next.
	
	4. In the Hardware Types box, click Sound, Video And Game Controllers, and then
	  click Next.
	
	5. In the Manufacturers box, click Microsoft MCI. In the Models box, click
	  Motion Video Device [Media Control], and then click Next.
	
	6. Click Finish. If you are prompted to restart the computer, do so.
	
	To enable the Motion Video Device, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia, and then click the Advanced or Devices tab.
	
	3. Double-click Media Control Devices to expand the branch.
	
	4. Click Motion Video Device [Media Control], and then click Properties.
	
	5. Click Use This Media Control Device.
	
	6. Click OK, and then click OK.
	
	7. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Oceans version 1.0 and
	Microsoft World of Flight version 1.0.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword kbKidsSearch kbWorldofFlight kbOceans
	Version           : WINDOWS:1.0,95
	
	=============================================================================
	
