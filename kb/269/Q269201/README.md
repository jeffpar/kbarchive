---
layout: page
title: "Q269201: SMS: Query Builder Values Box Cannot Display Large Item List"
permalink: kb/269/Q269201/
---

## Q269201: SMS: Query Builder Values Box Cannot Display Large Item List

	Article: Q269201
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you create a query in Systems Management Server (SMS) 2.0, the Values box
	in the query builder may be empty. This may occur if the hotfix for Q245648 is
	installed, and there is either a very large value (approximately 9,500; the
	actual number varies based on available memory) or a value of 0 (a value of 0
	requests that all records be returned) specified in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\AdminUI\QueryBuilder\ValueLimit
	
	The hotfix for Q245648 (both for Service Pack 1 and Service Pack 2) allows for
	more than 2,000 records to be listed in the query builder criteria section. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q245648 SMS: Values List from Query Builder Not Always Sorted and Limited to
	  First 2000 Records
	
	CAUSE
	=====
	
	The SMS provider runs out of memory while it is caching a large result set.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you are running Microsoft Windows NT or Microsoft Windows 2000, you should
	also update your Emergency Repair Disk (ERD) after completing this procedure.
	
	To work around this problem, use a lower value in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\AdminUI\QueryBuilder\ValueLimit
	
	Use a value such that the records are displayed (the actual number varies based
	on available memory).
	
	NOTE: If ValueLimit does not exist, you can create it (Reg_DWORD).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	
	Additional query words: prodsms query values blank
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
