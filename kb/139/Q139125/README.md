---
layout: page
title: "Q139125: Windows 95 SnaBase Uses Taskbar Even When Not Shown"
permalink: /kb/139/Q139125/
---

## Q139125: Windows 95 SnaBase Uses Taskbar Even When Not Shown

{% raw %}

	Article: Q139125
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure the SnaBase process included with the SNA Server Windows 95
	client to use the taskbar, Windows 95 moves all other taskbar icons to the left
	if the taskbar is full.
	
	CAUSE
	=====
	
	The SNA Server Windows 95 SnaBase process is not properly handling its task bar
	icon when it is configured to be hidden.
	
	RESOLUTION
	==========
	
	Microsoft has updated the SnaBase service to hide itself and never add itself to
	the task bar.
	
	This update also fixes other small user interface (UI) related bugs:
	
	- The default menu option is now highlighted (only if no icon is on the task
	  bar).
	
	- The configuration dialog box is now displayed close to the current cursor
	  location instead of the bottom right corner .
	
	- The SnaBase makes sure that the task bar does not block any part of the
	  configuration dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 win95x 95
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
