---
layout: page
title: "Q247043: FS2000 Err Msg: Invalid Page Fault in Module Kernel32.dll"
permalink: kb/247/Q247043/
---

## Q247043: FS2000 Err Msg: Invalid Page Fault in Module Kernel32.dll

	Article: Q247043
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Flight Simulator 2000, you may receive an error message
	similar to the following:
	
	  FS2000 caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if DirectPlay 6.1a or DirectX 7.0 is not installed
	properly on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall DirectPlay 6.1a and DirectX 7.0 in Safe mode.
	To do this:
	
	1. Right-click an empty area on the Windows desktop, point to New, and then
	  click Folder.
	
	2. Type "DirectX7" (without the quotation marks), and then press ENTER.
	
	3. Double-click the DirectX7 folder.
	
	4. Insert the Flight Simulator 2000 Disk 1 CD-ROM into the CD-ROM drive. Press
	  and hold down SHIFT when you insert the CD-ROM to prevent the program from
	  starting automatically.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\
	
	  where <cd-rom> is the drive letter of the CD-ROM drive.
	
	7. Configure Windows Explorer to show all files:
	
	  a. On the View menu, click Options or Folder Options.
	
	  b. Click the View tab.
	
	  c. Under the "Hidden files" branch, click "Show all files".
	
	  d. Click Apply, and then click OK.
	
	8. On the View menu, point to Arrange Icons, and then click "by Name".
	
	9. Click to select the Cfgmgr32.dll file, and then press and hold down the CTRL
	  key as you click to select the following files:
	
	   - Directx.cab
	   - Directx.inf
	   - Dplay61a.exe
	   - Dsetup.dll
	   - Dsetup32.dll
	   - Dxsetup.exe
	   - Setupapi.dll
	
	10. On the Edit menu, click Copy.
	
	11. On the Windows taskbar, click DirectX7.
	
	12. On the Edit menu, click Paste.
	
	13. Restart the computer in Safe mode. To do this, use the appropriate method
	  for your version of Microsoft Windows.
	
	  Microsoft Windows 95:
	
	  Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	  Microsoft Windows 98:
	
	  Restart the computer, press and hold down the CTRL key after the computer
	  completes the Power On Self Test (POST), and then choose Safe Mode from the
	  Startup menu.
	
	14. When Windows starts in Safe mode, click OK.
	
	15. On the desktop, double-click the DirectX7 folder.
	
	16. Double-click the Dplay61a.exe file to start DirectPlay Setup.
	
	17. Follow the instructions on the screen to install DirectPlay 6.1a.
	
	18. Double-click the Dxsetup.exe file to start DirectX Setup.
	
	19. Follow the instructions on the screen to install DirectX 7.0.
	
	20. Restart the computer.
	
	Install the Latest Version of Microsoft DirectX
	-----------------------------------------------
	
	If the issue continues to occur, download and install the latest version of
	DirectX from the following Microsoft Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	MORE INFORMATION
	================
	
	To configure Windows Explorer to hide hidden or system files:
	
	1. Double-click the My Computer icon on the desktop.
	
	2. On the View menu, click Options or Folder Options.
	
	3. Click the View tab.
	
	4. Under the "Hidden files" branch, click "Do not show hidden or system files".
	
	5. Click Apply, and then click OK.
	
	Additional query words: msgame flightsim fs2k fltsim gpf ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
