---
layout: page
title: "Q159541: SMS: HelpDesk Chat Fails on Administrator on First Attempt"
permalink: /kb/159/Q159541/
---

## Q159541: SMS: HelpDesk Chat Fails on Administrator on First Attempt

	Article: Q159541
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With client computers running Windows 95 with Novell's Client32, Chat in the
	HelpDesk functions fails on the first attempt when PermissionRequired is set to
	Yes. This problem occurs if the server computer is running Systems Management
	Server 1.2 Service Pack 1 on Windows NT Server 3.51 Service Pack 5 or Windows NT
	Server 4.0.
	
	
	The Systems Management Server Administrator will lose the Chat dialog boxes, and
	the Chat icon will reappear. If you select Chat again, the chat session becomes
	available.
	
	WORKAROUND
	==========
	
	To work around this problem, set Permission Required to No.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
