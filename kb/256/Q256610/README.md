---
layout: page
title: "Q256610: Flashed BIOS Version Is Not Updated by Hardware Inventory"
permalink: /kb/256/Q256610/
---

## Q256610: Flashed BIOS Version Is Not Updated by Hardware Inventory

{% raw %}

	Article: Q256610
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200 kbsms200bug kbInventory
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade the computer BIOS on an existing SMS client with hardware
	inventory enabled, the upgraded BIOS is not reflected in the SMS database. To
	cause the new BIOS to be reflected in the SMS database, you must resynchronize
	the client.
	
	CAUSE
	=====
	
	Windows Management Instrumentation (WMI) queries the registry for BIOS
	information. This information is not updated except when you install the
	operating system.
	
	WORKAROUND
	==========
	
	Force a hardware inventory resynchronization by using the Inventory Synchronizer
	Tool (Invsync.exe) from the Microsoft BackOffice Resource Kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWBEM kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
