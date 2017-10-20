---
layout: page
title: "Q186821: Unable to Access CD-ROM with CD-ROM Changer"
permalink: /kb/186/Q186821/
---

## Q186821: Unable to Access CD-ROM with CD-ROM Changer

{% raw %}

	Article: Q186821
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a CD-ROM on your Windows NT-based computer, files on the CD-ROM
	may show a file size of zero bytes. You may also be unable to access any data on
	the CD-ROM.
	
	CAUSE
	=====
	
	This behavior can occur with a CD-ROM changer if the CDaudio device is enabled.
	
	
	RESOLUTION
	==========
	
	To work around this issue, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Devices.
	
	3. Click Cdaudio, and then click Startup.
	
	4. Click Disabled, click OK, and then click Close.
	
	5. Restart your computer.
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
