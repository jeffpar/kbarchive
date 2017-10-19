---
layout: page
title: "Q239828: SMS: Access Violation in SMS_SITE_SYSTEM_STATUS_SUMMARIZER"
permalink: /kb/239/Q239828/
---

## Q239828: SMS: Access Violation in SMS_SITE_SYSTEM_STATUS_SUMMARIZER

	Article: Q239828
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMS_SITE_SYSTEM_STATUS_SUMMARIZER may generate an "Access violation" error
	message and cause the SMS_EXECUTIVE service to shut down. When this occurs, a
	Crash.log file is created that reports the failure.
	
	CAUSE
	=====
	
	This behavior occurs because the Network Abstraction Layer (NAL) component in
	Systems Management Server (SMS) contains an error code that is not properly
	handled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	  Q246527 SMS: Systems Management Server 2.0 Service Pack 1 Client Hotfix
	  Bundle
	
	
	
	To install the hotfix, perform the following steps on the SMS site server:
	
	1. Stop the SMS services.
	
	2. Copy the updated Mslmsvrn.dll file to the SMS\Bin\<Platform> folder.
	
	3. Restart the SMS services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The SMS_EXECUTIVE service stops a short time after starting, and Site Component
	Manager restarts it on its next cycle. You can end up with multiple Crash.log
	files.
	
	The last entry recorded in the Sitestat.log file (with no NAL Logging) when the
	problem occurs is:
	
	---->: The distribution point ["Display=\\SMSSVR\"]MSWNET:["SMS_SITE=XXX"]\\SMSSVR\ is a server. 
	Enumerating drives.  $$<SMS_SITE_SYSTEM_STATUS_SUMMARIZER>
	
	The last entry recorded in the Sitestat.log file (with NAL logging level = 0x7)
	when the problem occurs is:
	
	NAL[4] - Attempting to get level 2 information for share C$ on server SMSSVR.  $$<SMS_SITE_SYSTEM_STATUS_SUMMARIZER>
	NAL[1] - ERROR: NetShareGetInfo failed.  The operation completed successfully.~~
	$$<SMS_SITE_SYSTEM_STATUS_SUMMARIZER>
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
