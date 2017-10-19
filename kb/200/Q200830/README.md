---
layout: page
title: "Q200830: SMS: Regularly Verifies Directory Structures and Shares"
permalink: /kb/200/Q200830/
---

## Q200830: SMS: Regularly Verifies Directory Structures and Shares

	Article: Q200830
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbServer kbsms200 kbsms200bug kbCAP kbInboxMgr
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Manager Server version 2.0 now has the ability to monitor the
	directory structure of the Site Server for changes. If for some reason the
	CAP_XXX share and/or directories get removed from the Client Access Point (CAP),
	the Inbox Manager will restore them during its integrity verification checks.
	
	MORE INFORMATION
	================
	
	The Systems Management Server (SMS) version 2.0 Inbox Manager will check all
	inboxes hourly to verify that they still have valid paths. When the Inbox
	Manager checks, one of the following four things will occur:
	
	1. Inbox Manager cannot reach the Site Server, therefore it will not perform any
	  maintenance work.
	
	2. Inbox Manager can reach Site Server but is not able to reach the CAP_XXX
	  share. The Inbox Manager then treats the CAP as a newly added CAP and
	  recreated CAP_XXX share.
	
	NOTE: If the CAP_XXX was created on D:\ drive and CAP_XXX share is removed by the
	user, it's not guaranteed that the CAP_XXX will be recreated on the D:\ drive,
	however, it will be created on the NTFS drive with the most free disk space.
	
	3. Inbox Manager can reach the Site Server and the CAP_XXX share, but one or
	  more of the inbox directories are gone. The Inbox Manager recreates the
	  missing directories and resets their permissions.
	
	4. If the inbox directories are accessible, Inbox Manager will do nothing.
	
	If the CAP Network Abstraction Layer (NAL) Path is determined to be NWBind,
	NetWare Directory Services (NDS), or a Windows NT share path, the Inbox Manager
	will make sure that the path is still valid. If it is not, the Inbox Manager
	recreates the inbox path and resets the permissions.
	
	NOTE: Inbox manager will not, however, reset the permissions on an inbox
	directory that still exists. If the inbox folder's permissions have been
	changed, the Inbox Manager will not reset the permission on the inbox directory.
	This is to allow the Administrator to change inbox directory permission if they
	do not like the generic permission that NAL applies.
	
	Additional query words: prodsms smssvr
	
	======================================================================
	Keywords          : kbServer kbsms200 kbsms200bug kbCAP kbInboxMgr 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
