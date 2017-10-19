---
layout: page
title: "Q182060: SMS: Rservice for Alpha Does Not Process All Computers in List"
permalink: /kb/182/Q182060/
---

## Q182060: SMS: Rservice for Alpha Does Not Process All Computers in List

	Article: Q182060
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Alpha version of Rservice.exe does not process every computer listed in the
	[Machine List] section of the initialization file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Use the version of Rservice.exe that runs on the Intel platform.
	
	- Obtain the hotfix mentioned in the STATUS section of this article. The hotfix
	  should have the following timestamp:
	
	     3/2/98      8:00pm      591,632 Rservice.exe
	
	- Wait for the next Systems Management Server service pack.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
