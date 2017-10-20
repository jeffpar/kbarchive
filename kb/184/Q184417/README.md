---
layout: page
title: "Q184417: MSN Icon Remains on Taskbar When You Quit MSN Program Viewer"
permalink: /kb/184/Q184417/
---

## Q184417: MSN Icon Remains on Taskbar When You Quit MSN Program Viewer

{% raw %}

	Article: Q184417
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit MSN Program Viewer, you may not disconnect from MSN, The Microsoft
	Network, and the MSN icon may remain on the taskbar.
	
	CAUSE
	=====
	
	This behavior can occur if MSN Program Viewer is not installed correctly.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click MSN Program Viewer Controls, and then
	  click Add/Remove.
	
	4. On the Install/Uninstall tab, click MSN Program Viewer, and then click
	  Add/Remove.
	
	5. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	6. Start Windows 95 by typing "win" (without the quotation marks) and holding
	  down the SHIFT key for the duration of Windows startup. This prevents any
	  programs from loading automatically at startup.
	
	7. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	8. Quit all programs except Explorer and Systray (which are parts of Windows
	  95). To quit a program, click the program, and then click End Task.
	
	9. Repeat steps 3-4 until you have quit all programs except Explorer and
	  Systray.
	
	10. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	11. Insert the MSN 2.0 CD-ROM into the CD-ROM drive. If the Welcome To MSN
	  window opens on the screen, close it.
	
	12. Double-click My Computer.
	
	13. Right-click the CD-ROM drive, and then click Explore.
	
	14. Double-click the Msnsetup folder.
	
	15. Double-click the Compnts folder.
	
	16. Double-click the Coreui.exe file. Follow the instructions on the screen, and
	  accept all default settings.
	
	17. Double-click the Newcore.exe file.
	
	18. Double-click the Controls.exe file. Follow the instructions on the screen,
	  and accept all default settings.
	
	19. Restart the computer.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
