---
layout: page
title: "Q213287: SMS: NetWare Logon Manager Creates Copies of Net&#36;log.dat File"
permalink: /kb/213/Q213287/
---

## Q213287: SMS: NetWare Logon Manager Creates Copies of Net&#36;log.dat File

{% raw %}

	Article: Q213287
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If modify login scripts is selected, the NetWare Logon Manager will create up to
	one hundred backup copies of the Net$log.dat file when updating logon points on
	NetWare bindery servers. The backup copies of Net$log.dat are made during each
	logon point update cycle. The backup copies are named Net$log.00 through
	Net$log.99 and are stored on the SYS volume in the PUBLIC directory on the
	NetWare server.
	
	MORE INFORMATION
	================
	
	The Net$log.dat file is a special text file that contains the NetWare system
	login script.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms novell novel
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
