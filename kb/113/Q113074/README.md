---
layout: page
title: "Q113074: Golf: Video Clips/Fly By May Cause Driver Error"
permalink: kb/113/Q113074/
---

## Q113074: Golf: Video Clips/Fly By May Cause Driver Error

	Article: Q113074
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The multimedia edition of Microsoft Golf 1.0 includes video clips for
	demonstrations, tours, professional tips, and course fly bys. If your video
	run-time drivers are missing or incompatible, you may receive one of the errors
	below when you play a Golf video under Windows 3.1.
	
	  Microsoft Golf Error: The specified device is not open or is not recognized
	  by MCI...
	
	-or-
	
	  ...driver not installed...
	
	RESOLUTION
	==========
	
	Remove the video run-time drivers currently on the system and replace them with
	drivers provided by the CD edition of Microsoft Golf.
	
	To remove the video drivers that Golf will reinstall:
	
	1. Open up Control Panel.
	
	2. In Control Panel, double-click the Drivers icon.
	
	3. Remove the following drivers:
	
	   - Intel Indeo[TM] Video Driver
	   - MS Video 1 Compressor
	   - [MCI] Microsoft Video for Windows
	
	4. From the list of Installed Drivers, select a driver and click Remove.
	
	5. Control Panel displays the message "This... driver is required by the
	  system... Are you sure you want to remove it?" Click Yes.
	
	6. When prompted, click Don't Restart Now.
	
	7. After removing the third driver, restart Windows.
	
	Once Windows is running, open File Manager. From the File Manager, remove the
	following files from the windows\system directory:
	
	- DISPDIB.DLL
	- INDEO.DRV
	- MCIAVI.DRV
	- MSVIDEO.DLL
	- MSVIDC.DRV
	
	Run Golf Setup and install the run-time video.
	
	1. Go through the following Setup screens:
	
	   - Initializing Setup
	   - Welcome Screen
	   - Type Your Name
	   - Confirm Your Name
	   - Confirm Destination Directory
	   - Install Over Existing Installation
	
	2. The seventh screen should be titled "Install Video for Windows." Click
	  Install. (If you don't see this screen, confirm that the drivers listed in
	  the previous procedure have been removed.)
	
	3. Continue the Golf Setup as usual. Once Setup is complete, the video clips
	  should run without error.
	
	MORE INFORMATION
	================
	
	During setup, the multimedia edition of Golf checks your system for copies of
	video run-time drivers. If it doesn't find them, Golf gives you the option of
	installing them. However, if it finds video drivers that were installed by some
	other multimedia application, Golf may not offer to install its own video
	drivers. This can cause errors if the other video drivers are not completely
	compatible with Golf.
	
	The video run-time drivers installed by Microsoft Golf 1.0 are fully compatible
	with most other multimedia applications.
	
	You can test the video clips from Golf in the Windows 3.1 Media Player:
	
	1. Place the Golf CD in your CD-ROM drive.
	
	2. In Program Manager, open the Accessories program group.
	
	3. From Accessories, run Media Player.
	
	4. From the File menu, click Open.
	
	5. Under List Files Of Type, click Video For Windows (*.avi).
	
	6. Under Drive, click your CD-ROM drive.
	
	7. Under Directory, click \\torrey_p\flyby or \\torrey_p\tips.
	
	8. Under File Name, click any *.AVI file and click OK. The play controls of the
	  Media Player are displayed.
	
	9. Click the play button [>].
	
	
	Additional query words: 1.00 CD multimedia multi-media kbmm avi
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
