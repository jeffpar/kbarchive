---
layout: page
title: "Q258392: Baseball 2001: Cannot Select Hardware Mode on Gateway Computer"
permalink: /kb/258/Q258392/
---

## Q258392: Baseball 2001: Cannot Select Hardware Mode on Gateway Computer

{% raw %}

	Article: Q258392
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu msgame
	Last Modified: 27-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Baseball 2001 on a Gateway 2000 computer, you may be
	unable to select 3D Hardware mode.
	
	CAUSE
	=====
	
	This behavior can occur if an ATI Rage Pro Turbo AGP video adapter is installed
	in the computer.
	
	The ATI Rage Pro Turbo AGP video adapter does not support alpha blending, a
	feature that is needed to run Baseball 2001 in 3D Hardware mode.
	
	RESOLUTION
	==========
	
	To work around this issue, configure Baseball 2001 to run in Software mode:
	
	1. Start Baseball 2001.
	
	2. On the Home Plate screen, click Options.
	
	3. Click the Graphics tab.
	
	4. Under Mode, click Software, and then click OK.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: 1.00 msgame bball bb2001 base ball
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
