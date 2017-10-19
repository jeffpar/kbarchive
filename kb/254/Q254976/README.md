---
layout: page
title: "Q254976: XCON: MIXER Does Not Map SMTP Subdomains to Organizational Units"
permalink: /kb/254/Q254976/
---

## Q254976: XCON: MIXER Does Not Map SMTP Subdomains to Organizational Units

	Article: Q254976
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have configured the Exchange Server message transfer agent (MTA) to map
	between SMTP addresses and X.400 addresses according to the following Microsoft
	Knowledge Base article:
	
	  Q238507 XCON: Exchange Server Message Transfer Agent MIXER Mapping Tables
	
	the subdomains of the SMTP address may not be mapped to organizational unit (OU)
	attributes in the X.400 O/R address.
	
	For example, the following entry in the Mcgam.in.txt file maps "eur.fr" to
	"C=FR;A=ADMD;P=PRMD":
	
	  eur.fr#prmd$PRMD.admd$ADMD.c$FR#
	
	A message that is addressed to user@dept.area.eur.fr should then be converted to
	an X.400 message that is addressed to C=FR;A=ADMD;P=PRMD;O=area;OU1=dept, but
	the actual mapping is to C=FR;A=ADMD;P=PRMD;O=area. No OUs are mapped.
	
	CAUSE
	=====
	
	This issue can occur because the Exchange Server MTA contains a logic error that
	causes the generated OU values to be overwritten.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: MIXER OU ORGUNIT
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
