---
layout: page
title: "Q95576: WFWG: Network Card Detection Hangs Machine During Setup"
permalink: /kb/095/Q95576/
---

## Q95576: WFWG: Network Card Detection Hangs Machine During Setup

{% raw %}

	Article: Q95576
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you disable hardware detection during Windows for Workgroups Setup because
	network card detection (NCD) has made your machine stop responding (hang), Setup
	doesn't perform any hard disk drive and video adapter detection either. This
	results in 32-bit disk access support not being installed.
	
	RESOLUTION
	==========
	
	Microsoft recommends that you not use the /I switch to avoid NCD because Windows
	for Workgroups automatically skips NCD the second time you run Setup if it
	failed before. The following line is added to the [boot] section of the
	SYSTEM.INI file before NCD takes place:
	
	       ignore_hw_detect=true
	
	If this switch is present in the SYSTEM.INI file, Setup skips NCD, but continues
	to check your hard disk drive and video adapter.
	
	NOTE: If you run Setup a second time and your computer hangs again, use the /I
	switch.
	
	Additional query words: netcard 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
