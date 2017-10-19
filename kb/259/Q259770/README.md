---
layout: page
title: "Q259770: Baseball 2001 Err Msg: ...Invalid Page Fault in Graphics.dll"
permalink: /kb/259/Q259770/
---

## Q259770: Baseball 2001 Err Msg: ...Invalid Page Fault in Graphics.dll

	Article: Q259770
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu msgame bball3d
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start Microsoft Baseball 2001, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down.
	
	When you click Details, you receive the following error message:
	
	  Baseball2001 caused an invalid page fault in module Graphics.dll.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- The Graphics Hardware Acceleration setting on your computer is not set to
	  Full.
	
	- Less than 2 megabytes (MB) of video memory is installed on your primary video
	  adapter.
	
	- Your primary video adapter does not support DirectDraw.
	
	- The video driver for your primary video adapter is outdated or does not
	  support DirectDraw.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Increase the Graphics Hardware Acceleration Setting to Full
	-----------------------------------------------------------
	
	To increase the Graphics Hardware Acceleration setting to Full:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider all the way to the right (the Full
	  acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart your computer, click Yes.
	
	If the issue continues to occur, proceed to the next method:
	
	Check the Amount of Video Memory Installed on Your Primary Video Adapter
	------------------------------------------------------------------------
	
	To play Baseball 2001, a video adapter with at least 2 MB of video memory must be
	installed in your computer. However, if only 2 MB of video memory is installed
	on your video adapter, you can only play the game in Software mode.
	
	To play Baseball 2001 in 3D Hardware mode, a Direct3D-compatible video adapter
	with at least 4 MB of video memory must be installed in your computer.
	
	If less than 2 MB of video memory is installed on your video adapter, install
	additional video memory, upgrade to a video adapter with at least 2 MB of video
	memory to play the game in Software mode, or upgrade to a Direct3D-compatible
	video adapter with at least 4MB of video memory to play the game in 3D Hardware
	mode.
	
	To determine the amount of video memory that is installed in your computer:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Display tab.
	
	4. Under Device, note the amount of memory on the Approx. Total Memory line.
	
	5. Repeat steps 3 and 4 for each Display tab in the DirectX Diagnostic Tool.
	
	If the amount of memory on the Approx. Total Memory line on the Display tab that
	corresponds to your primary video adapter is more than 4 MB, and the issue
	continues to occur, proceed to the next method.
	
	Obtain and Install an Updated Video Driver
	------------------------------------------
	
	Contact the manufacturer of your video adapter to inquire about how to obtain and
	install the latest version of the video driver for your video adapter.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number in the following list to view the article
	in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, proceed to the next method.
	
	Configure Baseball 2001 to Run in Software Mode
	-----------------------------------------------
	
	To configure Baseball 2001 to run in Software mode:
	
	1. Start Baseball 2001.
	
	2. On the Home Plate screen, click Options.
	
	3. Click the Graphics tab.
	
	4. Under Mode, click Software, and then click OK.
	
	
	Uninstall and Reinstall Baseball 2001
	-------------------------------------
	
	If you already selected a 3-D video adapter, uninstall and then reinstall
	Baseball 2001 to a new folder:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click Microsoft Baseball 2001, and then click Add/Remove.
	
	4. Click Uninstall, and then click OK.
	
	5. Eject and then insert the Baseball 2001 CD-ROM into the CD-ROM drive.
	
	6. Click Install, and then click Next.
	
	7. Click Change, and then change the path to a new folder. For example, use the
	  following path
	
	  <drive>:\Program Files\Microsoft Games\BB2k1
	
	  where <drive> is the letter of the drive in which you want to install
	  Baseball 2001.
	
	8. Click OK.
	
	9. If you are prompted to create a new folder, click Yes.
	
	10. Click Install.
	
	11. Start Baseball 2001.
	
	12. When you are prompted to choose 3-D Graphics accelerator for a default
	  renderer, click the "Don't Show this Again" check box, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Baseball 2001.
	
	MORE INFORMATION
	================
	
	For additional information about the minimum system requirements that are needed
	to run Microsoft Baseball 2001, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q258553 Baseball 2001: Minimum System Requirements
	
	Additional query words: 1.00 msgame bball bb2001 base ball black screen gpf ipf
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu msgame bball3d 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbBaseBall2001
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
