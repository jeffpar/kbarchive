---
layout: page
title: "Q133190: Cannot Upgrade to MS Client for NetWare When Running User.com"
permalink: /kb/133/Q133190/
---

## Q133190: Cannot Upgrade to MS Client for NetWare When Running User.com

{% raw %}

	Article: Q133190
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade to Windows 95, the Novell NetWare workstation shell is not
	upgraded to the Microsoft Client for NetWare Networks on a computer running
	LANDesk Manager.
	
	CAUSE
	=====
	
	Windows 95 does not upgrade the NetWare shell if Setup detects that LANDesk
	Manager's User.com tool is running.
	
	RESOLUTION
	==========
	
	Either use the real-mode NetWare client to run User.com, or remove User.com from
	the Autoexec.bat file, restart the computer, and install the Microsoft Client
	for NetWare Networks.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	LANDesk Manager's User.com requires the network to be started before it can be
	loaded into memory.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	Microsoft Windows 95 "Resource Kit," pages 296-305
	
	
	Additional query words: nwredir netx vlm odi
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
