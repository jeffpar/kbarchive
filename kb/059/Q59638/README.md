---
layout: page
title: "Q59638: Control Panel Accepts Invalid Timeslice Values"
permalink: /kb/059/Q59638/
---

## Q59638: Control Panel Accepts Invalid Timeslice Values

{% raw %}

	Article: Q59638
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Valid timeslice values for the 386 enhanced mode section of the Control Panel
	are 1 to 10,000. However, the Control Panel allows you to enter invalid values
	without producing an error message.
	
	The minimum timeslice may be set manually by keying a number directly, instead of
	using the arrow buttons, to 99,999. Windows truncates this number to 9,999 and
	does not return an error message. If the arrow buttons are used to increase the
	timeslice setting, it goes no higher than 1,000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. This
	problem does not occur in later versions of Windows or in Windows for
	Workgroups.
	
	Additional query words: 3.0 3.00 time slice
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
