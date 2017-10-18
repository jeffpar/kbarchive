---
layout: page
title: "Q125751: AUDIT16.EXE Fails on OS/2 Client Computers"
permalink: kb/125/Q125751/
---

## Q125751: AUDIT16.EXE Fails on OS/2 Client Computers

	Article: Q125751
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you execute an audit job (AUDIT16.EXE) on your OS/2 client computer, one of
	the following happens:
	
	- If you run it from Package Command Manager (PCM), a system error occurs.
	
	- If you run it directly, by connecting to the package share and execute
	  AUDIT16.EXE, the audit starts and then closes down.
	
	The following error message is recorded in the audit16 log file:
	
	  Job Status MIF not created.
	  A File error occurred: File read error in SMS.INI file.
	  Job Status MIF not created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
