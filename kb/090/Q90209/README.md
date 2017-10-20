---
layout: page
title: "Q90209: After Dark 2.0 Causes System Halts"
permalink: /kb/090/Q90209/
---

## Q90209: After Dark 2.0 Causes System Halts

{% raw %}

	Article: Q90209
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install After Dark 2.0 over your Windows for Workgroups installation,
	your system may stop responding (hang). You may see the same behavior on other
	machines running the Microsoft Windows operating system with network
	connectivity.
	
	CAUSE
	=====
	
	This is caused by After Dark's use of its own PC speaker driver, which disables
	interrupts commonly used by network redirectors.
	
	WORKAROUND
	==========
	
	There are two ways to avoid this problem:
	
	- Use a sound adapter and appropriate driver. Then select the setup button in
	  the fully installed After Dark product, and select the appropriate sound
	  option.
	
	- After installing After Dark, select the Mute Sound check box from the setup
	  dialog box.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
