---
layout: page
title: "Q129764: ProShare 1.8 Hangs Accessing Data on Remote Computer"
permalink: /kb/129/Q129764/
---

## Q129764: ProShare 1.8 Hangs Accessing Data on Remote Computer

{% raw %}

	Article: Q129764
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intel ProShare version 1.8 stops responding (hangs) when you try to access data
	on a remote computer.
	
	CAUSE
	=====
	
	To use ProShare's sharing capabilities in Windows 95, you must use a Windows 3.1
	video driver on each workstation running ProShare.
	
	The Windows 95 32-bit video drivers use different internal data structures that
	may cause ProShare to hang.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Upgrade to ProShare version 1.9a or later.
	
	- Install and use a Windows 3.1 video driver on each workstation running
	  ProShare. Microsoft does not guarantee that Windows 3.1 video drivers will
	  work correctly in Windows 95.
	
	  For additional information about using Windows 3.1 video drivers in Windows
	  95, please see the following article in the Microsoft Knowledge Base:
	
	  Q127139 Troubleshooting Video Problems in Windows 95
	
	MORE INFORMATION
	================
	
	Intel ProShare uses a digital camera board and an audio/ISDN board to provide
	video conferencing.
	
	ProShare is manufactured by Intel Corporation, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: visvrd.386
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
