---
layout: page
title: "Q185067: &quot;Fatal Exception 0D at 0327:00004DE4&quot; on HP Vectra VL5"
permalink: /kb/185/Q185067/
---

## Q185067: &quot;Fatal Exception 0D at 0327:00004DE4&quot; on HP Vectra VL5

	Article: Q185067
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a program that requires your computer to restart on
	a Hewlett-Packard (HP) Vectra VL5 computer, you may receive the following error
	message:
	
	  WINDOWS: A fatal error OD has occurred at 0327:00004DE4. The current
	  application will be terminated.
	
	When this occurs, you must press CTRL+ALT+DELETE or restart your computer to
	continue.
	
	CAUSE
	=====
	
	This behavior can occur if the original S3 Trio64 V.2 display adapter driver
	included with the computer is installed.
	
	The following programs, if they run in the background, may also contribute to
	this behavior:
	
	- Lotus cc:Mail
	
	- Lotus Organizer 97
	
	- HP TopTools program
	
	- Microsoft Office 95 Find Fast
	
	- Microsoft Office 97 Find Fast
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the latest video drivers (dated 03/02/98 or later)
	from S3.
	
	To work around this issue, use one of the following methods:
	
	- Quit any of the programs listed in the "Cause" section of this article.
	
	- Remove Universal Serial Bus (USB) support.
	
	- Disable the video driver for your display adapter.
	
	Try each workaround in sequence until you can install the program successfully.
	
	Quit Open Programs
	------------------
	
	1. Press CTRL+ALT+DELETE.
	
	2. Click one of the programs listed in the "Cause" section, and then click End
	  Task.
	
	Remove USB Support
	------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, click USB Supplement To OSR2 on the
	  Install/Uninstall tab, and then click Add/Remove.
	
	3. Restart your computer when you are prompted.
	
	Disable the Video Driver
	------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click Device Manager.
	
	3. Double-click the Display Adapters branch to expand it, click S3 Trio 64 V.2,
	  and then click Properties.
	
	4. Click the Disable In This Hardware Profile check box to select it, and then
	  click OK.
	
	5. Click Yes when you are prompted to restart your computer.
	
	Additional query words: shutdown
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
