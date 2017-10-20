---
layout: page
title: "Q165507: SMS: PGC Randomly Picks a Logon Server"
permalink: /kb/165/Q165507/
---

## Q165507: SMS: PGC Randomly Picks a Logon Server

{% raw %}

	Article: Q165507
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In some WAN environments, Systems Management Server's Program Group Control
	(PGC) may go across the WAN to attempt a connection to a Systems Management
	Server logon server (domain controller) to obtain the groups a logged on user
	belongs to.
	
	This may cause unwanted delays, due to the slow connection speed, and also may
	use important WAN connection bandwidth.
	
	CAUSE
	=====
	
	The PGC randomly chooses a Systems Management Server logon server in the domain
	(primary domain controller and backup domain controllers) to retrieve the
	information.
	
	RESOLUTION
	==========
	
	This problem has been fixed in Systems Management Server 1.2. The PGC first
	attempts to locate the server listed in the ValidatingServer entry in the
	[SMSLSIni] section of the Sms.ini file, as in the following example:
	
	     [SMSLSIni]
	     ValidatingServer=\\xxxxx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been fixed in Systems Management Server version
	1.2.
	
	Additional query words: prodsms pdc bdc bdcs
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
