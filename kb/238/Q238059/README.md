---
layout: page
title: "Q238059: Encarta Dictionary Err Msg: Cannot Find the File..."
permalink: /kb/238/Q238059/
---

## Q238059: Encarta Dictionary Err Msg: Cannot Find the File...

	Article: Q238059
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta World English Dictionary 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert the Dictionary Disc CD-ROM into your CD-ROM drive to install
	Microsoft Encarta World English Dictionary 2000, you may receive the following
	error message:
	
	  Cannot find the file 'C: PROGRA~1\Microsoft Encarta\Encarta World English
	  Dictionary\ewed.exe' (or one of its components). Make sure the path and
	  filename are correct and that all required libraries are available.
	
	When you click OK, you receive the following error message:
	
	  Could not execute the external program C:PROGRA~1\Microsoft Encarta\Encarta
	  World English Dictionary\Ewed.exe.
	
	When you click OK, you are returned to the desktop.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You restart your computer and insert the Dictionary Disc CD-ROM into the
	  CD-ROM drive before the Microsoft Windows startup sequence is finished.
	
	- The Sfcr10.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To work around this issue, run Encarta World English Dictionary 2000 Setup
	directly from the Dictonary Disc CD-ROM:
	
	1. Insert the Dictionary Disc CD-ROM into the CD-ROM drive. Press and hold down
	  the SHIFT key as you insert the CD-ROM to prevent Setup from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  "<drive>:/setup.exe" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Follow the instructions on the screen to install Encarta World English
	  Dictionary 2000.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Encarta World
	English Dictionary 2000.
	
	Additional query words: multi multi-media media mm ewed installs runtime
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldEngDict2001
	Version           : WINDOWS:; :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
