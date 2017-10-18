---
layout: page
title: "Q192490: SMS: Ping Test on Windows NT Clients May Require Credentials"
permalink: kb/192/Q192490/
---

## Q192490: SMS: Ping Test on Windows NT Clients May Require Credentials

	Article: Q192490
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A credentials dialog box appears on a Remote Administrator's User Interface,
	asking for credentials to initiate a ping to a client. Most Administrators do
	not expect to enter credentials before performing a ping test to a client.
	
	MORE INFORMATION
	================
	
	This behavior occurs because of Windows NT Security features and is a Windows
	NT-based requirement, not a Systems Management Server 2.0 requirement.
	
	Ping is designed to not require permissions and to always be enabled. Because
	Windows NT requires credentials for access, the Windows NT credentials step
	still remains.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
