---
layout: page
title: "Q215016: SMS: Win16 Clients Ignore Detail Level in Software Inventory"
permalink: /kb/215/Q215016/
---

## Q215016: SMS: Win16 Clients Ignore Detail Level in Software Inventory

	Article: Q215016
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When software inventory is taken on a 16-bit Windows client computer in Systems
	Management Server version 2.0, a full inventory is always produced regardless of
	what Detail Level you select. For example, if you choose the Products Only
	setting, a full inventory will still be reported, including Products, Associated
	Files, and Unknown Files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Enable Software Inventory with a detail level set to Products Only.
	2. Discover and install a 16-bit Windows client computer.
	3. Wait until the software inventory is reported to the Systems Management
	  Server site server.
	4. View the inventory in the Resource Explorer window.
	
	The software inventory produced will show the level of detail consistent with
	selecting all options: Products, Associated Files, and Unknown Files. For
	example, the left pane of the Resource Explorer window displays:
	
	  Manufacturer - Microsoft Corporation - Systems Management Server
	
	and the right pane lists all of the Systems Management Server .exe files.
	
	In contrast, the inventory should reflect only the names of the products on the
	computer, not the actual files. For example, the left pane of the Resource
	Explorer window should still display:
	
	  Manufacturer - Microsoft Corporation - Systems Management Server
	
	but the right pane should be empty.
	
	Additional query words: prodsms swinv16
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
