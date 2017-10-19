---
layout: page
title: "Q261026: MCM2: Video Problems When You Select the TV Out Video Adapter"
permalink: /kb/261/Q261026/
---

## Q261026: MCM2: Video Problems When You Select the TV Out Video Adapter

	Article: Q261026
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic kbhw kbui kbimu kbHardwarekbfaq
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select the TV Out video adapter when you start Microsoft Motocross
	Madness 2, you may experience the following symptoms:
	
	- You may be unable to change the display resolution on the Graphics Options
	  screen.
	
	- Motocross Madness 2 may stop responding (hang) when you attempt to start a
	  race.
	
	CAUSE
	=====
	
	This behavior can occur if your video adapter is based on the nVIDIA GeForce 256
	GPU chip set.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not select the TV Out video adapter
	when you start Motocross Madness 2.
	
	To identify the manufacturer and model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using a Microsoft Windows 95-based or a Windows 98-based computer,
	  click the Device Manager tab.
	
	  If you are using a Windows 2000-based computer, click the Hardware tab, and
	  then click Device Manager.
	
	4. Click the plus sign (+) next to Display adapters to expand the branch.
	
	5. Under the Display adapters branch, note the manufacturer and model of your
	  video adapter, and then click OK.
	
	6. Close all open windows.
	
	MORE INFORMATION
	================
	
	nVidia releases reference drivers for their chip sets. These reference drivers
	may not be appropriate for all video adapters that are based on those chip
	sets.
	
	For more information about the reference drivers available from nVidia, visit the
	following nVidia Web site:
	
	  www.nvidia.com
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 msgame mcm2 motorcross crash freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic kbhw kbui kbimu kbHardware kbfaq
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
