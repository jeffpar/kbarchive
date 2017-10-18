---
layout: page
title: "Q238058: Encarta Encyclopedia 2000: Hangs When You Run a Virtual Tour"
permalink: kb/238/Q238058/
---

## Q238058: Encarta Encyclopedia 2000: Hangs When You Run a Virtual Tour

	Article: Q238058
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click a Tour Stop, an item on the Tour Stops map, or move your pointing
	device over any of the commands on the Tools menu when you run a Virtual Tour in
	Microsoft Encarta Encyclopedia 2000, you may experience one or more of the
	following symptoms:
	
	- The program may stop responding (hang).
	
	- You may receive the following error message:
	
	  Dr. Watson for Windows NT
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Enc2000.exe
	  Exception: access violation (0xc0000005),Address: 0x5f40dccf
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You run Encarta Encyclopedia 2000 on a Microsoft Windows NT 4.0-based
	  computer.
	
	- You click the Restore button in the upper-right corner of the Encarta
	  Encyclopedia 2000 window before you start the Virtual Tour.
	
	RESOLUTION
	==========
	
	To work around this issue, increase the size of the Encarta Encyclopedia 2000
	window. To do this, drag any corner of the Encarta Encyclopedia 2000 window to
	increase the size of the window to the size you want, or click the maximize
	button in the upper-right corner of the window.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Encarta Encyclopedia
	2000.
	
	Additional query words: multi multi-media media mm ee2k resize small winnt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
