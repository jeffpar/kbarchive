---
layout: page
title: "Q135773: Logon Scripts Are Not Changed When Site Properties Are Changed"
permalink: kb/135/Q135773/
---

## Q135773: Logon Scripts Are Not Changed When Site Properties Are Changed

	Article: Q135773
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan kbsmsAdmin smsadmin smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Site Configuration Manager does not change logon scripts when the "Automatically
	configure workstation logon script" option is changed from "Insert at top of
	logon script" to "Add to bottom of logon script."
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually edit the logon script when this change is
	made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbSCMan kbsmsAdmin smsadmin smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
