---
layout: page
title: "Q262533: StarLancer: Game Sounds Are Played After Game Quits Unexpectedly"
permalink: /kb/262/Q262533/
---

## Q262533: StarLancer: Game Sounds Are Played After Game Quits Unexpectedly

	Article: Q262533
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsound kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft StarLancer, the game may quit unexpectedly,
	but the game sounds and music may continue to be played.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- More than one video adapter is installed in your computer.
	
	- The default video adapter is not connected to a monitor.
	
	RESOLUTION
	==========
	
	To resolve this issue, determine which video adapter is the default video
	adapter, and then edit the StarLancer configuration file to use that video
	adapter. To do this, use the following methods in the order in which they are
	presented.
	
	Determine the Display Number for Your Video Adapters:
	
	To determine the display number for each video adapter that is installed in your
	computer:
	
	1. Insert the Microsoft StarLancer Disk 1 CD-ROM into the CD-ROM drive. Press
	  and hold down the SHIFT key as you insert the CD-ROM to prevent StarLancer
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cdrom>:\goodies\machine\machine.exe
	
	where <cdrom> is the drive letter of your CD-ROM drive.
	
	4. Click the Display tab and note the names of the video adapters and the
	  display number associated with each video adapter.
	
	5. Click Quit.
	
	6. When you are prompted to log the current settings in the log file database,
	  click No.
	
	Edit the Starlancer.cfg File:
	
	To edit the Starlancer.cfg file:
	
	1. Click Start, point to Find, and click "Files and Folders".
	
	2. In the Named box, type "starlancer.cfg" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click to select the "Include subfolders" check box, and then click Find Now.
	
	5. Double-click the Starlancer.cfg file. If you are prompted to select a program
	  with which to open the file, click Notepad, and then click OK.
	
	6. In the [Device] section, edit the following line so that it is associated
	  with the correct video adapter
	
	  Device=<number>
	
	where <number> is the device number of your video adapter.
	
	NOTE: The display numbers that you noted earlier in this article are one number
	greater than the device number. For example, Display1 is the same as Device0,
	and Display2 is the same as Device1.
	
	7. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	Additional query words: 1.00 msgame star lancer crash multimon
	
	======================================================================
	Keywords          : kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
