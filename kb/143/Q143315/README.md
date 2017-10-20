---
layout: page
title: "Q143315: Unconf.Haunted House: Cirrus Logic Video Drivers Problems"
permalink: /kb/143/Q143315/
---

## Q143315: Unconf.Haunted House: Cirrus Logic Video Drivers Problems

{% raw %}

	Article: Q143315
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbfile kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Haunted House for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start The Ultimate Haunted House on a Windows 3.1x- based
	computer, you may receive a "General Protection Fault" error message.
	
	CAUSE
	=====
	
	This behavior can occur if your display adapter is based on a Cirrus Logic chip
	set and you need to update the video drivers.
	
	RESOLUTION
	==========
	
	To resolve this issue, change your Windows 3.1x video driver to Super VGA (256
	colors). For information about how to change your video driver, please see your
	printed Windows documentation or on-line Help file.
	
	The Super VGA (256 colors) video driver is included with version 3.11 of
	Microsoft Windows and Microsoft Windows for Workgroups. If you have version 3.1
	of Windows or Windows for Workgroups, you may need to download and install the
	Super VGA drivers (Svga.exe) from the Microsoft Software Library. The Svga.exe
	file is available as a free download from the following Microsoft Internet
	sites:
	
	  http://support.microsoft.com/download/support/mslfiles/svga.exe
	
	  ftp://ftp.microsoft.com/softlib/mslfiles/svga.exe
	
	MORE INFORMATION
	================
	
	Versions 1.32 and 1.4 of the Cirrus Logic video display drivers work well with
	The Ultimate Haunted House. Version 1.43 of the Cirrus Logic video driver may be
	incompatible with The Ultimate Haunted House.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbfile kbimu 
	Technology        : kbZNotKeyword kbKidsSearch kbHauntedHouse
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
