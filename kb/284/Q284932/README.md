---
layout: page
title: "Q284932: XADM: Error Message: Unable to Get Organizational Information..."
permalink: kb/284/Q284932/
---

## Q284932: XADM: Error Message: Unable to Get Organizational Information...

	Article: Q284932
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Exmap.exe utility, you may receive the following error
	message:
	
	  Error: Unable to get organizational information from LDAP server. Your user
	  credentials may not allow sufficient access to the directory.
	
	CAUSE
	=====
	
	This issue can occur if you are running Active Directory Services Interface
	(ADSI) version 2.5 with Microsoft Data Access Components (MDAC) version 2.6.
	
	WORKAROUND
	==========
	
	To resolve this issue, install MDAC by using the rollback procedures that are
	described in the document that is located on the following Microsoft Web site:
	
	  http://support.microsoft.com/support/mdac/26setupfaq.asp
	  (http://support.microsoft.com/support/mdac/26setupfaq.asp)
	
	After you complete the rollback procedure, install MDAC version 2.5.
	
	MORE INFORMATION
	================
	
	For additional information about compatibility issues with ADSI and MDAC, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q275917 ADSI 2.5 and MDAC 2.6 Compatibility Issues
	
	For more information on these consult:
	-
	
	Additional query words: exmap exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
