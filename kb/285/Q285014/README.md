---
layout: page
title: "Q285014: Games Error Message: PFN_List_Corrupt or IRQL_NOT_LESS_OR_EQUAL"
permalink: /kb/285/Q285014/
---

## Q285014: Games Error Message: PFN_List_Corrupt or IRQL_NOT_LESS_OR_EQUAL

{% raw %}

	Article: Q285014
	Product(s): Microsoft Home Games
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	- the operating system: Microsoft Windows 2000 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play one of the Microsoft games listed at the beginning of this article
	on a Windows 2000-based computer, the computer may restart unexpectedly or you
	may receive one of the following error messages:
	
	   - PFN_List_Corrupt (Blue Screen STOP Error)
	
	   - IRQL_NOT_LESS_OR_EQUAL (Blue Screen STOP Error)
	
	   - Nested Exception! - Cause: 'GetLocationFromAddress'
	  Error: "Attempt to write to address XxXXXXXXXX at XxXXXXXXXX
	
	CAUSE
	=====
	
	This behavior can occur if an ATI Radeon video adapter is installed in your
	computer.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about how
	to obtain and install the latest DirectX-compatible version of the video driver
	for your video adapter.
	
	For additional information about how to contact your hardware manufacturer, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	If this issue continues to occur, you may need to replace your video adapter.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame mech4 combatfs cfs2
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu 
	Technology        : kbOSWin2000 kbOSWinSearch kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbFlightSim2000 kbMechWarrior4
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
