---
layout: page
title: "Q120202: MindMaze Err Msg: Cannot Access This File"
permalink: /kb/120/Q120202/
---

## Q120202: MindMaze Err Msg: Cannot Access This File

{% raw %}

	Article: Q120202
	Product(s): Microsoft Home Kids Products
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to save a player in the MindMaze game included with Encarta, you may
	receive the following error message
	
	  NAME.SAV
	  Cannot access this file.
	  Please verify security privileges on the network drive
	
	CAUSE
	=====
	
	After doing a slower installation of Encarta 1994, the working directory
	(folder) points to the Encarta directory on the Encarta CD. Because files cannot
	be saved to a CD-ROM, the error message is generated.
	
	RESOLUTION
	==========
	
	Change the working directory to the hard drive. Use one of the following
	methods:
	
	Set Up Encarta Again Using the Faster Option
	--------------------------------------------
	
	1. Run Encarta Setup and choose the Remove All button.
	
	2. Reinstall Encarta and choose Faster from the Setup dialog box. This will
	  automatically use the hard drive for the working directory.
	
	Slower Install: Windows or Windows for Workgroups 3.1x
	------------------------------------------------------
	
	1. From the Program Manager, single-click the Encarta icon.
	
	2. From the File menu, choose Properties.
	
	3. Change the working directory to the directory on your hard drive where
	  Encarta is installed (usually C:\ENCARTA).
	
	4. Choose OK.
	
	Slower Install: Windows 95
	--------------------------
	
	1. Click the Start Button, then click Run.
	
	2. Type the Windows folder name (usually C:\WINDOWS), then click OK.
	
	3. When the Windows folder opens, double-click the Start Menu folder.
	
	4. Double-click the Programs folder, then double-click Microsoft Multimedia.
	
	5. Single-click the Encarta icon.
	
	6. On the File menu, click Properties. The property sheet appears.
	
	7. Click the Shortcut tab.
	
	8. In the Start In box, type the directory on the hard drive where Encarta is
	  installed (usually C:\ENCARTA).
	
	9. Click OK.
	
	WORKAROUND
	==========
	
	To save to a different directory while in Encarta:
	
	1. On the File menu, click Save A Player.
	
	2. In the Save For dialog box, change the drive from the CD-ROM drive to the
	  hard drive. The selected drive can be changed in the Drives box in the
	  lower-right corner.
	
	3. Under Directories (Folders), change to the Encarta subdirectory.
	
	4. Click the OK button.
	
	
	Additional query words: 1994multi media multimedia multi-media Encarta Encarta94 mindmaze mind maze file access can not cannot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}
