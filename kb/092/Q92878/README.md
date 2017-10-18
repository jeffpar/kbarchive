---
layout: page
title: "Q92878: WFWG NET.EXE Err Msg: MS-DOS Popup for Workgroups Could Not..."
permalink: kb/092/Q92878/
---

## Q92878: WFWG NET.EXE Err Msg: MS-DOS Popup for Workgroups Could Not...

	Article: Q92878
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message in Windows for Workgroups if you try
	to remove NET.EXE from memory:
	
	  MS-DOS Popup for Workgroups could not be removed
	
	CAUSE
	=====
	
	This error is generated if you attempt to unload terminate-and- stay-resident
	(TSR) programs out of sequence. To remove TSR programs, you must unload them in
	the reverse sequence that you loaded them. (For example, you would first unload
	the last driver you loaded.)
	
	MORE INFORMATION
	================
	
	NET.EXE can be loaded each time you need it, or you can load it as a TSR with
	the NET STOP POPUP command. If you load a TSR after NET.EXE, you must first
	unload that TSR before you unload NET.EXE.
	
	This problem often occurs if you load TSRs from the AutoStart line in the
	[network] section of the SYSTEM.INI file.
	
	Additional query words: 3.10 3.11 lifo
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
