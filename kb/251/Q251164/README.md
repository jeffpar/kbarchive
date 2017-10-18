---
layout: page
title: "Q251164: SMS: Changing Time Zone Recopies Three Core SMS Client Files"
permalink: kb/251/Q251164/
---

## Q251164: SMS: Changing Time Zone Recopies Three Core SMS Client Files

	Article: Q251164
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the time zone on a client computer that is running Microsoft
	Windows 95 or Microsoft Windows 98 and then call Smsls from a logon script, the
	following files are recopied to the client computer:
	
	  Clicore.exe
	  Slwnt32.exe
	  Smsboot1.exe
	
	If the client is mobile and logs in from a different time zone, these files are
	recopied, causing a long delay on the dial-up connection (primarily caused by
	the Clicore.exe file, which is approximately 3 MB in size).
	
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
	Keywords          : kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
