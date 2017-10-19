---
layout: page
title: "Q232227: SMS: Inaccurate Installation Date Is Reported in the Inventory"
permalink: /kb/232/Q232227/
---

## Q232227: SMS: Inaccurate Installation Date Is Reported in the Inventory

	Article: Q232227
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug
	Last Modified: 15-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you take an inventory of a Systems Management Server-based client
	computer, an inaccurate installation time/date may be visible in Operating
	System properties.
	
	CAUSE
	=====
	
	This problem occurs because the operating system installation time/date
	inventory item is obtained from the following registry key on individual client
	computers:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\installdate
	
	This value represents a time/date as an offset in seconds from midnight, January
	1, 1970. This value is populated incorrectly during the installation of the
	operating system. When the Systems Management Server inventory agent later
	converts this value to a time/date to report as inventory, the value is
	converted correctly, but because the value itself is in error, the time/date
	reported is inaccurate by several hours.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	
	=============================================================================
	
