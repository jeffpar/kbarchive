---
layout: page
title: "Q246749: SMS: Status Messages in Futureq Folder Are Not Processed"
permalink: /kb/246/Q246749/
---

## Q246749: SMS: Status Messages in Futureq Folder Are Not Processed

	Article: Q246749
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbServer kbsms200 kbsms200bug kbStatSum kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) status messages that should be located in the
	Statmgr.box folder may be moved to the Statmgr.box\Futureq folder for processing
	at a later time. However, these files may never be processed, and this can
	generate unreliable or incomplete status messages for the site.
	
	CAUSE
	=====
	
	This problem can be caused by improper handling of status messages with a
	time-stamp that is greater than the current time on the site server.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and then restart the SMS_Executive service so
	that the files in the Statmgr.box\Futureq folder can be processed correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbServer kbsms200 kbsms200bug kbStatSum kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
