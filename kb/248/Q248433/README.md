---
layout: page
title: "Q248433: Fighter Ace II Err Msg: Expected Voodoo Graphics, None Detected"
permalink: /kb/248/Q248433/
---

## Q248433: Fighter Ace II Err Msg: Expected Voodoo Graphics, None Detected

{% raw %}

	Article: Q248433
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbhw kbimu msgame kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fighter Ace II 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Fighter Ace II, you may receive the following error
	message when you click Fly Now in the game:
	
	  _glidenitnvironment: Glide2x.dll expected Voodoo graphics, none detected.
	
	CAUSE
	=====
	
	This behavior can occur if you removed a video adapter based on the 3Dfx chip
	set from your computer and replaced it with a video adapter based on a different
	chip set.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure Fighter Ace II to use the Direct 3D display
	setting or software rendering:
	
	1. Start Fighter Ace II.
	
	2. On the startup screen, click the Settings tab.
	
	3. Under Display, click Direct 3D or Software.
	
	If the issue continues to occur, delete the Glide2x.dll file:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "glide2x.dll" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. On the Edit menu, click Select All.
	
	5. On the File menu, click Delete. When you are prompted to confirm the file
	  deletion, click Yes.
	
	6. Close the Find: Files Named Glide2x.dll window.
	
	Additional query words: 2.00 msgame fa msngz igz banshee chipset
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbhw kbimu msgame kbHardware 
	Technology        : kbGamesSearch kbMSNSearch kbFighterAceSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
