---
layout: page
title: "Q279788: SMS: Software Metering Client Agent Generates Access Violation"
permalink: /kb/279/Q279788/
---

## Q279788: SMS: Software Metering Client Agent Generates Access Violation

{% raw %}

	Article: Q279788
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsmsMeter kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Software Metering Client agent may generate
	an access violation when the client runs a program.
	
	CAUSE
	=====
	
	The SMS Software Metering Client agent parses the product version properties of
	a program file to assess the details of the program when it is started. If the
	program that is being started contains a long Product Version string, the
	Software Metering Client agent (Licclint.exe in Microsoft Windows NT or
	Clicli95.exe in Microsoft Windows 95 or Microsoft Windows 98) can cause an
	access violation.
	
	To determine if this is the cause of the access violation, examine the file
	properties of the program file that is being run at the time of the access
	violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsmsMeter kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
