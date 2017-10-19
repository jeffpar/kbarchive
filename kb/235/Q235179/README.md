---
layout: page
title: "Q235179: Licsvcfg.log Exposes the SQL SA Account Password"
permalink: /kb/235/Q235179/
---

## Q235179: Licsvcfg.log Exposes the SQL SA Account Password

	Article: Q235179
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging is enabled for a Systems Management Server (SMS) site, the
	Licsvcfg.log file reveals the password that SMS uses to connect to SQL Server.
	If SQL is configured to use standard security and SMS is configured to use the
	default SA account to access SQL, the SQL security may be compromised.
	
	CAUSE
	=====
	
	SMS logging is used to help administrators monitor the flow of information
	through the SMS system. As a part of typical processing, SMS makes frequent
	connections to the SQL server to access the SMS database(s).
	
	WORKAROUND
	==========
	
	To avoid this issue, do not enable logging for the SMS site servers. If you must
	enable logging for troubleshooting purposes, disable it as soon as possible. In
	addition, do not use the standard SA account with SMS; specify a different
	account or use integrated security. If integrated security is enabled, be aware
	that the password for the Microsoft Windows NT account used by SMS may be
	revealed in the Licsvcfg.log file.
	
	If License Metering logging is enabled, make sure to limit physical access to the
	server that is hosting the License Metering log file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SMS version 2.0. This problem
	has been corrected in the latest U.S. service pack for SMS version 2.0. For
	information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This issue is fixed in Service Pack 1 for SMS 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
