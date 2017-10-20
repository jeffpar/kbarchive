---
layout: page
title: "Q128609: Display Skewed at High Resolution on IBM 9515 Monitor"
permalink: /kb/128/Q128609/
---

## Q128609: Display Skewed at High Resolution on IBM 9515 Monitor

{% raw %}

	Article: Q128609
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the video resolution of an IBM XGA-2 video adapter with IBM
	9515 display monitor to a high resolution (for example, 1024x768 with 256
	colors), the display may be skewed to one side.
	
	CAUSE
	=====
	
	The IBM 9515 display monitor synchronizes at refresh frequencies other than 75
	Hertz, but it does not have adjustments to move the display vertically or
	horizontally.
	
	RESOLUTION
	==========
	
	To correct this problem, run Control Panel, choose Display, and change the
	Refresh Frequency to 75 Hertz.
	
	MORE INFORMATION
	================
	
	The IBM 9515 monitor does not support the resolution of 800x600 under any
	operating system.
	
	The IBM products discussed here is manufactured by IBM Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: XGA2 VGA multisync prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
