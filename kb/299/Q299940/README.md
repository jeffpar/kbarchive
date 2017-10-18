---
layout: page
title: "Q299940: Train Simulator: How to Turn Off the Opening Movie"
permalink: kb/299/Q299940/
---

## Q299940: Train Simulator: How to Turn Off the Opening Movie

	Article: Q299940
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Microsoft Train Simulator runs an opening movie when you start the program. Some
	systems may have problems running this movie. This article discusses the steps
	to turn off the opening movie so that it does not run when you start Train
	Simulator.
	
	MORE INFORMATION
	================
	
	To turn off the opening movie so that it does not run when you start Train
	Simulator, follow these steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, and then type "regedit" (without the quotation marks)
	  in the Open box.
	
	2. Click OK.
	
	3. Navigate to the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Microsoft Games\Train
	  Simulator\1.0\HWRenderer
	
	4. In the left pane, double-click ShowLogo under the Name column.
	
	5. Change the Value data from 1 to 0.
	
	6. Click OK.
	
	7. Quit the Registry Editor.
	
	Additional query words: msgame trainsim
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
