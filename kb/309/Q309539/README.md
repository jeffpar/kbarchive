---
layout: page
title: "Q309539: MechWarrior 4: Err Msg: 0036: Unable to Complete Patch"
permalink: /kb/309/Q309539/
---

## Q309539: MechWarrior 4: Err Msg: 0036: Unable to Complete Patch

	Article: Q309539
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft MechWarrior 4 update (patch), you may
	receive an error message similar to the following:
	
	  Error code descriptions can be found in the "PR1 readme.rtf"
	  0036
	  Unable to complete patch.
	
	CAUSE
	=====
	
	This behavior occurs when an unpatched file on your computer's hard disk is
	corrupted. If you drag the error message to the side, the "Mech Warrior 4
	Vengeance Patching Utility" dialog box becomes visible. Look in this dialog box
	to determine which file is responsible for the error message.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Drag the error message off the screen so that you can see the name of the
	  corrupted file in the "Mech Warrior 4 Vengeance Patching Utility" dialog box.
	
	2. In Windows Explorer, browse to the MechWarrior Vengeance folder, and then
	  delete the corrupted file.
	
	  NOTE: This file may be in the Resource folder.
	
	3. Insert the MechWarrior 4 CD1 into your computer's CD-ROM or DVD-ROM drive
	  while you hold down the SHIFT key to prevent the autorun program from
	  starting.
	
	4. Copy the file from the CD-ROM to the folder on your computer's hard disk from
	  which the corrupted file was deleted.
	
	5. Start the PatchApply.exe program to install the update.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
