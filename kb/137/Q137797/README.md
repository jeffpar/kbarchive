---
layout: page
title: "Q137797: PCM Cannot Connect to NetWare 3.12 Servers"
permalink: /kb/137/Q137797/
---

## Q137797: PCM Cannot Connect to NetWare 3.12 Servers

	Article: Q137797
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run Systems Management Server on a computer running Windows 3.1 and
	NetWare 3.12, you do not receive any jobs in Package Command Manager. Although
	Package Command Manager is unable to connect to the NetWare server, you can make
	connections to the server manually. Manual connections to NetWare server
	applications share work fine. The SYSTEM.INI file has the correct
	NETWORK.DRV=NETWARE.DRV mapping. When you run Package Command Manager with the
	/DEBUG option, the following two errors appear while PCM is activating:
	
	  Error connecting to current logon server:
	  Error connecting to server:
	
	This problem does not occur when you use Windows for Workgroups 3.11 and NetWare
	3.12.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms sms pcmwin
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
