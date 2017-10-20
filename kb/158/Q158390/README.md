---
layout: page
title: "Q158390: Return of Arcade: Sound Option Is Not Available"
permalink: /kb/158/Q158390/
---

## Q158390: Return of Arcade: Sound Option Is Not Available

{% raw %}

	Article: Q158390
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup kbsound kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Return of Arcade for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Sounds option in Microsoft Return of Arcade may be unavailable, and you may
	be unable to hear sounds when you play any of the games in Return of Arcade.
	
	CAUSE
	=====
	
	This behavior can occur if you run screen savers or anti-virus utilities that
	interfere with the installation of Return of Arcade or DirectX.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the latest version of DirectX.
	
	The latest version of DirectX is available from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx
	
	For more information about how to obtain the latest version of DirectX, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	NOTE: Many DirectX related problems have been resolved in the latest version of
	DirectX. Download the latest version of DirectX or, if you own a game that
	installs a newer version of DirectX, install DirectX from the newer game's
	disc.
	
	If this does not resolve the issue, follow these steps:
	
	Remove Return of Arcade
	-----------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Return of Arcade, and then click Add/Remove.
	
	4. Click Remove All.
	
	5. Close Control Panel.
	
	6. Click Start and then click Run.
	
	7. Type the following line, and then click OK:
	
	  scandisk
	
	8. Click Start. When the test is finished, click Close. If you are prompted to
	  fix any errors on the hard disk, do so.
	
	  NOTE: If more than one hard disk is installed in the computer, repeat this
	  step for each hard disk installed in the computer.
	
	9. Click Close.
	
	Restart Windows in Safe Mode
	----------------------------
	
	Restart Windows in Safe mode. To do this, follow the directions for your version
	of Windows.
	
	Microsoft Windows 95:
	
	Restart the computer. When you see the "Starting Windows 95" message, press the
	F8 key, and then choose Safe Mode from the Startup menu.
	
	Microsoft Windows 98:
	
	Restart the computer, press and hold down the CTRL key after the computer
	completes the Power On Self Test (POST), and then choose Safe Mode from the
	Startup menu.
	
	Reinstall Return of Arcade
	--------------------------
	
	Reinstall Return of Arcade while the computer is running in Safe mode, and then
	restart the computer normally and test the program.
	
	Additional query words: 1.00 roa grayed greyed dimmed
	
	======================================================================
	Keywords          : kbsetup kbsound kbimu kbfaq
	Technology        : kbGamesSearch kbArcadeRet kbZNotKeyword kbArcadeSearch kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
