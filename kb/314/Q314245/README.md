---
layout: page
title: "Q314245: Flight Simulator 2002: Err Msg: Font &quot;Quartz&quot;(-22) Isn't Found"
permalink: /kb/314/Q314245/
---

## Q314245: Flight Simulator 2002: Err Msg: Font &quot;Quartz&quot;(-22) Isn't Found

{% raw %}

	Article: Q314245
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Flight Simulator 2002, you may receive an error message
	similar to the following:
	
	  Font "quartz"(-22) isn't found; using "Tahoma" instead.
	
	When you click OK, you receive the following error message:
	
	  Font "quartz"(-16) isn't found; using "Tahoma" instead.
	
	When you click OK, Flight Simulator 2002 starts, but with a font other than the
	Quartz font.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Windows Quartz font files are missing
	or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Quartz font files in the Windows\Fonts folder
	with new copies from the Flight Simulator 2002 installation folder. To do this,
	follow these steps:
	
	1. Start Windows Explorer, and then browse to the following folder:
	
	  C:\Program Files\Microsoft Games\FS2002\fonts
	
	2. In the right pane of the Explorer window, right-click quartz.ttf, and then
	  click Copy on the shortcut menu that appears.
	
	3. Browse to the following folder:
	
	  C:\Windows\FONTS
	
	4. In the right pane of the Explorer window, right-click Quartz, and then click
	  Delete on the shortcut menu that appears. Click Yes to confirm the deletion.
	
	  NOTE: If the Quartz TrueType font is not present in the FONTS folder, skip
	  this step.
	
	5. On the Edit menu, click Paste.
	
	6. Quit Windows Explorer.
	
	MORE INFORMATION
	================
	
	For additional information about how to restore Windows fonts, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q234749 How to Restore the Windows Default Fonts
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002 kbFlightSim2002Pro
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
