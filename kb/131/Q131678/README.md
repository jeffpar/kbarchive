---
layout: page
title: "Q131678: PC NTMMTA: Err Msg: Unable to Open Specified INI File"
permalink: kb/131/Q131678/
---

## Q131678: PC NTMMTA: Err Msg: Unable to Open Specified INI File

	Article: Q131678
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start an instance of the Microsoft Mail Multitasking MTA for Windows NT
	(NT MMTA) as a Service, and you open a monitor window to that instance, the
	following error message may occur:
	
	  WARNING: Unable to open specified INI file.
	
	No errors will be logged.
	
	CAUSE
	=====
	
	The path to the EXTERNAL.INI file as specified in the Microsoft Mail Service
	Manager is incorrect or points to a drive that is not available at the time the
	instance starts.
	
	RESOLUTION
	==========
	
	It is recommended to have the EXTERNAL.INI file used by the NTMMTA located in
	the local C: drive of the computer running External. This will avoid the problem
	causing this error message and other problems. You must have the EXTERNAL.EXE
	and associated files in the local drive, not in a network drive.
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
