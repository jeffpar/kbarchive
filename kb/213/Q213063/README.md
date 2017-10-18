---
layout: page
title: "Q213063: SMS: NW_Logon_Server_Manager Is Unable to Connect"
permalink: kb/213/Q213063/
---

## Q213063: SMS: NW_Logon_Server_Manager Is Unable to Connect

	Article: Q213063
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbConfig kbMMC kbServer kbsms kbsms200 kbsms200bug kbBindery kbCAP
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NW_Logon_Server_Manager is unable to connect to a bindery server after the
	bindery server is renamed.
	
	CAUSE
	=====
	
	Once the bindery server is renamed, the redirector still caches the old server
	name to allow current user connections to continue. However, new connections
	fail because the SMS site attempts subsequent connections using the new bindery
	server name. As a result, Systems Management Server is unable to connect to the
	bindery server CAP and logon point until a reboot of the site server occurs. The
	reboot of the server allows the redirector cache to clear, allowing successful
	connection.
	
	WORKAROUND
	==========
	
	The following steps outline the recommended procedure for changing the name of a
	NetWare resource that is acting as an SMS Site System role:
	
	1. Delete the NetWare logon point and/or CAP from the SMS Administrator Console.
	
	2. Wait until the logon point and CAP are removed from the bindery server.
	
	3. Rename the bindery server.
	
	4. Restart the SMS Site server.
	
	5. Create new a logon point and CAP using the new server name.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbConfig kbMMC kbServer kbsms kbsms200 kbsms200bug kbBindery kbCAP kbOSNovell kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
