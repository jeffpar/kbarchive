---
layout: page
title: "Q102912: Scenes 1.0: Removing Picture Set Does Not Remove from Disk"
permalink: kb/102/Q102912/
---

## Q102912: Scenes 1.0: Removing Picture Set Does Not Remove from Disk

	Article: Q102912
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Scenes Wizards to remove a picture set from Microsoft
	Scenes, the picture set isn't erased from your hard disk but is removed from
	Scenes. The next time you use Wizards to add a picture set, the set that you
	previously removed is restored.
	
	WORKAROUND
	==========
	
	1. Open Scenes and chose Remove Picture Set.
	
	2. Choose the picture set you want to remove.
	
	3. Start File Manager.
	
	4. Choose the directory in which the picture set is installed.
	
	5. Delete or rename the following files:
	
	  PICSET.INI
	  ENU.INI
	  MMS_0.CAT
	
	6. You are now able to add or remove bitmaps to the picture set.
	
	Additional query words: msscenes screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch
	Version           : :1.0
	
	=============================================================================
	
