---
layout: page
title: "Q156270: SMS: Cannot Use Run Command Packages with NetWare Servers"
permalink: kb/156/Q156270/
---

## Q156270: SMS: Cannot Use Run Command Packages with NetWare Servers

	Article: Q156270
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbPCM kbsmsAdmin smsadmin smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a package to an entire site, the package is sent to all clients in
	the site, including NetWare servers. Eventually, the Job Status will show a
	status of None for the NetWare server; the Job Status will never show a status
	of Complete.
	
	CAUSE
	=====
	
	There is no way to run a "Run Command on Workstation" package on a Netware
	server.
	
	WORKAROUND
	==========
	
	Only send platform-sensitive packages to clients that can run them. You can send
	these packages by using machine groups, query results or individual clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms NW novell
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbPCM kbsmsAdmin smsadmin smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
