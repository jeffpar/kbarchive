---
layout: page
title: "Q213167: SMS: Software Metering Clients Do Not Use Retry Setting Properly"
permalink: kb/213/Q213167/
---

## Q213167: SMS: Software Metering Clients Do Not Use Retry Setting Properly

	Article: Q213167
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbsmsMeter
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0 the Software Metering client agent, in online
	mode, does not use the client retry setting properly. In situations where a
	client's primary software metering server is unavailable, the client quickly
	migrates to a new software metering server without attempting all of the
	configured retries specified in the client agent properties.
	
	This can cause license denials due to a lack of licenses available at the new
	software metering server after the clients have migrated from their unavailable,
	primary metering server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The client retry setting can be set in the General tab of the Software Metering
	Client Agent properties.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
