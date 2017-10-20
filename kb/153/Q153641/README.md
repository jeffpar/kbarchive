---
layout: page
title: "Q153641: Program Group Control (PGC) Randomly Chooses a Logon Server"
permalink: /kb/153/Q153641/
---

## Q153641: Program Group Control (PGC) Randomly Chooses a Logon Server

{% raw %}

	Article: Q153641
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run Program Group Control (PGC), it reads the [Servers] section of the
	Sms.ini file and randomly selects a server instead of first trying the
	CurrentLogonServer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. This problem was corrected in Systems Management
	Server version 1.2.
	
	Additional query words: PGC distribution prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
