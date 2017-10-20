---
layout: page
title: "Q303913: MechCommander 2.0: You Cannot See In-Game Videos"
permalink: /kb/303/Q303913/
---

## Q303913: MechCommander 2.0: You Cannot See In-Game Videos

{% raw %}

	Article: Q303913
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft MechCommander 2.0, you may be unable to see any in-game
	videos.
	
	During the opening video you may hear the sounds and music but your screen will
	display the Mission Selection screen without any options. The Information Bar,
	at the bottom of the screen will display the error,
	
	  mc2res.dll:0 not defined
	
	CAUSE
	=====
	
	This behavior can occur if all the following conditions are true:
	
	   - An ATI Rage Fury Maxx video card is installed in your Microsoft Windows 98
	  Second Edition or Millennium-based computer.
	
	  -and-
	
	- Both display adaptor processors are enabled
	
	  -and-
	
	- Your display resolution is set above 1280 x 1024 with 16-bit high colors.
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce your display settings to 1280 x 1024 with 16-bit
	high colors or lower. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Colors section, select "High Color (16 bit)".
	
	5. In the Screen area section, drag the slider to 1280 x 1024 or lower.
	
	6. Click OK.
	
	For additional information about related issues, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q303901 MechCommander 2.0: Known Video Card Issues
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame mech commander mech2
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
