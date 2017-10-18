---
layout: page
title: "Q134666: MSN: Changing Swapfile Size May Cause Page Fault Error"
permalink: kb/134/Q134666/
---

## Q134666: MSN: Changing Swapfile Size May Cause Page Fault Error

	Article: Q134666
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you sign in to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  Explorer caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you changed the size of the Windows swapfile.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the default Windows swapfile settings. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Virtual Memory.
	
	4. Click "Let Windows manage my virtual memory settings (Recommended)," and then
	  click OK.
	
	5. Click OK or Close. If you are prompted to restart Windows, click Yes.
	
	MORE INFORMATION
	================
	
	This error occurs if you have the "Show MSN Today title on startup" option
	selected and you have e-mail waiting on the server.
	
	Additional query words: msn email
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
