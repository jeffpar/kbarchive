---
layout: page
title: "Q95778: VidCap: Not Capturing Full Frames with Video Blaster"
permalink: kb/095/Q95778/
---

## Q95778: VidCap: Not Capturing Full Frames with Video Blaster

	Article: Q95778
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When capturing video with the Video Blaster Capture Board from Creative Labs,
	the preview image in VidCap may appear distorted or display only half of the
	expected signal. This problem can sometimes be corrected by switching the
	Windows display driver to a driver that uses a lower resolution.
	
	MORE INFORMATION
	================
	
	This problem has been reported to occur while using the Creative Labs Video
	Blaster Capture Board in conjunction with video display drivers running at
	resolutions equal to or greater than 800 x 600. This may also occur while trying
	to capture video sequences at a frame size greater than 160 x 120 with a 640 x
	480 video display driver.
	
	Workarounds
	-----------
	
	You may be able to solve this problem by running the VGA driver that was included
	with windows 3.1. Contact the manufacturer of your video display card to obtain
	a more recent driver if this seems to correct the problem.
	
	If you are experiencing this problem with a third-party video driver, install the
	standard Windows 3.1 VGA driver, from the Windows disks, as follows:
	
	1. Double-click the Windows Setup icon.
	
	2. From the Options menu, choose Change System Settings.
	
	3. In the Display box, select VGA.
	
	4. Follow the prompts to install the driver and restart Windows.
	
	Additional query words: 1.00 video blaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
