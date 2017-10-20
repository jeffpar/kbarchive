---
layout: page
title: "Q280835: MechWarrior 4: How to Disable the Y-Axis of Your Pointing Device"
permalink: /kb/280/Q280835/
---

## Q280835: MechWarrior 4: How to Disable the Y-Axis of Your Pointing Device

{% raw %}

	Article: Q280835
	Product(s): Microsoft Home Games
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 02-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable the Y-axis of your pointing device in
	Microsoft MechWarrior 4: Vengeance.
	
	You may want to disable the Y-axis if you want to use your pointing device to
	steer the Mech.
	
	MORE INFORMATION
	================
	
	To disable the Y-axis of your pointing device:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "options.ini" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Find Now.
	
	5. Right-click the Options.ini file, and then click Open.
	
	6. If you are prompted to choose a program to use to open the file, click
	  NotePad, click to clear the "Always use this program to open these files"
	  check box, and then click OK.
	
	7. In the Options.ini file, locate the [Special Commands] section.
	
	8. Under the [Special Commands] section insert a new line, and then type
	  "mousey=false" (without the quotation marks).
	
	For example, the Options.ini file should contain the following lines:
	
	  [Special Commands]
	  mousey=false
	
	9. On the File menu, click Exit, and then click Yes to save the changes.
	
	The next time you start MechWarrior 4: Vengeance, the pointing device does not
	control the up and down movements of the Mech torso.
	
	Additional query words: msgame mech4
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbGamesSearch kbMechWarrior4
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
