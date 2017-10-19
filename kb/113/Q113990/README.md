---
layout: page
title: "Q113990: Scenes 1.0: No Picture Sets Installed..."
permalink: /kb/113/Q113990/
---

## Q113990: Scenes 1.0: No Picture Sets Installed...

	Article: Q113990
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Scenes with Microsoft Windows for Workgroups, you may
	receive one of the following error message:
	
	- There are no picture sets installed; run Scenes Wizard to add a picture set
	  or reinstall Scenes
	
	  -or-
	
	- Unrecognized error. Please reinstall Scenes.
	
	CAUSE
	=====
	
	This error occurs if Windows for Workgroups is configured for use with Novell
	ODI drivers and 32-bit file access (VFAT) is enabled.
	
	RESOLUTION
	==========
	
	To work around this problem, disable 32-bit file access as follows:
	
	1. Run Control Panel and choose the 386 Enhanced icon.
	
	2. Choose the Virtual Memory button.
	
	3. Choose the Change button.
	
	4. Clear the Use 32-Bit File Access check box.
	
	5. Choose OK and then restart Windows.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may be able to add picture sets in Microsoft Scenes without receiving the
	above error message; however, if you exit and then restart Microsoft Scenes, the
	above error message does appear.
	
	ODIHLP.EXE is a real-mode Windows for Workgroups component that allows LSL to
	complete its binding process. It hooks all the real-mode entry points so that
	MSODISUP.386 can use this information when working in protected mode. To use
	Novell as a secondary network configured with ODI, this file must be loaded. You
	cannot remove this file; if you do so, you disable all networking functionality
	within Windows for Workgroups.
	
	
	Additional query words: 3.1 3.11 msscenes netware screen saver screensaver wfwg wfw win3x
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
