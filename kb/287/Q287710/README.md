---
layout: page
title: "Q287710: SMS: User Prompted for Credentials During Remote Control Session"
permalink: /kb/287/Q287710/
---

## Q287710: SMS: User Prompted for Credentials During Remote Control Session

	Article: Q287710
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbRemote kbSecurity kbWBEM kbsms200 kbCollections kbHelpDesk kb
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to remotely control a workstation in Systems Management Server
	(SMS) 2.0, you may be prompted to supply valid logon credentials to make the
	connection.
	
	MORE INFORMATION
	================
	
	To remotely control a workstation, the following items must be configured
	correctly for the user account of the person who is attempting to take remote
	control:
	
	- The user account must be added to the Permitted Viewers list in the SMS
	  Administrator Console. Alternately, remote control also succeeds if the user
	  is a member of the Local Administrators group on the computer on which the
	  user is attempting to use remote control. In addition to adding individual
	  users to the list of permitted viewers, you can grant rights to remote
	  control by adding global groups to the list of permitted viewers.
	
	  NOTE: In some cases, if you include the domain name in front of the global
	  group, you may be prompted for permissions.
	
	- The user account must have access to Web-Based Enterprise Management (WBEM),
	  to access the collection that contains the target computer. Access to WBEM is
	  generally granted by including the user in the SMSAdmins local group on the
	  SMS site server. If you do not want to add the user as part of the SMSAdmins
	  local group, you can grant access to WBEM by using WBEMPERM (in Microsoft
	  Windows NT 4.0) or the Windows Management Instrumentation (WMI) Control
	  Microsoft Management Console (MMC) snap-in (in Microsoft Windows 2000).
	
	  NOTE: If you add a user to the SMSAdmins local group, it does not indicate
	  that the user has full administrative rights to SMS. Full administrative
	  rights are granted by using the security manager in the SMS Administrator
	  Console. The only function of the SMSAdmins local group is to provide access
	  to WBEM.
	
	- The user account must have appropriate rights (to collections, and so on) in
	  the SMS Security Manager.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbRemote kbSecurity kbWBEM kbsms200 kbCollections kbHelpDesk kbsmsAdmin kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
