---
layout: page
title: "Q183240: Master and Backup Host Account Databases Not in Sync"
permalink: kb/183/Q183240/
---

## Q183240: Master and Backup Host Account Databases Not in Sync

	Article: Q183240
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are multiple SNA Server Host Account Cache databases configured for use
	within a Windows NT domain, there may be times when one or more of the backup
	Host Account Cache databases are not in sync with the master database. SNA users
	or applications (or both) that are configured to use host security integration
	features such as single sign-on and host account synchronization may fail to get
	host sessions if one of the out-of-sync backup Host Account databases is
	accessed for account mapping or synchronization.
	
	Typical errors that result when this occurs indicate invalid user IDs or
	passwords or both. These errors will be returned by the application or
	applications (for example, 3270 emulator or APPC/CPIC program) being used.
	
	CAUSE
	=====
	
	When a new user account (that did not exist previously in the Windows NT Account
	database) is added to the Host Account Cache database, the master Host Account
	Cache database sends an update request to all backup Host Account Cache
	databases. The backup databases add the same user account to their copy of the
	database. This add fails because the backup databases cannot locate the user
	account in the Windows NT account database.
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can synchronize the Windows NT Backup Domain
	Controller (where the backup Host Account Cache databases are running) with the
	Windows NT Primary Domain Controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
