---
layout: page
title: "Q194996: FS98: Airport/Facility Directory Window Is Black"
permalink: /kb/194/Q194996/
---

## Q194996: FS98: Airport/Facility Directory Window Is Black

{% raw %}

	Article: Q194996
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv fs98 kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an Airport/Facility Directory window, the directory window may be
	black, and you may not see any text.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Window Color setting is set to black in the Display tool in Control
	  Panel.
	- The Riched32.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented:
	
	Change the Window Color Setting
	-------------------------------
	
	Change the Window Color setting from black to any other color. To do this, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Appearance tab.
	
	4. In the Item box, click Window.
	
	5. In the Color box next to Item, click any color but black.
	
	  NOTE: The standard window color is white.
	
	6. Click OK, and then close Control Panel.
	
	If you still do not see any text in the Airport/Facility Directory, proceed to
	the next method.
	
	Extract a New Copy of the Riched32.dll File
	-------------------------------------------
	
	Extract a new copy of the Riched32.dll file to the Windows\System folder.
	
	You can find the Riched32.dll and file in the following locations:
	
	- The Win95_04.cab cabinet file on the Windows 95 CD-ROM
	- The Win95_05.cab cabinet file on the Windows 95 OEM Service Release 2 (OSR2)
	  CD-ROM
	- The Win95_04.cab cabinet file on the Windows 95 DMF disks
	- The Win95_06.cab cabinet file on the Windows 95 non-DMF disks
	
	If you are using Microsoft Windows 98, you can find the Riched32.dll file in the
	following location:
	
	- The Win98_37.cab cabinet file on the Windows 98 CD-ROM
	
	NOTE: If you are prompted to overwrite an existing file, press Y, and then press
	ENTER.
	
	For more information about how to extract files, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	
	Additional query words: msgame fs98 fltsim flt sim fsim dark
	
	======================================================================
	Keywords          : kbdisplay kbenv fs98 kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
