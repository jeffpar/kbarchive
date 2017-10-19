---
layout: page
title: "Q256651: SMS: NDS Logon Server Mgr. Reports Error Removing Logon Scripts"
permalink: /kb/256/Q256651/
---

## Q256651: SMS: NDS Logon Server Mgr. Reports Error Removing Logon Scripts

	Article: Q256651
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When removing a logon point configured on a Novell NetWare 4.x server, the
	SMS_NDS_LOGON_SERVER_MANAGER LOG (Nd_Logon.log) reports it was not able to
	remove the System Management Server logon scripts even though no logon scripts
	were enabled.
	
	MORE INFORMATION
	================
	
	The Systems Management Server administrator may conclude from the message
	reported in the Nd_Logon.log file that there is something wrong with the process
	of removing the NetWare logon point. However, this error message is incorrect
	and should be ignored.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
