---
layout: page
title: "Q201812: SMS: NetWare Users Do Not Have Rights to the SMSLOGON Directory"
permalink: /kb/201/Q201812/
---

## Q201812: SMS: NetWare Users Do Not Have Rights to the SMSLOGON Directory

	Article: Q201812
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbBindery kbOSNovell
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	A NetWare user that is logging onto a NetWare 4.x server using bindery emulation and does not have the security equivalence of administrator, may not have rights to the SMSLOGON directory on the NetWare Client Access Point.
	
	By default, the NetWare Everyone group has access to the SMSLOGON directory. The Everyone group is not created by default in bindery context on a NetWare 4.x server.
	
	In order for users to successfully run the Smsls.scr from the logon script, the Everyone group must be created in the bindery context (the user is a member of the Everyone group automatically if the Everyone group exists).
	
	
	SUMMARY
	=======
	
	If after logging onto the server you attempt to view the available folders on
	the NetWare server you will find that SMSLOGON is not one of them. This folder
	is only available if you have administrator security equivalence. This is a
	known issue.
	
	MORE INFORMATION
	================
	
	Please refer to the Novell NetWare documentation for information on how to
	create user groups.
	
	Additional query words: prodsms nwroles sms20
	
	======================================================================
	Keywords          : kbsms200 kbBindery kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
