---
layout: page
title: "Q263384: SMS: PCBIOS Date Reported Incorrectly in Hardware Inventory"
permalink: /kb/263/Q263384/
---

## Q263384: SMS: PCBIOS Date Reported Incorrectly in Hardware Inventory

	Article: Q263384
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbWBEM kbsms200 kbsms200bug kbInventory kbsms200preSP3
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PCBIOS date information in the Systems Management Server PCBIOS hardware
	inventory section will report the incorrect year for any system that has a BIOS
	dated 01/01/00 and later.
	
	CAUSE
	=====
	
	The System BIOS Date is read on the client from the following registry key:
	
	  HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\SystemBiosDate
	
	Windows Management Instrumentation reads this entry and reports the PCBIOS date
	in the form of dd/mm/yy. However, the Systems Management Server hardware
	inventory reads this as dd/mm/19xx starting at 1980. For example, a PCBIOS date
	of 07/07/00 is reported in the hardware inventory as 07/07/1980. This behavior
	occurs on Windows 2000, Windows NT 4.0, and Windows 9x operating systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbWBEM kbsms200 kbsms200bug kbInventory kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
