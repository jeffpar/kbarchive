---
layout: page
title: "Q82694: Novell's NETBIOS May Require TimerCriticalSection Line"
permalink: kb/082/Q82694/
---

## Q82694: Novell's NETBIOS May Require TimerCriticalSection Line

	Article: Q82694
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft MS-DOS NETBIOS applications run from MS-DOS Prompt under Windows in
	386 enhanced mode may cause your system to stop responding (hang).
	
	WORKAROUND
	==========
	
	To correct this problem, add the following line to [386Enh] section of
	SYSTEM.INI:
	
	     TimerCriticalSection=1000
	
	
	This switch is not added during Setup; it is required only in the above
	circumstance.
	
	NOTE: The Novell NETBIOS.EXE file must be loading before you start Windows.
	
	Additional query words: 3.10 net bios winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : :3.1,3.11
	
	=============================================================================
	
