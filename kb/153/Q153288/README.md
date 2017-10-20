---
layout: page
title: "Q153288: SMSRUN16/32 Randomly Picks a Logon Server"
permalink: /kb/153/Q153288/
---

## Q153288: SMSRUN16/32 Randomly Picks a Logon Server

{% raw %}

	Article: Q153288
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In some WAN environments SMSRUN16/32 may go across the WAN to attempt a
	connection to a logon server.
	
	CAUSE
	=====
	
	SMSRUN16/32 randomly chooses a logon server from the list of servers in the
	Sms.ini.
	
	RESOLUTION
	==========
	
	This has been fixed in SMS 1.2. SMSRUN16/32 first attempts to locate the server
	listed for the CurrentLogonServer entry in the Sms.ini.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
