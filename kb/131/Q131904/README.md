---
layout: page
title: "Q131904: INVDOS Does Not Report TCP/IP-32 3.11a Client IP Address"
permalink: /kb/131/Q131904/
---

## Q131904: INVDOS Does Not Report TCP/IP-32 3.11a Client IP Address

	Article: Q131904
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:3.11; winnt:1.0; :3.11a
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	INVDOS does not report the IP address of a Windows for Workgroups 3.11 client
	computer using TCP/IP-32 3.11a and dynamic host configuration protocol (DHCP).
	
	CAUSE
	=====
	
	This problem occurs when there is no Default Gateway defined for Microsoft
	TCP/IP.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run Network Setup and choose Drivers.
	
	2. Select Microsoft TCP/IP-32 3.11a and choose Setup.
	
	3. Enter an IP address for the Default Gateway.
	
	4. Choose OK and quit Network Setup.
	
	5. Restart the computer and Windows for Workgroups.
	
	The next time this client computer is inventoried, the IP address is reported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms sms inventory automatic configuration enabled
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100
	Version           : WINDOWS:3.11; winnt:1.0; :3.11a
	
	=============================================================================
	
