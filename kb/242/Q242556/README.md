---
layout: page
title: "Q242556: AoE II Err Msg: A Required .dll File, Dplayx.dll, Was Not Found"
permalink: /kb/242/Q242556/
---

## Q242556: AoE II Err Msg: A Required .dll File, Dplayx.dll, Was Not Found

{% raw %}

	Article: Q242556
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires II Expansion: The Conquerors 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Age of Empires II: The Age of Kings or Microsoft Age
	of Empires II Expansion: The Conquerors, you may receive the following error
	message:
	
	  A required .dll file, Dplayx.dll, was not found.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft DirectPlay 6.1a or later is not installed
	on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall Age of Empires II Expansion (if
	it is installed), Age of Empires II, and DirectPlay 6.1a. To do this:
	
	1. Quit all programs that are running on your computer.
	
	2. If Age of Empires II Expansion is not installed on your computer, proceed to
	  step 8.
	
	  If Age of Empires II Expansion is installed on your computer, insert the Age
	  of Empires II Expansion CD-ROM into the CD-ROM drive. Press and hold down the
	  SHIFT key as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	3. Click Start, point to Settings, and then click Control Panel.
	
	4. Double-click Add/Remove Programs.
	
	5. On the Install/Uninstall tab, click "Microsoft Age of Empires II Expansion,"
	  and then click Add/Remove.
	
	6. Follow the instructions on the screen to remove Age of Empires II Expansion.
	  When you are prompted to delete user-created files, click No to keep your
	  saved games, scenario and campaign files, and custom AI scripts.
	
	7. Eject the Age of Empires II Expansion CD-ROM.
	
	8. Insert the Age of Empires II CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key as you insert the CD-ROM to prevent the program from
	  starting automatically.
	
	9. In the Add/Remove Programs dialog box, click "Microsoft Age of Empires II,"
	  and then click Add/Remove.
	
	10. Follow the instructions on the screen to remove Age of Empires II. When you
	  are prompted to delete user-created files, click No to keep your saved
	  games, scenario and campaign files, and custom AI scripts.
	
	11. In the Add/Remove Programs dialog box, click Install, and then click Next.
	
	12. Verify that the following line appears in the "Command line for installation
	  program" box, and then click Finish
	
	  drive:\Aoesetup.exe
	
	  where drive is the drive letter of your CD-ROM drive.
	
	13. Follow the instructions on the screen to install Age of Empires II. When you
	  are prompted to install DirectX 6.1 or DirectPlay 6.1a, do so.
	
	14. When you are prompted to restart the computer, do so.
	
	15. If you uninstalled Age of Empires II Expansion in steps 2 through 7, insert
	  the Age of Empires II Expansion CD-ROM into the CD-ROM drive, and then
	  follow the instructions on the screen to reinstall the program.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, install DirectPlay 6.1a in Safe mode. To do
	this:
	
	1. Insert the Age of Empires II CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key when you insert the CD-ROM to prevent the program from
	  starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line and then click OK
	
	  <drive>:\
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Double-click the DirectX folder.
	
	5. Right-click the Dplay61a.exe file, and then click Copy.
	
	6. Close the CD-ROM drive window.
	
	7. Right-click on the desktop, and then click Paste.
	
	8. Restart the computer in Safe mode. To do this, use the appropriate method for
	  your version of Microsoft Windows:
	
	  Microsoft Windows 95
	  --------------------
	
	  Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	  Microsoft Windows 98
	  --------------------
	
	  Restart the computer, press and hold down the CTRL key after the computer
	  completes the Power On Self Test (POST), and then choose Safe Mode from the
	  Startup menu.
	
	9. When Windows starts in Safe mode, click OK, double-click the Dplay61a.exe
	  file on the desktop, and then follow the instructions on the screen to
	  reinstall DirectX.
	
	10. When you are prompted to restart the computer, click Yes.
	
	Additional query words: 2.00 aoe2 aok msgame
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : WINDOWS:2.0; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
