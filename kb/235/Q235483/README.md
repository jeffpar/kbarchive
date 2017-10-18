---
layout: page
title: "Q235483: XFOR: Adding Secondary SMTP Proxy Address for GroupWise Dirsync"
permalink: kb/235/Q235483/
---

## Q235483: XFOR: Adding Secondary SMTP Proxy Address for GroupWise Dirsync

	Article: Q235483
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The latest version of the Microsoft Exchange Server Connector for Novell
	GroupWise no longer generates the SMTP proxy address of GroupWise users based on
	the GroupWise domain information (or their gateway alias). However, users may
	want to continue using the gateway alias (if one exists) for their secondary
	SMTP proxy address or to generate a secondary SMTP proxy address based on a
	rule.
	
	MORE INFORMATION
	================
	
	For more information on customizing the mapping rules, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q196585 Creating Secondary Proxy Addresses During Notes Dirsync
	
	  Q180517 Customizing Dirsync Between Exchange and Notes
	
	Except for Exchconn.ini, the mapping tables are located in the
	Exchsrvr\Connect\Exchconn\Dxagwise folder. Note that there should only be spaces
	when separating the fields; do not use the TAB key. The Exchconn.ini file is
	located in the Exchsrvr\Connect\Exchconn folder.
	
	1. Add the following line to Mexamap.tbl:
	
	  SMTPADDR2 128 Secondary-Proxy-Addresses(smtp:)
	
	2. Add the following line to Gwamap.tbl:
	
	  SMTPADDR 128 External-Name
	
	3. Add the following line to Mapgwise.tbl:
	
	  SMTPADDR2 = ISEQUAL(SMTPADDR, "", OBJECT "@groupwise.com", SMTPADDR)
	
	  Note that if the OBJECT attribute contains spaces (allowable by GroupWise), it
	  results in an update to the GroupWise custom recipient every time directory
	  synchronization occurs. This adds some directory replication traffic between
	  Exchange Server computers. To avoid this additional traffic, other means of
	  mapping rules must be implemented.
	
	4. Open the Exchconn.ini file, and look for the following parameter setting (it
	  should be under the [LME-GWISE] section):
	
	  SMTPAliasType=
	
	5. Add the following keyword to that parameter setting:
	
	  SMTPAliasType=SMTP
	
	6. Run a Full Reload directory synchronization from GroupWise to Exchange
	  Server.
	
	The mapping rule listed in step 3 should be customized based on the SMTP domain
	you want to map.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
