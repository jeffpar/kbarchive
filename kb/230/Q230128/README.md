---
layout: page
title: "Q230128: SMS: SQL Monitor Reports Cannot Connect to Site Server Registry"
permalink: /kb/230/Q230128/
---

## Q230128: SMS: SQL Monitor Reports Cannot Connect to Site Server Registry

	Article: Q230128
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200bug kbsms200fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Smsdbmon.log continuously reports the following error:
	
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server MYSERVER, sleeping
	  60 seconds.
	
	The error message continues to be reported even though the site server shown in
	the error message has become available.
	
	CAUSE
	=====
	
	This problem is caused by the site server being unavailable (or down) when the
	SQL Monitor service is started. Usually this happens when the site server and
	SQL server are on different machines. Even after the site server becomes
	available, the SQL Monitor cannot connect to the registry of the site server,
	and therefore this error persists.
	
	WORKAROUND
	==========
	
	When the site server is available, stop and restart the SMS_SQL_MONTIOR service
	on the SQL server. Once the service restarts, it should be able to get a
	connection to the site server. Microsoft has confirmed this to be a problem in
	Systems Management Server version 2.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms smsdbmon
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
