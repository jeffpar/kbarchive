---
layout: page
title: "Q303914: Err Msg: STOP: Cannot CreateNetLib..."
permalink: /kb/303/Q303914/
---

## Q303914: Err Msg: STOP: Cannot CreateNetLib...

	Article: Q303914
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	- Microsoft Links 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft MechCommander 2.0 or Microsoft Links 2001 on a
	Microsoft Windows 98 or Microsoft Windows Millennium Edition (Me)-based
	computer, you may receive any of the following error messages:
	
	  Cannot find DirectInput functions.
	
	  -or-
	
	  STOP: Cannot CreateNetLib - Startup -Error: - 2147221499.
	
	  -or-
	
	  STOP: Cannot create netlib-startup-error 80040005 (nlerr_cantcreated pobject)
	  address: 0x004fe9f2 location startup networking C
	
	CAUSE
	=====
	
	This behavior may occur if one of the following is true:
	
	- You have chosen not to restart your computer before you start the game for
	  the first time.
	
	- DirectX did not install properly on your system.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart the computer to allow the system settings to
	finish the installation process.
	
	If this does not help, continue to the next method.
	
	Download the Latest Version of Microsoft DirectX
	------------------------------------------------
	
	The latest version of DirectX which is 8.0a is available from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/downloads/release.asp?ReleaseID=27741
	
	  Download Now
	  DX80eng.exe - 11,476 Kb
	
	IMPORTANT DOWNLOAD INSTRUCTIONS
	
	1. Click to select "Save this program to disk to copy the download to your
	  computer for installation at a later time (recommended)."
	
	2. Click OK.
	
	3. In the Save in box, click Desktop, and then click Save.
	
	4. Download the executable and install it in Safe Mode. To do this, perform the
	  steps appropriate to your operating system.
	
	Install DirectX 8.0a in Safe Mode
	---------------------------------
	
	Microsoft Windows 95:
	
	Restart the computer. When you see the "Starting Windows 95" message, press the
	F8 key, and then click to choose Safe Mode from the Startup menu.
	
	Microsoft Windows 98:
	
	Restart the computer, press and hold down the CTRL key after the computer
	completes the Power On Self Test (POST), and then click to choose Safe Mode from
	the Startup menu.
	
	Windows Me:
	
	Create a Restore Point first, then follow the steps for Windows 98.
	
	For additional information on how to create a Restore Point, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q267951 Description of the System Restore Utility in Windows Me
	
	When Windows starts in Safe mode, click OK, double-click the DX80eng.exe file on
	the Desktop, and then follow the instructions on the screen to reinstall
	DirectX.
	
	When you receive a prompt to restart the computer, click Yes.
	
	Additional query words: msgame mech commander mech2
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbLinkGolfSearch kbGamesSearch kbGolfSearch kbMSNSearch kbMechCommSearch kbLinks2001 kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
