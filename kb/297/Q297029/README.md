---
layout: page
title: "Q297029: Games: Black Screen Displayed or Msg: &quot;mmsystem006...&quot;"
permalink: /kb/297/Q297029/
---

## Q297029: Games: Black Screen Displayed or Msg: &quot;mmsystem006...&quot;

	Article: Q297029
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Age of Empires, Gold Edition 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Age of Empires II: The Age of Kings, the
	program's "Loading" screen appears, after which the screen may turn black, and
	then the Microsoft Windows desktop appears.
	
	The pre-game cinematic sequence is not displayed as expected, and you are unable
	to start the game.
	
	When starting either version of Flight Simulator listed above, you may see the
	following message:
	
	  mmsystem006: There are no drivers installed on your system.
	
	CAUSE
	=====
	
	This behavior can occur when the Msvideo.dll Windows system file is missing or
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Msvideo.dll file with a new copy from the
	Microsoft Windows CD-ROM. To do this, follow these steps:
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Use a Windows startup disk to restart the computer to a command prompt.
	
	2. At the command prompt, type "C:" (without the quotation marks), and then
	  press ENTER.
	
	  NOTE: If Windows is not installed on drive C, substitute the correct drive
	  letter.
	
	3. Type "Rename C:\Windows\System\Msvideo.dll Msvideo.old" (without the
	  quotation marks), and then press ENTER.
	
	4. Extract a new copy of the Msvideo.dll file to the Windows\System folder.
	
	For additional information about how to use the Extract tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Remove the startup disk and restart the computer.
	
	6. Remove the Motion Video device. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. In Control Panel, double-click "Sounds and Multimedia".
	
	  c. On the Devices tab (Advanced tab in Microsoft Windows 95), expand Media
	     Control Devices.
	
	  d. Right-click "Motion Video Device (Media Control)", and then click
	     Properties on the shortcut menu that appears.
	
	  e. In the "Motion Video Device (Media Control) Properties" dialog box, click
	     Remove, click Yes on the Remove message that appears, and then click OK
	     twice.
	
	7. Reinstall the Motion Video device. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. In Control Panel, double-click Add New Hardware.
	
	  c. In the Add New Hardware Wizard, click Next twice.
	
	  d. Under "Do you want Windows to search for your new hardware?", click "No, I
	     want to select the hardware from a list", and then click Next.
	
	  e. In the "Hardware types" list, click "Sound, video and game controllers",
	     and then click Next.
	
	  f. Under Manufacturers, click Microsoft MCI, click "Motion Video Device
	     (Media Control)" under Models, and then click Next.
	
	  g. Click Finish, and then click Yes when prompted to restart the computer.
	
	8. Enable the Motion Video device. To do this, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. In Control Panel, double-click "Sounds and Multimedia".
	
	  c. On the Devices tab (Advanced tab in Windows 95), expand Media Control
	     Devices.
	
	  d. Right-click "Motion Video Device (Media Control)", and then click
	     Properties on the shortcut menu that appears.
	
	  e. In the "Motion Video Device (Media Control) Properties" dialog box, click
	     "Use this Media Control device", click Apply, and then click OK twice.
	
	9. Restart the computer.
	
	REFERENCES
	==========
	
	For additional information about issues related to the Motion Video device,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q147422 Multimedia Err Msg: Not Enough Memory to Start Program
	
	Additional query words: msgame AOE AOEII FS98 FS2000 FLTSIM quit quits drops drop
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbFlightSimSearch kbAOESearch kbAOE2Kings kbFlightSim2000 kbFlightSim98
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
