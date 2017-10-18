---
layout: page
title: "Q183346: SMS: Windows 95 Page File Is Not Inventoried"
permalink: kb/183/Q183346/
---

## Q183346: SMS: Windows 95 Page File Is Not Inventoried

	Article: Q183346
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When looking in the Systems Management Server Administrator program at the
	Personal Computer Properties for a Windows 95 Client, PC Memory reports the
	following page file information:
	
	  Page File Name:           Not Available
	  Page File Size (MBytes):  0
	
	CAUSE
	=====
	
	The inventory agent (Invdos.exe) looks for the page file using the following key
	in the System.ini file when performing a hardware inventory:
	
	  [386enh]
	  PagingFile=C:\xxx\WIN386.SWP
	
	Because Windows 95 does not use this convention to maintain its paging file, the
	paging file is not found and therefore not inventoried.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server version
	1.2. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SMS PagingFile Page File Windows 95 win95 prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
