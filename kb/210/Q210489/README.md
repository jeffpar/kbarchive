---
layout: page
title: "Q210489: Golf 99 Err Msg: ...Exception 10h in Module Msvbvm50.dll"
permalink: /kb/210/Q210489/
---

## Q210489: Golf 99 Err Msg: ...Exception 10h in Module Msvbvm50.dll

{% raw %}

	Article: Q210489
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg w_golf kbimu msgame
	Last Modified: 08-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf 1999 Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you minimize the Golf 99 startup screen or press ALT+TAB to switch to a
	different program, if you quit that program and then press ENTER to restore Golf
	99, the program behaves as if you clicked the last button you selected on the
	Golf 99 startup screen.
	
	If this button was Quick Start, you also receive the following error message:
	
	  Msgolf99 caused an exception 10h in module Msvbvm50.dll.
	
	When you click Close, and then click Microsoft Golf 99 on the taskbar, you
	restore Golf 99, but the screen graphics are distorted.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- Golf 99 is minimized.
	
	- The Microsoft Golf 99 button on the task bar is selected (depressed) when you
	  press ENTER.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, press ALT+TAB or click Microsoft Golf 99
	on the taskbar to restore Golf 99. Do not press ENTER to restore Golf 99.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Golf 1999 Edition,
	version 1.0.
	
	MORE INFORMATION
	================
	
	When you minimize Golf 99, the ENTER key remains mapped to the last button you
	selected in the Golf 99 startup screen. If another program is running when you
	press ALT+TAB, the problem does not occur because the Microsoft Golf 99 button
	on the taskbar is not selected.
	
	Additional query words: 1.00 msgame golf99 crash scrambled hosed
	
	======================================================================
	Keywords          : kberrmsg w_golf kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
