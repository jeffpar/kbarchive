---
layout: page
title: "Q303020: Train Simulator 2000: &quot;Dsound.dll Was Not Found&quot; Err Msg Appears"
permalink: /kb/303/Q303020/
---

## Q303020: Train Simulator 2000: &quot;Dsound.dll Was Not Found&quot; Err Msg Appears

	Article: Q303020
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Train Simulator, you may receive both of the
	following error messages:
	
	  A required .DLL file, DSOUND.DLL, was not found.
	
	  -and-
	
	  Train Simulator
	  Failed to locate a required file in your installation. You may need to
	  re-install Train Simulator.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft DirectX files are not properly
	installed.
	
	RESOLUTION
	==========
	
	Method 1: Reinstall DirectX in Safe Mode
	----------------------------------------
	
	Copy the DirectX installation files from the Train Simulator CD-ROM to your
	computer's hard disk, and then install the program in Safe mode. To do this,
	follow these steps:
	
	1. Insert the Train Simulator CD1 compact disc into your computer's CD-ROM or
	  DVD-ROM drive. Press and hold down the SHIFT key when you insert the Train
	  Simulator CD-ROM to prevent installation from starting automatically.
	
	2. Double-click My Computer on your computer desktop.
	
	3. Right-click the icon for your CD-ROM drive, and then click Open.
	
	4. Right-click the Directx folder, and then click Copy.
	
	5. Close all open windows on the desktop.
	
	6. Right-click on an empty spot on the desktop, and then click Paste.
	
	7. Restart Microsoft Windows in Safe mode. To do this, use the appropriate
	  method for your version of Windows.
	
	  Microsoft Windows 95:
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Safe Mode on the Startup menu.
	
	  Microsoft Windows 98 and Microsoft Windows Millennium Edition (Me):
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then click Safe Mode on the
	  Startup menu.
	
	  Microsoft Windows 2000:
	
	  Restart your computer, and then press the F8 key when the startup screen
	  appears. When the "Windows 2000 Advanced Options" menu appears, select Safe
	  Mode, and then press ENTER. When the startup screen appears again, with the
	  words "Safe Mode" displayed in red at the bottom, select the installation
	  that you want to start, and then press ENTER.
	
	  WARNING: Do not select a Microsoft Windows NT 4.0 installation.
	
	8. When Windows starts in Safe mode, click OK.
	
	  In Windows Me, close the "Help and Support" dialog box.
	
	9. On the desktop, double-click the DirectX folder.
	
	10. Double-click DXSETUP.EXE.
	
	11. Follow the instructions on the screen to reinstall DirectX. When you are
	  prompted to restart the computer, click OK.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 2: Install the Latest Version of Microsoft DirectX
	---------------------------------------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to download and install the latest version
	of DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbLinkGolfSearch kbGamesSearch kbGolfSearch kbLinks2001 kbTrainSim
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
