---
layout: page
title: "Q218915: Err Msg: This Program Cannot Continue Running Because of a..."
permalink: /kb/218/Q218915/
---

## Q218915: Err Msg: This Program Cannot Continue Running Because of a...

{% raw %}

	Article: Q218915
	Product(s): Microsoft Automap
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98, version 98 
	- Microsoft Expedia Trip Planner 98, version 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Expedia Streets 98 or Microsoft Expedia Trip Planner
	98, you may receive the following error message:
	
	  This program cannot continue running because of a problem with your pushpins.
	
	CAUSE
	=====
	
	This behavior can occur if a file in the Pushpins folder is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the program you want to remove, and then click Add/Remove.
	
	4. If you are prompted to restart Microsoft Windows, do so.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  <drive>:\Program Files\Common Files\Microsoft Shared
	
	where <drive> is the drive letter of the hard disk on which Windows is
	installed.
	
	7. Right-click the Pushpins folder, and then click Delete.
	
	8. Close all open windows on your desktop, and then reinstall Expedia Streets 98
	  or Expedia Trip Planner 98.
	
	Additional query words: multi multi-media media mm auto-map amap
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets98 kbExpediaTripPlanner98
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
