---
layout: page
title: "Q177777: XADM: Missing DLL Running Crystal Reports"
permalink: kb/177/Q177777/
---

## Q177777: XADM: Missing DLL Running Crystal Reports

	Article: Q177777
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Seagate's Crystal Reports on an computer running Exchange Server
	4.0 or 5.0 with Service Pack 2 installed, you may receive the following error
	message when attempting to open the Mailbox.rpt file in the Samples directory:
	
	  The Library P2SexSr.dll cannot be found, continue to open the report for
	  viewing only
	
	NOTE: Since this article was written, Seagate Software has become Crystal
	Decisions. For more information, see the following Web site:
	
	  http://www.crystaldecisions.net/ (http://www.crystaldecisions.net/)
	
	CAUSE
	=====
	
	Crystal Reports for Exchange on the BackOffice Resource Kit includes both the
	Report Viewer and the Report Designer. The Report Viewer can access all data
	sources (Exchange, SMS, NT, and so on), while the Report Designer can only
	access Exchange data. This error occurs because the Report Designer is trying to
	access a non-Exchange data source.
	
	The error occurs because the P2SexSr.dll file is inaccessible to the Report
	Designer function.
	
	WORKAROUND
	==========
	
	Seagate Support has verified that the P2SexSr.dll can only be obtained by
	purchasing the 101 BackOffice Report Pack.
	
	MORE INFORMATION
	================
	
	Because the file is not available to that particular version of Crystal Reports,
	Seagate has clarified the error message in Crystal Reports version 4.5. It
	states the following:
	
	  Crystal Reports for Exchange Resource Kit allows you to report on Exchange
	  data. For complete data access upgrade to Crystal Reports 5.0, contact
	  Seagate Software at 800-877-2340, 604-681-3435, or visit our Web site,
	  www.img.seagatesoftware.com, for more information. Continue opening report
	  for viewing only?
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
