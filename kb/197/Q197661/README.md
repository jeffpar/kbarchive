---
layout: page
title: "Q197661: Games Err Msg: Invalid Page Fault in Module Kernel32.dll"
permalink: /kb/197/Q197661/
---

## Q197661: Games Err Msg: Invalid Page Fault in Module Kernel32.dll

{% raw %}

	Article: Q197661
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu msgame KbDirectX
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	- Microsoft Casino 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the beginning of this article, you
	may receive the following error message
	
	  <filename> caused an invalid page fault in module Kernel32.dll.
	
	where <filename> is the name of the program's executable file.
	
	In some cases you may not receive an error message and your program stops
	responding (hangs).
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- An STB Nitro 3D or STB Velocity 128 video adapter is installed in your
	  computer.
	
	- You are using an outdated version of the STB Vision 95 video driver for your
	  display adapter.
	
	- Microsoft DirectX 6.0 is installed on your computer.
	
	- You are using the STB Velocity 128 (with riva 128 chipset) video driver.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, install DirectX 7.0, or download and install the latest
	version of the STB Vision 95 video driver for your video adapter from the
	following STB Web site:
	
	  http://www.stb.com/drivers
	
	DirectX 7.0 is available as a free download from the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame direct-x dx7 aoe cfs fs98 fs2k mcm mtm2 gpf ipf fs2000
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu msgame KbDirectX 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbGamesSearch kbFlightSimSearch kbZNotKeyword kbMotocrossSearch kbMidtownMadSearch kbMonsterTMSearch kbAOESearch kbMonsterTM2 kbAOEExpRome kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMotocrossM kbMidtownMadness2 kbCasino kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
