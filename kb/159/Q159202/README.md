---
layout: page
title: "Q159202: SMS: Deleted User Groups Are Not Removed from the SMS Database"
permalink: /kb/159/Q159202/
---

## Q159202: SMS: Deleted User Groups Are Not Removed from the SMS Database

	Article: Q159202
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbPGC kbSCMan smspgc smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a global group is deleted from a domain, or a user group is deleted from a
	NetWare server, it will not be removed from the SMS database after Site Config
	Manager enumerates the user groups again. Therefore, deleted user groups will
	still appear in the list of groups available to be assigned to SMS program
	groups.
	
	CAUSE
	=====
	
	Site Config Manager does not keep a history of the groups it found previously,
	so it cannot set a pragma:delete for groups that no longer exist when creating
	the new user group MIF.
	
	WORKAROUND
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms global local trusted
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbPGC kbSCMan smspgc smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
