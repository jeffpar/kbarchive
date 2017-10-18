---
layout: page
title: "Q254347: Query Extract Tool in Resource Kit Unable to Return Data"
permalink: kb/254/Q254347/
---

## Q254347: Query Extract Tool in Resource Kit Unable to Return Data

	Article: Q254347
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbMMC kbServer kbsms200 kbsms200bug kbCollections kbReport kbsmsAdmin kbsm
	Last Modified: 06-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your server receives more than 5000 hits, the Systems Management Server (SMS)
	2.0 Query Extract tool, located in the Microsoft BackOffice Resource Kit, is
	unable to return complete data and you may receive the following error message:
	
	  Method 'ExecQuery' of object 'ISWbemServices' failed.
	
	WORKAROUND
	==========
	
	To work around this behavior, download the latest version of the Query Extract
	tool from the SMS 2.0 Support Tools section located on the following Microsoft
	Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/default.asp
	  (http://www.microsoft.com/smsmgmt/downloads/default.asp)
	
	STATUS
	======
	
	The latest version of the Query Extract tool has fixed this behavior.
	
	MORE INFORMATION
	================
	
	The files in the Query Extract tool have the following file names, sizes, and
	dates:
	
	Smsextract.mdb       454,656        3/18/99
	Smsextract.xls       175,104        3/18/99
	Smsextract.xlt       175,104        3/18/99
	
	NOTE: Some files may have dates that are later than the preceding file dates.
	
	Additional query words: prodsms, ACCESS, EXCEL
	
	======================================================================
	Keywords          : kbenv kbtool kbMMC kbServer kbsms200 kbsms200bug kbCollections kbReport kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
