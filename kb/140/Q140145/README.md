---
layout: page
title: "Q140145: SMS.INI Only Contains Eight Logon Servers"
permalink: /kb/140/Q140145/
---

## Q140145: SMS.INI Only Contains Eight Logon Servers

	Article: Q140145
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Only eight (8) Logon servers are listed in the SMS.INI file on Systems
	Management Server clients, even though more exist within the site.
	
	CAUSE
	=====
	
	By default, the SMS.INI on the client only lists eight(8) Logon Servers.
	
	When Client Setup (CLI_NT.EXE, CLI_DOS.EXE or CLI_OS2.EXE) run, the client only
	reads the first eight entries from the DOMAIN.INI and places that information in
	the SMS.INI file on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Systems Management Server
	version 1.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
