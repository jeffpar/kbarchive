---
layout: page
title: "Q124001: After Upgrade from WFWG, Different Network Adapter Listed"
permalink: /kb/124/Q124001/
---

## Q124001: After Upgrade from WFWG, Different Network Adapter Listed

	Article: Q124001
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
	
	After you upgrade a Windows for Workgroups 3.11 installation to Windows 95, the
	network adapter listed in Windows 95 is not the same adapter that was listed in
	the previous installation of Windows for Workgroups.
	
	Example
	-------
	
	After you upgrade a Windows for Workgroups 3.11 installation that lists an SMC
	Ethercard (all types except 8013/a) as the network adapter, Windows 95 lists the
	SMC Ethercard Plus 16 w/boot ROM Socket (WD/8013EBT) as the network adapter.
	
	CAUSE
	=====
	
	The SMC Ethercard (all types except 8013/a) driver that Windows for Workgroups
	uses is a generic entry that works with multiple network adapters. Windows 95
	detects the exact network adapter model using the generic driver and displays
	that, instead of the generic driver name, as the network adapter.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 has the ability to use generic drivers. However,
	when using a driver that supports multiple models, it displays the generic
	driver name instead of listing the exact card that is using the driver. Windows
	95 has the ability to use generic drivers and display the exact adapter using
	the generic driver.
	
	Additional query words: smc 8013/a nethw
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
