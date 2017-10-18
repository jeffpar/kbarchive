---
layout: page
title: "Q134597: BREAK and VERIFY Commands Do Not Work in MS-DOS Window"
permalink: kb/134/Q134597/
---

## Q134597: BREAK and VERIFY Commands Do Not Work in MS-DOS Window

	Article: Q134597
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a NetWare network, your logon script may contain the
	following commands:
	
	  BREAK ON / OFF
	
	  -or-
	
	  VERIFY ON / OFF
	
	But these commands, when run in the Microsoft client for NetWare networks logon
	script processor, are not available in other MS-DOS windows.
	
	CAUSE
	=====
	
	Only the MS-DOS window from which you logged on responds to the MS-DOS BREAK and
	VERIFY commands after the logon script runs. MS-DOS windows you create after you
	started Windows do not load the commands.
	
	RESOLUTION
	==========
	
	Add the BREAK and VERIFY commands to the Autoexec.bat file. This causes the
	settings to be the default settings for each new MS-DOS window.
	
	MORE INFORMATION
	================
	
	For more information about configuring NetWare logon scripts, consult your
	NetWare documentation.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
