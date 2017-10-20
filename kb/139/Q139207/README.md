---
layout: page
title: "Q139207: S3 Driver Doesn't Correctly Support 72Hz on Some IBM PS/2 Models"
permalink: /kb/139/Q139207/
---

## Q139207: S3 Driver Doesn't Correctly Support 72Hz on Some IBM PS/2 Models

{% raw %}

	Article: Q139207
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The S3 video driver included with Windows NT version 3.51 does not correctly
	implement the 72Hz refresh rate when used with the onboard S3 based video on IBM
	PS/2 Model 76i and Model 77i computers.
	
	Attempting to install the driver and invoking the "Test" option in the Display
	section of Control Panel results in the test bitmap appearing for a short time,
	after which the image degrades and the screen turns black.
	
	The driver functions correctly when a 60Hz refresh rate is selected.
	
	Depending on the capabilities of your monitor, you may or may not see this
	behavior.
	
	
	CAUSE
	=====
	
	When Windows NT attempts to set the video mode to 72hz, it incorrectly sets it
	to 97hz Vertical and 75mhz Horizontal. The standard for 72hz is 72hz Vertical
	and 48mhz Horizontal.
	
	RESOLUTION
	==========
	
	A new version of the S3.SYS driver is available which corrects this problem. It
	is available in the latest Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt display
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
