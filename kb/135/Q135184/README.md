---
layout: page
title: "Q135184: ARCsolo Network Drive Listing Is Different in Windows 95"
permalink: /kb/135/Q135184/
---

## Q135184: ARCsolo Network Drive Listing Is Different in Windows 95

{% raw %}

	Article: Q135184
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running ARCsolo version 3.01 or 3.02 by Cheyenne Software in
	Windows 95, the listing of network drives mapped to Microsoft servers (Windows
	for Workgroups, LAN Manager, Windows NT, or Windows 95 servers) does not appear
	as it does in Windows 3.1.
	
	CAUSE
	=====
	
	ARCsolo relies on entries in the System.ini file that are not present in Windows
	95.
	
	RESOLUTION
	==========
	
	Place the following entry in the [boot] section of the System.ini file, and then
	restart Windows 95:
	
	  " network.drv=commctrl.dll " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	ARCsolo reads the "network.drv=" entry to determine which DLL to load. If the
	entry is not present, the attempt fails and the network drive listing is not
	correct. Any DLL will work for this entry; Commctrl.dll is simply a usable
	example.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
