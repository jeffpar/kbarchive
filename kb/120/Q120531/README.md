---
layout: page
title: "Q120531: Scenes 2.0: Copy a Collection to Disk Wizard Fails"
permalink: /kb/120/Q120531/
---

## Q120531: Scenes 2.0: Copy a Collection to Disk Wizard Fails

	Article: Q120531
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running the "Copy a collection to floppy disk" wizard, and the
	collection you are copying has a file that is greater in size than the disk(s)
	to which you are copying, the wizard fails. For example, this problem occurs if
	you are copying an 800K JPEG file to a 720K disk.
	
	MORE INFORMATION
	================
	
	The "Copy a collection to floppy disk" wizard will appear to be successful.
	However, when trying to add the collection, the failure will occur. The JPEG
	file will be unreadable, and the NFO and THM files will be fine.
	
	This problem occurs because the wizard cannot split a file onto separate disks.
	
	Additional query words: msscenes screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
