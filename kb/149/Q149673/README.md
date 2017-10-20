---
layout: page
title: "Q149673: Unexpected Reinstallation of SMS Client with a New SMSID"
permalink: /kb/149/Q149673/
---

## Q149673: Unexpected Reinstallation of SMS Client with a New SMSID

{% raw %}

	Article: Q149673
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the SMS client software is reinstalled and the SMS client is reinventoried
	with a new SMSID, the SMS Administrator will notice multiple SMSIDs for the same
	computer from the SMS Administrator UI.
	
	CAUSE
	=====
	
	When CLI_DOS.EXE, CLI_NT.EXE or CLI_OS2.EXE (CLISETUP) fails to open the SMS.INI
	file (because, for example, the file is locked by another application), CLISETUP
	assumes that SMS.INI does not exist and that the reason is because SMS is not
	installed.
	
	RESOLUTION
	==========
	
	Upgrade to SMS version 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem was corrected in Systems Management Server version
	1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
