---
layout: page
title: "Q203771: Encarta Encyclopedia: Error Message When Starting Virtual Tour"
permalink: kb/203/Q203771/
---

## Q203771: Encarta Encyclopedia: Error Message When Starting Virtual Tour

	Article: Q203771
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a Virtual Tour in one of the programs listed at the
	beginning of this article, you may receive an error message similar to one of
	the following
	
	  Enc<99> caused a general protection fault in module Stbv_128.drv.
	
	  Enc<99> caused a general protection fault in module Dibeng.dll.
	
	where <99> is the version year of your program.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- An STB Velocity 128 video adapter is installed in your computer.
	
	- You are using an outdated video driver for the STB Velocity 128 video
	  adapter.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest video driver for the STB
	Velocity 128 video adapter from the following STB Web site:
	
	  http://www.stb.com
	
	NOTE: Microsoft has confirmed that this issue does not occur if you use version
	4.10.01.0182 of the video driver for the STB Velocity 128 video adapter.
	
	MORE INFORMATION
	================
	
	To work around this issue, increase the Windows color palette setting to High
	Color (16-bit). To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click High Color (16-bit).
	
	5. Click OK. If you are prompted to restart the computer, do so.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: multi multi-media media mm ee99 ers99 ee2k ers2k
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaReference99 kbEncartaReference2000 kbEncartaReference2001
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	
