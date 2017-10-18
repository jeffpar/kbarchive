---
layout: page
title: "Q139591: Packages Not Detected By Inventory Agent"
permalink: kb/139/Q139591/
---

## Q139591: Packages Not Detected By Inventory Agent

	Article: Q139591
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set the Hardware and Software Scan intervals from Site Properties
	Inventory such that the Software scan be performed more often than the hardware
	scan, the software scan fails to report packages.
	
	CAUSE
	=====
	
	The Software Scan scans each local disk installed, but if the Hardware Scan is
	not performed, the Software Scan does not have a valid list of installed disks
	to scan. The Software Scan should perform a minimal drive detection so that it
	knows what drives to scan.
	
	WORKAROUND
	==========
	
	To work around this problem, ensure that both the Hardware and Software Scan
	intervals are set to the same frequency.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodsms inventory agent
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
