---
layout: page
title: "Q274656: CFS2 Error Message: Invalid Page Fault in Module Winhlp32.exe"
permalink: /kb/274/Q274656/
---

## Q274656: CFS2 Error Message: Invalid Page Fault in Module Winhlp32.exe

{% raw %}

	Article: Q274656
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start online Help in Microsoft Combat Flight Simulator 2,
	you may receive an error message similar to the following:
	
	  Winhlp32 caused an invalid page fault in module Winhlp32.exe.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Voodoo 3 video adapter is installed in the computer.
	
	- The Microsoft Windows color palette is set to True Color (32 bit).
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce the Windows color palette setting:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors or Color Palette box, click High Color (16 bit).
	
	5. Click OK.
	
	6. If you are prompted to restart the computer, do so.
	
	MORE INFORMATION
	================
	
	You may also be able to resolve this issue by obtaining and installing the
	latest video driver for video adapter.
	
	To download the latest video driver for the Voodoo 3 video adapter, visit the
	following 3Dfx Web site:
	
	  http://www.3dfxgamer.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame combatfs cfs2 gpf ipf
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
