---
layout: page
title: "Q216739: Windows 98 Requires Terminal Server Client Disk to Uninstall"
permalink: /kb/216/Q216739/
---

## Q216739: Windows 98 Requires Terminal Server Client Disk to Uninstall

{% raw %}

	Article: Q216739
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uninstall the RDP Terminal Server client from a Windows 98
	computer by using the Add/Remove tool in Control Panel, you will get the
	following message if you installed the client by disk:
	
	  Insert the disk labeled: MSTSC Setup DISK 1 into drive A:
	
	Some disks may not be required for the selected installation options.
	
	STATUS
	======
	
	This behavior is by design. The client software disk holds the necessary files
	to remove the client software.
	
	MORE INFORMATION
	================
	
	Unlike most software that will automaticaly uninstall, you are required to put
	the Microsoft Terminal Server Client (MSTSC) Setup disk 1 into drive A to remove
	the client software from the computer. This disk is the orginal client disk that
	you created to install the client software. If you misplaced the original disk,
	create another disk and use it to remove the client software.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
