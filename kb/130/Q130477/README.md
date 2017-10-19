---
layout: page
title: "Q130477: Changing the Number of Packages Read by Audit16"
permalink: /kb/130/Q130477/
---

## Q130477: Changing the Number of Packages Read by Audit16

	Article: Q130477
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit kbInventory smsinv smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Due to the limited amount of memory available to applications in certain
	situations on MS-DOS-based clients, the Systems Management Server Audit tool has
	been enhanced to allow the administrator to control the number of packages read
	at one time from the AUDIT.CFG rule file. This extra control is needed because
	the audit can fail due to low memory when the administrator tries to inventory
	450 or more packages per pass.
	
	The administrator can change the total number of packages to be audited by
	editing AUDIT.RUL to remove the unwanted entries and then recompiling AUDIT.CFG.
	To change the number of packages read by AUDIT16 in a single pass of the disk,
	edit AUDIT.BAT and add the /Innn switch (where nnn is from 100-450).
	
	By default, AUDIT16 will read 400 packages at a time from AUDIT.CFG, perform a
	scan, and then read another 400 packages until the end of AUDIT.CFG is reached
	and the audit is complete. The value of 400 is adequate in nearly all
	situations.
	
	Additional query words: sms prodsms admin
	
	======================================================================
	Keywords          : kbnetwork kbAudit kbInventory smsinv smsaudit 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
