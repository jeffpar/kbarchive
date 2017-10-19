---
layout: page
title: "Q153240: Office95 Fails to Report in Inventory"
permalink: /kb/153/Q153240/
---

## Q153240: Office95 Fails to Report in Inventory

	Article: Q153240
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit kbInventory smsinv smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you set up a new inventory package by importing Off95std.pdf from the
	Primsite.srv\Import.src directory and you inventory a Windows 95 or Windows NT
	client that runs Office95, the client's Packages group will not include
	Office95.
	
	CAUSE
	=====
	
	The inventory rule for Office95 in OFF95STD.PDF uses the Time property set to
	12:00PM. It should be 12:00AM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit kbInventory smsinv smsaudit 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
