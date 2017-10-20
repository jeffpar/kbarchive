---
layout: page
title: "Q289106: DirectX 8: Cannot Install on a Computer That Uses a Cyrix 686"
permalink: /kb/289/Q289106/
---

## Q289106: DirectX 8: Cannot Install on a Computer That Uses a Cyrix 686

{% raw %}

	Article: Q289106
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows Millennium Edition 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft DirectX 8 or later, you may receive the
	following error message:
	
	  Unsupported processor.
	
	CAUSE
	=====
	
	This behavior can occur if your computer is running a Cyrix 686-class processor.
	
	MORE INFORMATION
	================
	
	This behavior can occur if the Cyrix 686 processor does not properly support the
	CPUID command or the processor is detected as a 486-class processor.
	
	Non-Pentium class processors are unsupported by DirectX 8 and later.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbOSWin2000 kbOSWin98 kbOSWinME kbOSWinSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
