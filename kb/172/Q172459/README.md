---
layout: page
title: "Q172459: MSN Setup Continues to Detect McAfee VirusScan"
permalink: /kb/172/Q172459/
---

## Q172459: MSN Setup Continues to Detect McAfee VirusScan

{% raw %}

	Article: Q172459
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,2.51,2.52,2.6,95
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the system check performed during the installation of MSN, The Microsoft
	Network, you may be prompted to close several memory-resident programs,
	including McAfee VirusScan. After you use the taskbar icon to disable McAfee
	VirusScan, MSN Setup reports that the program is still active.
	
	RESOLUTION
	==========
	
	To avoid possible MSN installation problems, temporarily close McAfee VirusScan.
	To do so, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click Vshwin32, and then click End Task.
	
	3. After you install MSN, restart Windows to reactivate McAfee VirusScan.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 2.50 2.60
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.0,2.5,2.51,2.52,2.6,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
