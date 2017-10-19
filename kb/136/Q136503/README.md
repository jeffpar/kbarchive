---
layout: page
title: "Q136503: Fury3 Err Msg: Unable to Open .POD File..."
permalink: /kb/136/Q136503/
---

## Q136503: Fury3 Err Msg: Unable to Open .POD File...

	Article: Q136503
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fury 3 for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Fury 3, you may receive the following error message:
	
	  Unable to open .POD file. Verify that the Fury 3 CD is inserted in the drive.
	  Or try re-installing Fury 3.
	
	CAUSE
	=====
	
	This behavior can occur if you install Fury 3 in a folder that has more than 256
	characters in the path name.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove Fury 3, and then reinstall it in a folder that has
	less than 256 characters in the path name. To do this, follow the appropriate
	steps for your version of Microsoft Windows.
	
	Microsoft Windows 95/98
	-----------------------
	
	1. Insert the Fury 3 CD-ROM into the CD-ROM drive. Press and hold down SHIFT as
	  you insert the CD-ROM to prevent the program from starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. On the Install/Uninstall tab, click Microsoft Fury 3, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove Fury 3.
	
	5. Click OK, and then close Control Panel.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	  where <cd-rom> is the drive letter for your CD-ROM drive.
	
	8. Follow the instructions on the screen to install Fury 3.
	
	Microsoft Windows 3.1
	---------------------
	
	1. Insert the Fury 3 CD-ROM into the CD-ROM drive.
	
	2. On the File menu in Program Manager, click Run.
	
	3. In the Command Line box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	  where <cd-rom> is the drive letter for your CD-ROM drive.
	
	4. Follow the instructions on the screen to remove Fury 3.
	
	5. On the File menu in Program Manager, click Run.
	
	6. In the Command Line box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	  where <cd-rom> is the drive letter for your CD-ROM drive.
	
	7. Follow the instructions on the screen to install Fury 3.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Fury 3 for Windows,
	version 1.0.
	
	Additional query words: fury3 fury-3 1.00 fury-cubed cubed third power msgame
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu msgame kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbFury3
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
