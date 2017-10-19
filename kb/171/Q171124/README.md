---
layout: page
title: "Q171124: SMS: 3COM Network Card May Cause Audit16 to Fail on Win95 Client"
permalink: /kb/171/Q171124/
---

## Q171124: SMS: 3COM Network Card May Cause Audit16 to Fail on Win95 Client

	Article: Q171124
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a software audit is run on a Windows 95 laptop with a 3COM 3C589 PC card,
	it returns the following error in the Audit16.log:
	
	  A file error occurred: File read error in SMS.INI file.
	
	CAUSE
	=====
	
	Systems Management Server does not report the 3COM 3C589 PC card adapters during
	the inventory collection process for client computers running Windows 95. For
	more information on this issue, see the following article in the Microsoft
	Knowledge Base:
	
	  Q165735 SMS: 3COM 3C589 PCMCIA Network Adapter Card Not Inventoried
	
	WORKAROUND
	==========
	
	To run the software audit successfully for Windows 95 clients, ensure that a
	network adapter card ID appears in the [Local] section of the Sms.ini file. If
	it is not there, add any numbers for the network adapter card ID (using any
	sequence of six groups of two numbers separated by colons).
	
	You should also be aware that when the computer is restarted and the inventory
	process takes place during logon, the NetcardID in the Sms.ini file will be
	removed. This will cause any subsequent software audits to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms PCMCIA
	
	======================================================================
	Keywords          : kb3rdparty kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
