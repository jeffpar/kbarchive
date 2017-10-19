---
layout: page
title: "Q135087: Cannot Install Sender on BDC Unless It is a Site or Logon Server"
permalink: /kb/135/Q135087/
---

## Q135087: Cannot Install Sender on BDC Unless It is a Site or Logon Server

	Article: Q135087
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbSCMan smssetup smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You attempt to install a sender on a backup domain controller (BDC) and an error
	appears in the SCMAN.LOG indicating that the installation program is unable to
	install the sender.
	
	This symptom occurs on a BDC that has not been enumerated as a Systems Management
	Server logon server and the BDC is in the same domain as the site server.
	
	CAUSE
	=====
	
	You may not install a sender on a computer other than the site server or a a
	computer running Systems Management Server Logon server.
	
	WORKAROUND
	==========
	
	To work around this problem, install the sender on the site server or on a
	Systems Management Server Logon Server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We are researching this problem and will post new information in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbSCMan smssetup smssiteconfigman 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
