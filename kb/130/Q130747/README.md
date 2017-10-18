---
layout: page
title: "Q130747: WSS Setup Does Not Load TASKMAN.EXE"
permalink: kb/130/Q130747/
---

## Q130747: WSS Setup Does Not Load TASKMAN.EXE

	Article: Q130747
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Task Manager button to close applications during the
	installation of the Microsoft Windows Sound System, your computer beeps and does
	not open the Task Manager program specified in the [BOOT] section of the
	SYSTEM.INI file.
	
	CAUSE
	=====
	
	The Windows Sound System tries to open TASKMAN.EXE from the Windows directory
	instead of using the TASKMAN= line in the [BOOT] section of the SYSTEM.INI file
	to locate the Task Manager program.
	
	RESOLUTION
	==========
	
	Make sure that the TASKMAN.EXE file is present in the Windows directory, or
	press CTRL+ESC to load the task manager specified in the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	When you install the Windows Sound System, Setup prompts you to close all other
	applications before continuing. Setup displays a Task Manager button so that you
	can use Task Manager to close the other applications. However, choosing this
	button does not open the task manager specified in the SYSTEM.INI file. Instead,
	Setup tries to load the TASKMAN.EXE file from the Windows directory. If this
	file is not present, your computer beeps and Task Manager is not loaded.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
