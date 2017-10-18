---
layout: page
title: "Q174953: SMS: SMS 1.2 SP 3 Reduces Client/Server Network Traffic"
permalink: kb/174/Q174953/
---

## Q174953: SMS: SMS 1.2 SP 3 Reduces Client/Server Network Traffic

	Article: Q174953
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kbusage kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an effort to reduce the amount of network traffic and time required to run
	the Systems Management Server logon scripts, Smsls.bat and Runsms.bat, the
	initial Systems Management Server client installation now installs many of the
	files that were previously located on the Systems Management Server logon server
	to the Systems Management Server client's local hard drive.
	
	After the Systems Management Server client is installed, subsequently running the
	Systems Management Server script results in much lower network traffic between
	the client and the Systems Management Server logon server.
	
	MORE INFORMATION
	================
	
	The following are examples of the approximate drive space consumed by a Systems
	Management Server 1.2 client without Service Pack 3 installed:
	
	- Windows 95: 2.7 MB
	
	- Windows NT: 2.9 MB
	
	The following are the drive space requirements after Systems Management Server
	1.2 Service Pack 3 is installed:
	
	- Windows 95: 3.8 MB
	
	- Windows NT: 3.2 MB
	
	By moving many files to the client, the number of bytes transferred between a
	Windows 95 client and a Systems Management Server logon server has been reduced
	by approximately 75 percent. Additionally, client computers running Windows NT
	will see almost a 50 percent reduction in network traffic between client and
	server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbbug
	
	=============================================================================
	
