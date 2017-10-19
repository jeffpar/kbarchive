---
layout: page
title: "Q214990: SMS: User Cannot Start Check32.exe and Check Out Licenses"
permalink: /kb/214/Q214990/
---

## Q214990: SMS: User Cannot Start Check32.exe and Check Out Licenses

	Article: Q214990
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to check out licenses on a computer running Systems Management
	Server Software Metering Client Agent, you are unable to start Check32.exe.
	
	Additionally, you may receive the following message:
	
	  There are no products for you to check out.
	
	CAUSE
	=====
	
	Before you are able to check out a license, the following conditions must be
	true:
	
	- The product has been launched at the Software Metering server to trigger
	  balancing.
	
	- Replication of this license has occurred at the Software Metering server.
	
	- Licenses are available at the Software Metering server to allow you check out
	  the product license.
	
	WORKAROUND
	==========
	
	Allow additional time for all updates and changes to occur between the Software
	Metering server, the Systems Management Server site, and the client.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
