---
layout: page
title: "Q102811: WFWG Err Msg: Network Name Was Deleted"
permalink: kb/102/Q102811/
---

## Q102811: WFWG Err Msg: Network Name Was Deleted

	Article: Q102811
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows for WorkGroups over an existing LAN Manager installation,
	you may receive the following error message:
	
	  Network name was deleted
	
	CAUSE
	=====
	
	This error occurs if you still have the LAN Manager entry for NET.EXE (something
	similar to "c:\<lanman dir> net.exe=1,") in a file called DOSAPP.INI.
	
	RESOLUTION
	==========
	
	To correct this problem, rename or delete the DOSAPP.INI file. After doing so,
	the error no longer appears.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
