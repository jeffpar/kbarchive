---
layout: page
title: "Q86036: Not Enough Memory or System Hangs with Lantastic Version 4.1"
permalink: kb/086/Q86036/
---

## Q86036: Not Enough Memory or System Hangs with Lantastic Version 4.1

	Article: Q86036
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the
	
	  Not enough memory to run <application name>
	
	message or your system may hang when you run a shared copy of Windows on an
	Artisoft Lantastic version 4.1 workstation.
	
	RESOLUTION
	==========
	
	To correct this problem, add the following line to the [386 Enh] section of your
	SYSTEM.INI file:
	
	  UniqueDOSPSP=ON
	
	MORE INFORMATION
	================
	
	For more information on UniqueDOSPSP, query on the following words in the
	Microsoft Knowledge Base:
	
	  UniqueDOSPSP and EMMsize
	
	The product included here, Artisoft Lantastic version 4.1, is manufactured by a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	
	KBCategory: kbnetwork kb3rdparty kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
