---
layout: page
title: "Q82328: Copying Files with Artisoft Alone and SMARTDrive 4.0"
permalink: kb/082/Q82328/
---

## Q82328: Copying Files with Artisoft Alone and SMARTDrive 4.0

	Article: Q82328
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer stops (locks up or hangs) when you run Artisoft's Alone program
	and Microsoft Windows with SMARTDrive loaded, and you try to copy files between
	workstations and servers.
	
	Several copy operations may be successful, but eventually a copy operation causes
	the computer to hang.
	
	CAUSE
	=====
	
	This problem occurs because of the way Alone uses internal stacks. Alone does
	not monitor its use of stacks and eventually fills them up completely.
	
	RESOLUTION
	==========
	
	Don't run the Alone program. Alone is not required for full functionality on
	Lantastic networks.
	
	Disabling SMARTDrive write-behind caching on shared drives also corrects this
	problem.
	
	
	MORE INFORMATION
	================
	
	Artisoft's Alone program is a stand-alone server monitor that you run when you
	plan to use the machine as both a server and a workstation. Alone is a server
	monitor that displays a screen of information that let's you check the activity
	on the machine.
	
	The Artisoft product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 lockup crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
