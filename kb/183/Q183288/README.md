---
layout: page
title: "Q183288: Encarta DVD Reference Suite: Problems with Creative Labs DVD Kit"
permalink: /kb/183/Q183288/
---

## Q183288: Encarta DVD Reference Suite: Problems with Creative Labs DVD Kit

	Article: Q183288
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbimu kbHardwarekbfaq
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 DVD-ROM Reference Suite for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta Virtual Globe 1998 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Encarta 98 DVD-ROM Reference Suite on a computer with the Creative
	Labs Encore DVD/MPEG2 kit installed, you may experience the following symptoms:
	
	- When you attempt to start Encarta Virtual Globe 98, you may receive the
	  following error message:
	
	  Please Insert the Virtual Globe CD into the drive and click OK.
	
	- When you use Encarta 98 Encyclopedia to view Virtual Tours, the hot spots in
	  the Virtual Tours window are visible and functional, but the 360-degree views
	  may be completely black.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	  OK.
	
	2. At the command prompt, type the following line, and then press ENTER:
	
	  cd <drive>:\<windows>\system\iosubsys
	
	  where <drive> is the hard disk on which Windows is installed, and
	  <windows> is the folder in which Windows is installed.
	
	3. At the command prompt, type the following line, and then press ENTER:
	
	  ren dxr2udf.vxd dxr2udf.imu
	
	4. At the command prompt, type "exit" (without the quotation marks), and then
	  press ENTER.
	
	
	Additional query words: multi media multi-media mm dxr2 panorama evg
	
	======================================================================
	Keywords          : kberrmsg kbhw kbimu kbHardware kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword4 kbEncartaEncycSearch kbEncartaEnCyc1998 kbEncartaReference98 kbEncartaVirtGlobe98
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
