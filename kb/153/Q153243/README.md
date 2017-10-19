---
layout: page
title: "Q153243: Audit16 Stops on OS/2 Client with a System Error: 3176"
permalink: /kb/153/Q153243/
---

## Q153243: Audit16 Stops on OS/2 Client with a System Error: 3176

	Article: Q153243
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Audit16 stops on an OS/2 client with a System Error. The error message is:
	
	  SYS3176: A program in this session encountered a problem and cannot continue.
	
	The Audit16.log is not created.
	
	CAUSE
	=====
	
	An illegal instruction exception is generated when an attempt is made to carry
	out an instruction, the operation of which is not defined for the host
	computer's architecture.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	OS/2 is manufactured by International Business Machines Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
