---
layout: page
title: "Q227023: SMS: DBCS Server Names Are Not Supported"
permalink: /kb/227/Q227023/
---

## Q227023: SMS: DBCS Server Names Are Not Supported

	Article: Q227023
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Double-byte character set (DBCS) server names are not supported in Microsoft
	Systems Management Server (SMS) 2.0.
	
	CAUSE
	=====
	
	SMS is compatible with a wide range of operating systems and network
	environments, and therefore needs to operate within a common set of acceptable
	standards.
	
	For example, a standard corporate computing environment usually includes
	operating systems ranging from Microsoft Windows for Workgroups 3.11 to Windows
	2000. However, Windows 98 and earlier operating systems are not able to support
	Domain Name System (DNS) characters in server names.
	
	NOTE: Standard DNS does not support names outside of the ASCII range. Most
	corporations have their own heterogeneous corporate intranet connection to the
	Internet, and therefore have the need for standard DNS.
	
	WORKAROUND
	==========
	
	To name servers in a DBCS or international hierarchy, use ASCII characters.
	
	STATUS
	======
	
	Microsoft has confirmed this behavior to be by design of Systems Management
	Server 2.0.
	
	MORE INFORMATION
	================
	
	For more information on this topic, refer to Systems Management Server
	Administrator Help: Release Notes.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
