---
layout: page
title: "Q71941: Path or File Not Found Error With Windows MS-DOS Prompt"
permalink: /kb/071/Q71941/
---

## Q71941: Path or File Not Found Error With Windows MS-DOS Prompt

	Article: Q71941
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter a
	
	  path not found
	
	or
	
	  file not found
	
	error message if you use the MS-DOS Prompt utility in Microsoft Windows 3.0 to
	try to type a filename or copy a file on a network drive.
	
	CAUSE
	=====
	
	This problem can be caused by using XMSNETx.EXE version 3.01 revision A.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the 3.02 version of the workstation update,
	create a new IPX.COM, and use the 3.02 version of XMSNETx.EXE.
	
	To find out what revision of the shell is running, type
	
	  NVER
	
	after logging on to the network; or on the boot disk, go to the directory where
	the XMSNETx.EXE is located and type
	
	  XMSNETx i
	
	where x is 3 or 4, depending on what version of MS-DOS is being used.
	
	Temporary Workaround
	--------------------
	
	Replace the XMSNETx.EXE with NETx.COM (version 3.01) until the upgraded
	components can be obtained.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
