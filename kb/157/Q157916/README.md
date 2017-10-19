---
layout: page
title: "Q157916: SMS: Service Pack Reporting in Inventory"
permalink: /kb/157/Q157916/
---

## Q157916: SMS: Service Pack Reporting in Inventory

	Article: Q157916
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbInventory kbsmsAdmin smsadmin smsinv smshowto
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows 95 client service pack revision is not reported in Systems
	Management Server versions 1.0, 1.1, or 1.2.
	
	The Windows NT client service pack revision is not reported in Systems Management
	Server versions 1.0 or 1.1, but is reported correctly in version 1.2.
	
	CAUSE
	=====
	
	Currently, Systems Management Server inventory does not check for Windows 95
	service packs. The reporting of Windows NT service packs in Systems Management
	Server 1.2 is an enhancement.
	
	WORKAROUND
	==========
	
	If it is necessary to determine whether clients have a service pack installed,
	and Systems Management Server inventory does not report it, the following
	procedure may help to produce a machine group of clients who do not have the
	service pack:
	
	1. Create an Inventory Package to look for any identifiable service pack file
	  (for example, Ntoskrnl.exe 808,256 3/6/96).
	
	2. After the inventory has been updated, run a query against the inventory
	  package.
	
	You can then create a machine group from the query results.
	
	For information on creating Inventory Packages, queries, and machine groups,
	please refer to your Systems Management Server documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms W95 Win95
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbInventory kbsmsAdmin smsadmin smsinv smshowto 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
