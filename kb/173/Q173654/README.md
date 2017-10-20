---
layout: page
title: "Q173654: Windows 95 Hangs When Running Server Tools"
permalink: /kb/173/Q173654/
---

## Q173654: Windows 95 Hangs When Running Server Tools

{% raw %}

	Article: Q173654
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Server Tools from the Microsoft Windows NT Server version 4.0
	CD-ROM, Windows 95 may stop responding (hang) when you start User Manager or
	Server Manager or when you try to assign share permissions using user-level
	security.
	
	CAUSE
	=====
	
	This behavior can occur if Norton AntiVirus 2.0 for Windows 95 is installed and
	the All Files option is selected under Auto-Protect. This setting prevents
	Windows 95-based computers from retrieving the user list.
	
	
	RESOLUTION
	==========
	
	Upgrade to Norton AntiVirus 2.01, or select the Program Files option instead of
	the All Files option under Auto-Protect.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: nav anti virus
	======================================================================
	Keywords          : kb3rdparty kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
