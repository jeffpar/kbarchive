---
layout: page
title: "Q213093: LastLogonUserName Reports User Name Different than NetWare Name"
permalink: /kb/213/Q213093/
---

## Q213093: LastLogonUserName Reports User Name Different than NetWare Name

	Article: Q213093
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbBindery kbCollections kbDiscovery
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a NetWare network with one account and then log on to a local
	Microsoft Windows NT-based computer (workstation or member server) with another
	account, the LastLogonUserName property for that resource becomes the local
	Windows NT user name.
	
	CAUSE
	=====
	
	This problem occurs because SMS places an API call to the network redirector for
	the LastLogonUserName. The information returned is dependent on the redirector
	that is installed.
	
	WORKAROUND
	==========
	
	To work around this problem, synchronize logins so that the NetWare user name
	matches the Windows NT user name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbBindery kbCollections kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
