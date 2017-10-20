---
layout: page
title: "Q174672: FS98/2000/CFS Err Msg: FLTSIM98 Caused an Invalid Page Fault..."
permalink: /kb/174/Q174672/
---

## Q174672: FS98/2000/CFS Err Msg: FLTSIM98 Caused an Invalid Page Fault...

{% raw %}

	Article: Q174672
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install one of the Microsoft Flight Simulator programs listed at the
	beginning of this article, you may receive an error message similar to the
	following:
	
	  FLTSIM98 caused an invalid page fault in module KERNEL32.DLL
	
	CAUSE
	=====
	
	This behavior can occur if a DFI SC-211 sound card (based on the ESS 1868
	chipset) is installed in your computer.
	
	MORE INFORMATION
	================
	
	To work around this issue, disable the sound card in Device Manager and run
	Flight Simulator without sound. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to "Sound, video, and game controllers" to
	  expand the branch.
	
	5. Click the DFI SC-211 sound card, and then click Properties.
	
	6. On the General tab, click to clear the Original Configuration (Current) check
	  box, or click to select the "Disable in this hardware profile" check box.
	
	7. Click OK until you return to Control Panel, and then close Control Panel.
	
	8. Restart the computer.
	
	NOTE: After you finish flying in Flight Simulator, restore sound for programs
	that do not use DirectSound. To do this, repeat these steps to re-enable the DFI
	SC-211 sound card.
	
	Additional query words: 1.00 msgame fltsim98 fs98 cfs fs2000 fs2k
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
