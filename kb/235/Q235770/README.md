---
layout: page
title: "Q235770: SMS: Win95 Client Software Causes Login Failure: Status 8890"
permalink: kb/235/Q235770/
---

## Q235770: SMS: Win95 Client Software Causes Login Failure: Status 8890

	Article: Q235770
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbNDS kbOSNovell
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Microsoft Windows client computers (Windows 95 or Windows 98) running
	Novell's IntranetWare client version 2.5 or 3.1 may experience an error 8890
	(object already authenticated)when installed with Microsoft Systems Management
	Server client software.
	
	Environments in which this may occur could include the following systems and
	configurations:
	
	- Windows 95 or Windows 95 OSR2
	- Novell IntranetWare Client32 version 2.5 or 3.1
	- Clients running both IP and IPX protocols
	- Windows NT Server 4.0 SP4 or greater
	- Novell NetWare 4.x server acting as a CAP (Client Access point) or a Logon
	  Point
	- Site boundary including both IP and IPX
	- Novell NetWare as the Primary network
	
	Network traces have shown that in the first few minutes after the client is
	installed, Microsoft Systems Management Server seems to generate numerous logon
	and logoff requests to all Netware Directory Services (NDS)volumes. If you
	attempt to logon during this period, you may encounter an error 8890. The client
	may become unstable, or stops responding, which forces the computer to restart.
	
	This is usually seen in environments with numerous Novell Servers that client
	workstations can attach. In environments where there are only a couple of
	servers, this is not likely to be an issue but once the number of servers
	increases beyond 10, this could become a serious issue.
	
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
