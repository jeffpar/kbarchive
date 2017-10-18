---
layout: page
title: "Q199997: SMS: Software Metering Doesn't Meter Some Applications"
permalink: kb/199/Q199997/
---

## Q199997: SMS: Software Metering Doesn't Meter Some Applications

	Article: Q199997
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application or service starts before the Software Metering agent starts,
	it will not be monitored by Software Metering.
	
	MORE INFORMATION
	================
	
	It is possible to load an application as a service or through a registry entry,
	which would cause the application to load before the Software Metering agent
	loads.
	
	Additional query words: prodsms sms20 swmeter
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
