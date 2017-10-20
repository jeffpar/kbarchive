---
layout: page
title: "Q323947: MechWarrior 4: Black Knight: Maps Do Not Appear in List"
permalink: /kb/323/Q323947/
---

## Q323947: MechWarrior 4: Black Knight: Maps Do Not Appear in List

{% raw %}

	Article: Q323947
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a map during a multiplayer game of Microsoft MechWarrior 4:
	Black Knight, the maps that you previously downloaded may not appear in the map
	list.
	
	CAUSE
	=====
	
	This problem may occur if .nfx files are missing from the Missions folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the existing .nfo files to the .nfx files. To do
	this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "cmd" (without the quotation marks), and then click OK.
	
	3. At the command prompt, type the following, and then press ENTER:
	
	  "cd c:\program files\microsoft games\mechwarrior
	  vengeance\resource\missions\" (without the quotation marks)
	
	4. At the command prompt, type the following, and then press ENTER:
	
	  "copy *.nfo *.nfx" (without the quotation marks)
	
	5. If you are prompted to confirm the overwriting of existing files, press N.
	
	  The maps are now available in the map list.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
