---
layout: page
title: "Q200769: SMS: Logon Servers Are Not Receiving Updates"
permalink: kb/200/Q200769/
---

## Q200769: SMS: Logon Servers Are Not Receiving Updates

	Article: Q200769
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbsms120 kbsms120bug
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Systems Management Server 1.2 Service Pack 3, a site may
	experience problems with logon servers running Windows NT 4.0 that are being
	enumerated by site servers running Windows NT 3.51 Service Pack 5. The problem
	is that the Systems Management Server logon servers are not being updated.
	
	CAUSE
	=====
	
	The problem is caused by the way that Windows NT Server 3.51 queries the disk
	space on servers running Windows NT Server 4.0.
	
	WORKAROUND
	==========
	
	To work around this problem, contact Microsoft Product Support Services to
	obtain a hotfix. For additional information on the hotfix, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q167871 Error When Connecting to a Share on WinNT 4.0 NTFS Partition
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 and Windows NT Server 3.51.
	
	MORE INFORMATION
	================
	
	When this problem occurs, the Maintman.log shows the following information:
	
	  ~Working on logon server <logonserver>
	  $$<SMS_MAINTENANCE_MANAGER><Fri Feb 06 10:43:33
	  1998~><thread=12D> ~Free disk space check failed (error 144),    
	  skipping... $$<SMS_MAINTENANCE_MANAGER><Fri Feb 06 10:43:33    
	  1998~><thread=12D> ~Working on logon server <logonserver>
	  $$<SMS_MAINTENANCE_MANAGER><Fri Feb 06 10:43:33
	  1998~><thread=12D> ~Free disk space check failed (error 144), 
	  skipping... $$<SMS_MAINTENANCE_MANAGER><Fri Feb
	
	However, the server has over 1 GB of disk space available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbsms120 kbsms120bug 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbSMSSearch kbExchange400 kbContentX kbSDKDAO351
	Version           : winnt:1.2,3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
