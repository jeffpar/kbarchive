---
layout: page
title: "Q254356: MapPoint 2000: Program Hangs When Splash Screen Is Displayed"
permalink: /kb/254/Q254356/
---

## Q254356: MapPoint 2000: Program Hangs When Splash Screen Is Displayed

{% raw %}

	Article: Q254356
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft MapPoint 2000, the program may stop responding when the
	splash screen is displayed.
	
	CAUSE
	=====
	
	The behavior can occur if you are running CyberMedia's Guard Dog software.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit Guard Dog before you attempt to start MapPoint
	2000:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. In the list of running programs, click Guard Dog, and then click End Task.
	
	3. When you are prompted to quit Guard Dog, click Yes.
	
	NOTE: Guard Dog starts again the next time you restart Microsoft Windows.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mp2000 hangs crash freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
