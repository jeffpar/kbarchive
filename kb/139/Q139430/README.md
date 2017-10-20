---
layout: page
title: "Q139430: Hardware Detection Hangs with Videostar Pro Capture Card"
permalink: /kb/139/Q139430/
---

## Q139430: Hardware Detection Hangs with Videostar Pro Capture Card

{% raw %}

	Article: Q139430
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the hardware detection portion of Setup from within Windows
	95, or when you use the Automatically Detect Installed Hardware option in the
	Add New Hardware Wizard, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if you have a Diamond Videostar Pro video capture card
	with a built-in MJPEG daughter card installed and you run a video capture
	session before you run the hardware detection routine.
	
	When this occurs, the hardware detection routine does not detect the video
	adapter driver in memory, causing certain memory areas to be overwritten.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods:
	
	- Do not run a video capture session before running the hardware detection
	  routine.
	
	- If your computer hangs during Setup, turn it off, wait a few seconds, turn it
	  back on, run Setup again, and choose Safe Recovery when you are prompted.
	
	- Contact Diamond Multimedia Systems, the manufacturer of the Videostar Pro
	  capture card, for information about using this card with Windows 95.
	
	MORE INFORMATION
	================
	
	This problem does not occur if you run Windows 95 Setup from MS-DOS because the
	video driver is not resident in memory.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
