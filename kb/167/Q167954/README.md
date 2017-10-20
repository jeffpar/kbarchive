---
layout: page
title: "Q167954: FCP: ErrMsg: This Program Has Performed An Illegal Operation..."
permalink: /kb/167/Q167954/
---

## Q167954: FCP: ErrMsg: This Program Has Performed An Illegal Operation...

{% raw %}

	Article: Q167954
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft NBA Full Court Press and then attempt to start the
	program, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button in the error message dialog box, you receive the
	following message:
	
	  NBA_FCP caused an invalid page fault in module NBA_FCP.EXE at 0137:00...
	
	CAUSE
	=====
	
	This problem occurs if your computer's system date is set for the year 2038 or
	later.
	
	RESOLUTION
	==========
	
	Set your computer's system date to any year before 2038 to resolve this
	problem.
	
	To change your system date, do the following:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Date/Time icon.
	
	3. From the Date & Time tab, enter the present date (any date before the
	  year 2038 will work), and then click OK.
	
	Additional query words: basketball NBA full court press fcp error message
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbGamesSearch kbZNotKeyword kbNBAFullCourtPress
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
