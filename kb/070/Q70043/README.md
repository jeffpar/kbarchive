---
layout: page
title: "Q70043: Tandy 2800HD Unable to Run Windows in Standard Mode"
permalink: /kb/070/Q70043/
---

## Q70043: Tandy 2800HD Unable to Run Windows in Standard Mode

{% raw %}

	Article: Q70043
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Tandy 2800HD is a 80C286 portable computer that is not capable of running
	Microsoft Windows 3.0 in standard mode.
	
	MORE INFORMATION
	================
	
	The Tandy 2800HD has a 80C286 chip built around 8-bit architecture and is unable
	to load HIMEM.SYS. The 2800HD comes with 1 MB of RAM and 384K of ram that is
	shadowed. Even with a 1 MB upgrade option, the HIMEM.SYS driver cannot load due
	to the system's design. This computer can run Windows 3.0 in real mode.
	
	This computer also has problems running MS-DOS 5.0, because of its architectural
	design. The HIMEM.SYS driver shipped with MS-DOS 5.0 is not able to load on this
	computer.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
