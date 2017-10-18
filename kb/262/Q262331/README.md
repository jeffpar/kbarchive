---
layout: page
title: "Q262331: Allegiance: Ship Rolls Out of Control"
permalink: kb/262/Q262331/
---

## Q262331: Allegiance: Ship Rolls Out of Control

	Article: Q262331
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Allegiance, your ship may roll out of control.
	
	CAUSE
	=====
	
	This behavior can occur if you use a Microsoft SideWinder Precision Pro joystick
	to control the ship, and any of the following conditions are true:
	
	- The SideWinder Game Controller software is damaged or contains mismatched
	  file versions.
	
	- The rudder is assigned to the wrong axis or cannot be assigned to an axis.
	
	- The game port is sending corrupt data to the rudder.
	
	- The Game Device Profiler software is running in the background.
	
	- The default joystick control assignments for Allegiance are not working
	  correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented:
	
	Method 1
	--------
	
	Uninstall the SideWinder Game Controller software, clean boot the computer, and
	then reinstall the SideWinder Game Controller software version 3.02 or later. To
	uninstall the SideWinder Game Controller software:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Double-click SideWinder Game Controller Software.
	
	4. Click Finish, and then follow the instructions on the screen to uninstall the
	  SideWinder Game Controller software.
	
	5. Click Close. When you are prompted to restart Windows, do so.
	
	To reinstall the SideWinder Game Controller software version 3.02 or later: To
	download and install the latest version of the Game Controller software, click
	the following Microsoft Web site:
	
	1. Visit the following Microsoft Web site:
	
	  http://www.microsoft.com/sidewinder (http://www.microsoft.com/sidewinder)
	
	2. Click Downloads, and then click SideWinder Game Controller Software.
	
	3. Under "Game Controller Software version 3.02", click "SideWinder Game
	  Controller Software (in English)".
	
	4. Click I Accept on the End User License Agreement (EULA) Web page.
	
	5. Click SWGameEN.exe.
	
	6. Click "Save this program to disk", and then click OK.
	
	7. Under "Save in", click Desktop, and then click Save.
	
	8. When the download is finished, click Close.
	
	9. Clean boot your computer.
	
	For additional information about how to clean boot your computer, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q177604 Troubleshooting Using Clean Boot of Windows 95
	
	10. Double-click the Swgameen.exe file, and then follow the instructions on the
	  screen to install the software.
	
	11. Restart your computer.
	
	If this issue continues to occur, proceed to the next method.
	
	Method 2
	--------
	
	Make sure that the game port is sending the correct information to your
	joystick.
	
	For additional information about how to troubleshoot a joystick issue, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q176714 Troubleshooting Joystick Problems in Flight Simulator 98
	
	If this issue continues to occur, proceed to the next method.
	
	Method 3
	--------
	
	Turn off the Game Device Profiler.
	
	To turn off the Game Device Profiler, right-click the SideWinder icon on the
	taskbar, and then click Unload.
	
	If this issue continues to occur, proceed to the next method.
	
	Method 4
	--------
	
	Restore the default joystick settings in Allegiance:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "defaultinputmap.mdl" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, double-click the Defaultinputmap.mdl file.
	
	  NOTE: If you are prompted to select a program with which to open the file,
	  click Notepad, click to clear the "Always use this program to open this file"
	  check box, and then click OK.
	
	5. Scroll down the file to the NumericValuesNew = section and verify that the
	  numbers match the following list of numbers:
	
	  (0, 0),
	  (0, 1),
	  (0, 3),
	  (0, 2),
	  (0, 4)
	
	  NOTE: Sometimes the numbers 3 and 4 are reversed. If these numbers are
	  reversed, the Point of View (POV) Hat on the joystick is assigned to the roll
	  function. When you change the numbers to match the sequence listed in this
	  article, the roll function is assigned to the rudder.
	
	6. On the File menu, click Exit. If you are prompted to save the file, do so.
	
	7. Close the Find window.
	
	8. Start Allegiance, and then click Options on the main screen.
	
	9. Point to Game Options, and then click "Map Keys and Controls".
	
	10. Click Restore Defaults. At the bottom of the joystick controls list, verify
	  that the Roll function is assigned to Joy 0 Rz.
	
	11. When the joystick control assignments are correct, click Accept, and then
	  start the game.
	
	Additional query words: 1.00 msgame igz msngz gaming device gameport spin dive pitch yaw
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
