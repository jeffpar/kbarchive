---
layout: page
title: "Q200897: SMS: SMS 2.0 and Y2K Product Compliance Utility"
permalink: /kb/200/Q200897/
---

## Q200897: SMS: SMS 2.0 and Y2K Product Compliance Utility

	Article: Q200897
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server version 2.0 now comes with a product compliance
	utility that can help Systems Management Server administrators with Year 2000
	(Y2K) compliance issues.
	
	Systems Management Server 2.0 contains a tab-delimited ASCII text file (the
	compliance database) that contains a list of Microsoft products with a
	compliance level assigned to each product. The compliance database is the core
	piece of the Systems Management Server 2.0 product compliance solution. You can
	implement the full Systems Management Server product compliance solution, or
	implement only the parts that would be most beneficial to your organization.
	
	MORE INFORMATION
	================
	
	Y2K Product Compliance Analysis consists of the following steps:
	
	1. Use Systems Management Server software inventory to gather information on the
	  software that is in use in your organization. Systems Management Server can
	  gather .exe file header information that can be compared against the .exe
	  file header data in the compliance database.
	
	2. Download product compliance information from the Microsoft Y2K web site at:
	
	  http://www.microsoft.com/technet/year2k/product/prodcomp.txt
	
	3. Use the Systems Management Server Queries and Reports console items to
	  automatically compare the Systems Management Server site database hardware
	  and software inventory data with the data in the compliance database. Systems
	  Management Server comes with several compliance reports and queries.
	
	4. If you have a mixed environment, Microsoft Product Support Services
	  recommends using Systems Management Server with the Microsoft Year 2000
	  Product Analyzer for Windows 32-bit clients and the Systems Management Server
	  built-in Product Compliance Database for Windows 16-bit and Alpha-based
	  32-bit clients. For more information about the compliance database and the
	  Year 2000 Product Analyzer, download the relevant white papers from the
	  Microsoft Systems Management Server web site at:
	
	  http://www.microsoft.com/smsmgmt/deployment/analyzingy2k.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
