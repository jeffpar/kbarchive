---
layout: page
title: "Q153241: Office95 Professional Falsely Reported in Inventory"
permalink: /kb/153/Q153241/
---

## Q153241: Office95 Professional Falsely Reported in Inventory

	Article: Q153241
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbAudit kbInventory smsinv smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you inventory MSOffice on a client that runs any version of Microsoft
	Office other than Microsoft Office95 Professional, the client's Properties for
	Packages will show that the client has Office Professional installed.
	
	CAUSE
	=====
	
	The inventory rule in the package definition file (PDF) for Office95
	Professional has only one rule with the file name Msoffice.exe. Since versions
	of Office have an executable file named Msoffice.exe, all versions will be
	inventoried as Office95 Professional.
	
	RESOLUTION
	==========
	
	Use the PDF that comes with MSOffice95 Professional.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbAudit kbInventory smsinv smsaudit 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
