---
layout: page
title: "Q210527: Golf 99: &quot;Removing Game Files&quot; Displayed When You Add Courses"
permalink: /kb/210/Q210527/
---

## Q210527: Golf 99: &quot;Removing Game Files&quot; Displayed When You Add Courses

{% raw %}

	Article: Q210527
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgame
	Last Modified: 01-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 1999 Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add one or more golf courses to your installation of Microsoft Golf
	1999 Edition, the following message may briefly appear on the screen:
	
	  Removing Game Files
	
	NOTE: No game files are actually removed from your installation of Golf 99
	despite the appearance of this message.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You selected the Minimum installation option when you installed Golf 99.
	
	- You add the course using the Add/Remove Setup option from the Add/Remove
	  Programs tool in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Golf 1999 Edition,
	version 1.0.
	
	MORE INFORMATION
	================
	
	This message is displayed because the Golf 99 Setup program compares your
	current installation of Golf with the modifications to be made by Golf Setup in
	Maintenance mode. This message is displayed when this comparison is being made.
	If you remove courses or any other game files, the files are removed at this
	time.
	
	However, if you add courses or any other game files, this message is still
	displayed even though no game files are removed.
	
	Additional query words: 1.00 msgame golf99 players golfers
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolf99 kbGolfSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
