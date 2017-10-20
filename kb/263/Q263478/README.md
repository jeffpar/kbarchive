---
layout: page
title: "Q263478: Urban Assault Err Msg: Invalid Page Fault in Module Mss32.dll"
permalink: /kb/263/Q263478/
---

## Q263478: Urban Assault Err Msg: Invalid Page Fault in Module Mss32.dll

{% raw %}

	Article: Q263478
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Urban Assault, the game may stop responding
	(hang) after the introductory movie is played, or you may receive the following
	error message:
	
	  The instructions at 2000e765 referenced memory at 209e233. The memory could
	  not be read from. Click OK to terminate the application.
	
	When you click OK, you receive the following error message:
	
	  UA caused an invalid page fault in module Mss32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Nullsoft Winamp media player is playing music in
	the background.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, quit the Winamp media player before you
	start Urban Assault.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame ua hangs freeze lock
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbZNotKeyword kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
