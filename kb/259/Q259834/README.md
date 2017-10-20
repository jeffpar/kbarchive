---
layout: page
title: "Q259834: StarLancer Err Msg: Invalid Page Fault in Module Lancer.exe"
permalink: /kb/259/Q259834/
---

## Q259834: StarLancer Err Msg: Invalid Page Fault in Module Lancer.exe

{% raw %}

	Article: Q259834
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft StarLancer, you may receive the following
	error message:
	
	  Lancer caused an invalid page fault in module Lancer.exe.
	
	When you click OK, StarLancer quits.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You are attempting to start StarLancer for the first time.
	
	- Microsoft NetMeeting is running on your computer.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, quit NetMeeting before you attempt to
	start StarLancer for the first time.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft StarLancer, version
	1.0.
	
	MORE INFORMATION
	================
	
	The first time that you start StarLancer, the program attempts to detect the 3D
	hardware that is installed in your computer. This error message is generated
	during the 3D hardware detection process.
	
	Additional query words: 1.00 msgame star lancer gpf ipf crash bomb
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
