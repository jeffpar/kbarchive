---
layout: page
title: "Q233182: Zone Err Msg: The File/Fileset &lt;Filename&gt; Is Unaccounted For"
permalink: /kb/233/Q233182/
---

## Q233182: Zone Err Msg: The File/Fileset &lt;Filename&gt; Is Unaccounted For

{% raw %}

	Article: Q233182
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup igz kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to enter a game room on Zone.com, you may receive one of the
	following error messages:
	
	  The File/Fileset <filename> is unaccounted for.
	
	where <filename> is the name of an Zone.com file or fileset.
	
	  -or-
	
	  Unable to parse line <xxx>.
	
	where <xxx> is a string of random or unintelligible characters.
	
	  -or-
	
	  ZSetup was started, but rejected the component data.
	  Please verify that your Zone installation is valid.
	
	CAUSE
	=====
	
	This behavior can occur if certain Zone files are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall the Zone.zat file and the Zsetup
	folder. To do this:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the following line:
	
	  zone.za? "zsetup"
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. On the Edit menu, click Select All.
	
	5. On the File menu, click Delete. When you are prompted to confirm the multiple
	  file deletion, click Yes.
	
	  NOTE: By default, these files are located in the following folder:
	
	  C:\Program Files\MSN Gaming Zone
	
	6. Close the Find: Files Named Zone.za? "Zsetup" window.
	
	7. To reinstall the Zone.zat file and the ZSetup folder, connect to the
	  following Zone.com Web site:
	
	  http://zone.msn.com
	
	  The missing files are installed automatically when you connect to a game room.
	
	Additional query words: msngz msnzone downloads corrupt
	
	======================================================================
	Keywords          : kberrmsg kbsetup igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
