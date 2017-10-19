---
layout: page
title: "Q235779: SMS: SMSMAN Does Not Automatically Detect Server"
permalink: /kb/235/Q235779/
---

## Q235779: SMS: SMSMAN Does Not Automatically Detect Server

	Article: Q235779
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows Networking Logon Client Installation is enabled but Windows
	Networking Logon Discovery is not enabled, Smsman.exe always fails to
	automatically locate an installation location, as indicated by the following
	error:
	
	  The Wizard was unable to locate a Systems Management Server. Enter the name
	  of a specific domain or server.
	
	RESOLUTION
	==========
	
	
	
	WORKAROUND
	==========
	
	Enable Windows NT Networking Logon Discovery for the site or choose to specify
	the installation location manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
