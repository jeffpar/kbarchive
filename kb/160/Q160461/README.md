---
layout: page
title: "Q160461: SMS: Inventory Does Not Report the CPU Speed on Windows NT"
permalink: /kb/160/Q160461/
---

## Q160461: SMS: Inventory Does Not Report the CPU Speed on Windows NT

	Article: Q160461
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbhw kbinterop kbInventory smsinv kbHardwarekbfixlist
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When examining the inventory properties of a computer running Windows NT, the
	processor speed is not reported. However, for computers running MS-DOS or OS/2,
	the processor speed is reported.
	
	CAUSE
	=====
	
	Systems Management Server collects inventory properties for computers running
	Windows NT by examining the system registry. With Windows NT 3.1 and 3.5x, the
	processor speed is not reported in the registry. Additionally, due to the
	hardware abstraction that is a part of Windows NT, SMS inventory can not profile
	the CPU directly as it does with other operating systems. Because the processor
	speed is not available, Systems Management Server was not designed to report CPU
	speed for computers running Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem has been corrected in the latest U.S.
	Service Pack for Systems Management Server version 1.2. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	----------------
	
	With Windows NT 4.0, the CPU speed is now reported in the system registry. This
	only applies to systems with a Pentium processor or better. Those systems with a
	486 or "slower" processor will still not report the processor speed. The value
	that Systems Management Server queries is located in the following registry
	key:
	
	\\HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\CentralProcessor\0.
	
	Systems Management Server will query the new registry value. If the value exists,
	Systems Management Server will report the processor speed.
	
	Additional query words: prodsms 1.00 1.10 1.20
	
	======================================================================
	Keywords          : kbhw kbinterop kbInventory smsinv kbHardware kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
