---
layout: page
title: "Q174860: No Sound in Windows After Installing Close Combat"
permalink: /kb/174/Q174860/
---

## Q174860: No Sound in Windows After Installing Close Combat

	Article: Q174860
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsound kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Close Combat, you no longer hear any sound in Windows.
	
	This behavior has been reported to occur on some HP Pavilion computers using
	Crystal sound cards.
	
	CAUSE
	=====
	
	This occurs if an installation of DirectX replaced the Crystal sound card
	driver.
	
	RESOLUTION
	==========
	
	Use the following steps to resolve the problem:
	
	NOTE: You should follow this procedure each time DirectX replaces the Crystal
	sound card driver. In the future, if you are prompted to update your sound card
	driver during a DirectX installation, click No.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Double click Sound, Video, And Game Controllers to expand the branch.
	
	5. Click the entry for MS Sound Driver to select it.
	
	6. Click Remove, and then click OK to confirm the removal.
	
	7. Click OK.
	
	8. Restart Windows. After restarting, you will notice that Crystal 4232 Plug and
	  Play Audio Hardware appears under Sound, Video, And Game Controllers.
	
	MORE INFORMATION
	================
	
	Removing the wrongly detected sound card driver from Device Manager and allowing
	Windows to re-detect the Crystal hardware corrects the sound problem in Windows.
	
	Additional query words: 1.00 closecombat cc hewlett packard pnp
	
	======================================================================
	Keywords          : kbenv kbsound kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
