---
layout: page
title: "Q164876: SMS: Service Pack Upgrade Doesn't Change the Version Bitmap"
permalink: kb/164/Q164876/
---

## Q164876: SMS: Service Pack Upgrade Doesn't Change the Version Bitmap

	Article: Q164876
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetupkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying a Systems Management Server service pack, the upgrade process
	does not copy the new Setup.exe from the service pack. As a result, when the
	local version of Setup.exe is run, it displays the Systems Management Server
	version without mentioning that a service pack has been applied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup kbfixlist
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
