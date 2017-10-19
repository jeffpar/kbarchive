---
layout: page
title: "Q153575: PGC Prompts Twice When You Cancel a Change in NetWare Clients"
permalink: /kb/153/Q153575/
---

## Q153575: PGC Prompts Twice When You Cancel a Change in NetWare Clients

	Article: Q153575
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you try to run a Program Group Control (PGC) shared application and the
	NetWare client detects that its logon server is unavailable, PGC returns a
	dialog box prompting you to select a new computer.
	
	This dialog box contains a Cancel button, and if you click it, the dialog box
	will close; however, it immediately reopens. You must click Cancel a second time
	to terminate the operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms 1.20 program group control
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
