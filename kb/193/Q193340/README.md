---
layout: page
title: "Q193340: Err Msg: An Error Occurred During Extraction of Required Files"
permalink: /kb/193/Q193340/
---

## Q193340: Err Msg: An Error Occurred During Extraction of Required Files

	Article: Q193340
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup aoe ccabtf kbimu msgame
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a patch for Microsoft Age of Empires or Microsoft
	Close Combat: A Bridge Too Far, you may receive the following error message:
	
	  An error occured during extraction of required files, please check for
	  sufficient disk space.
	
	CAUSE
	=====
	
	This behavior can occur if not enough space is available on your hard disk to
	create the temporary files needed to install the patch.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the temporary files in the Windows\Temp folder on
	your hard disk. To do this, follow these steps:
	
	1. Click Start, and then click Shut Down.
	
	2. Click Restart In MS-DOS Mode, and then click Yes.
	
	3. At the command prompt, type the following line, and then press ENTER
	
	  cd \<windows>\temp
	
	  where <windows> is the folder in which Microsoft Windows is installed.
	
	4. At the command prompt, type "del *.tmp" (without the quotation marks), and
	  then press ENTER. If you are prompted to delete the files, press Y (Yes) or A
	  (Yes to all).
	
	5. At the command prompt, type "exit" (without the quotation marks), and then
	  press ENTER to restart the computer.
	
	If the issue continues to occur, make a backup of the contents of the Temp
	folder, and then repeat steps 1-5 to delete all of the files in the Temp folder.
	
	MORE INFORMATION
	================
	
	The patch files for the products listed at the beginning of this article are
	available from the following Microsoft Web site:
	
	  http://www.microsoft.com/games/download.htm
	
	Additional query words: 1.00 2.00 msgame ageofempires closecombat update
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup aoe ccabtf kbimu msgame 
	Technology        : kbHomeProdSearch kbAOE kbGamesSearch kbCloseCombatSearch kbAOESearch kbCloseCombat2
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
