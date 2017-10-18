---
layout: page
title: "Q263037: DirectPlay: How to Remove and Reinstall DirectPlay 6.x or Later"
permalink: kb/263/Q263037/
---

## Q263037: DirectPlay: How to Remove and Reinstall DirectPlay 6.x or Later

	Article: Q263037
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbimu msgame
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Flight Simulator 2000, version 1.0 
	- Microsoft Flight Simulator 2000 Professional Edition, version 1.0 
	- Microsoft Midtown Madness, version 1.0 
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to manually remove and reinstall DirectPlay version
	6.x or later on Windows 98.
	
	MORE INFORMATION
	================
	
	To manually remove and reinstall DirectPlay, use the following methods in the
	order in which they are presented.
	
	Step 1: Download the Latest Version of Microsoft DirectX
	--------------------------------------------------------
	
	To download the latest version of DirectX:
	
	1. Visit the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	2. Find, and then click the latest version of the DirectX executable file.
	
	3. In the File Download dialog box, click "Save this program to disk", and then
	  click OK.
	
	4. In the "Save in" box, click Desktop, and then click Save.
	
	Step 2: Remove DirectPlay
	-------------------------
	
	NOTE: If you remove DirectPlay, your operating system may become unstable if you
	do not reinstall it or you reinstall an earlier version.
	
	To remove DirectPlay:
	
	1. Restart Your Computer in Safe Mode. To do this in Windows 98, restart your
	  computer, press and hold down the CTRL key after your computer completes the
	  Power On Self Test (POST), and then select Safe Mode from the Startup menu.
	
	2. Rename the DirectX Files.
	
	  The following files are located in the Windows\System folder:
	
	   - Dplay.dll
	
	   - Dplaymodemx.dll
	
	   - Dplaysvr.exe
	
	   - Dplaywsock.dll
	
	   - Dplaywsockx.dll
	
	   - Dplayx.dll
	
	   - Dpserial.dll
	
	  To rename the DirectX files:
	
	  a. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	  b. At the command prompt, type the following lines, pressing ENTER after you
	     type each line:
	
	  cd system
	  ren dplaywsock.dll dplaywsock.old
	  ren dplaywsockx.dll dplaywsockx.old
	  ren dplaymodemx.dll dplaymodemx.old
	  ren dplayx.dll dplayx.old
	  ren dplaysvr.exe dplaysvr.old
	  ren dplay.dll dplay.old
	  ren dpserial.dll dpserial.old
	  exit
	
	Step 3: Delete the DirectX Registry Keys
	----------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To delete the DirectX registry keys:
	
	1. Start Registry Editor.
	
	2. Locate, and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\DirectPlay
	
	3. On the Edit menu, click Delete, and then when you receive a prompt to
	  confirm, click Yes.
	
	4. Locate, and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\DirectX
	
	5. On the Edit menu, click Delete, and then when you receive a prompt to
	  confirm, click Yes.
	
	6. Quit Registry Editor.
	
	Step 4: Reinstall DirectX in Safe Mode
	--------------------------------------
	
	1. Exit to Safe Mode by following steps in Step 2.
	
	2. Once you are you in Safe Mode, double-click the executable that you have
	  downloaded in Step 1.
	
	3. Follow the instructions on the screen to install or reinstall DirectX.
	
	4. When you receive a prompt to restart your computer, do so.
	
	Additional query words: 1.00 2.00 msgame direct-x dx7a direct play
	
	======================================================================
	Keywords          : kbenv kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbMotocrossSearch kbMidtownMadSearch kbAOESearch kbMidtownMadness kbAOE2Kings kbFlightSim2000 kbMotocrossM2 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbhowto
	
	=============================================================================
	
