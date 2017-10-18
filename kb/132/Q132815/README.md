---
layout: page
title: "Q132815: Server-Based Setup Crashes After Setting Up Hardware"
permalink: kb/132/Q132815/
---

## Q132815: Server-Based Setup Crashes After Setting Up Hardware

	Article: Q132815
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may stop responding (hang) during a server-based installation on an
	EISA computer using a NetBEUI connection. You may receive an error message on a
	blue screen after the first reboot at the Setting Up Hardware screen.
	
	CAUSE
	=====
	
	The configuration manager is turning NetBEUI off dynamically during the
	installation process, and causing the network connection to be lost.
	
	RESOLUTION
	==========
	
	Restart the computer and allow Setup to continue. Setup should continue and
	finish correctly. The computer is set up correctly and will run correctly. This
	problem has no effect on the setup process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
