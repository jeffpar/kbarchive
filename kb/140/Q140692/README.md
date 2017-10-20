---
layout: page
title: "Q140692: Scenes 2.0: Invalid Dynamic Link Call Error"
permalink: /kb/140/Q140692/
---

## Q140692: Scenes 2.0: Invalid Dynamic Link Call Error

{% raw %}

	Article: Q140692
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to add or preview a .pcd (Kodak Photo CD) file in the Scenes
	Wizards, one of the following error messages may occur:
	
	  Program Error
	
	  Your program is making an invalid dynamic link call to a .dll file.
	
	-or-
	
	  Msswiz
	
	  Cannot find the file 'msswiz.dll'.
	  Make sure that the file exists on your system and that the path and filename
	  are correct.
	
	CAUSE
	=====
	
	The errors can occur if you have an outdated or corrupt version of the
	Pcdlib.dll file. Pcdlib.dll is the Kodak Photo CD library provided by Kodak to
	read Kodak Photo CD files. The version of Pcdlib.dll that is provided with
	Scenes is dated 8/10/94 and has 84,448 bytes.
	
	RESOLUTION
	==========
	
	To end the error messages, check the following:
	
	1. Make sure only one copy of the Pcdlib.dll file is present. The file should be
	  located in the \Windows\system folder.
	
	2. Replace the Pcdlib.dll file in the \Windows\System folder with the version
	  that is provided with Scenes.
	
	NOTE: The following instructions assume:
	
	- Your hard drive is drive C.
	
	- Your floppy drive is drive A.
	
	To replace the file, do the following:
	
	1. Insert the Scenes Disk 1 into the your floppy drive.
	
	2. Type the following command at an MS-DOS prompt and press ENTER:
	
	  expand a:pcdlib.dl_ c:\windows\system\pcdlib.dll
	
	Additional query words: gpf kodac msscenes photocd screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes200
	Version           : 2.00
	
	=============================================================================
	

{% endraw %}
