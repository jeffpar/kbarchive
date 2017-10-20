---
layout: page
title: "Q113204: Scenes 1.0: Unrecognized Error. Please Reinstall Scenes"
permalink: /kb/113/Q113204/
---

## Q113204: Scenes 1.0: Unrecognized Error. Please Reinstall Scenes

{% raw %}

	Article: Q113204
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the screen saver is scheduled to start, one of the following errors is
	displayed on the screen:
	
	  Unrecognized Error. Please reinstall Scenes.
	
	  -or-
	
	  Unrecognized Error. Please exit and start Scenes again.
	
	CAUSE
	=====
	
	This error occurs if Scenes is not installed and the Desktop section of Control
	Panel is set up to run Scenes as the screen saver. If you try to uninstall
	Scenes by deleting the Scenes directory, it does not delete the necessary files
	to keep Scenes from appearing in the Desktop dialog box.
	
	
	RESOLUTION
	==========
	
	The following steps correct this problem:
	
	1. In Control Panel, choose the Desktop icon.
	
	2. In the screen saver section, select None or a valid screen saver setting,
	  then choose OK.
	
	3. Quit Windows.
	
	4. Change to the Windows directory.
	
	5. Delete the file SSMSSCNS.SCR. This step removes the Scenes option from the
	  Desktop screen saver choices.
	
	MORE INFORMATION
	================
	
	For more information uninstalling Microsoft Scenes, query on the following words
	in the Microsoft Knowledge Base:
	
	  "uninstall and scenes" (without the quotation marks)
	
	Additional query words: errmsg msscenes remove screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
