---
layout: page
title: "Q233474: Business Planner: Does Not Start if Internet Explorer 5 Removed"
permalink: /kb/233/Q233474/
---

## Q233474: Business Planner: Does Not Start if Internet Explorer 5 Removed

{% raw %}

	Article: Q233474
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbimu
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you remove Microsoft Internet Explorer 5 from your computer, you may receive
	the following error message when you attempt to start Microsoft Business
	Planner:
	
	  C:\Program Files\Microsoft Office\Office\Msbp.exe
	
	  A device attached to the system is not functioning.
	
	If you click OK, you receive the following error message:
	
	  The Msbp.exe file is linked to missing export Comctl32.dll:_TrackMouseEvent.
	
	CAUSE
	=====
	
	This behavior can occur because Business Planner requires certain files that are
	installed by Internet Explorer 5 to function correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Internet Explorer 5.
	
	MORE INFORMATION
	================
	
	This issue does not occur on Microsoft Windows NT 4.0-based computers if Service
	Pack 4 or later is installed.
	
	Additional query words: msbp uninstall ie5
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
