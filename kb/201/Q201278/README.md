---
layout: page
title: "Q201278: XFOR: 16-bit CCMARCH Does Not Support DBCS in Privdir.ini File"
permalink: /kb/201/Q201278/
---

## Q201278: XFOR: 16-bit CCMARCH Does Not Support DBCS in Privdir.ini File

	Article: Q201278
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 16-bit version of the cc:Mail Archive Importer (CCMARCH) does not translate
	double byte character set (DBCS) characters to Unicode.
	
	CAUSE
	=====
	
	When you migrate users from Lotus cc:Mail to Exchange Server, messages with DBCS
	characters are not migrated properly. Microsoft Windows 3.1 does not support
	Unicode. Thus, CCMARCH cannot map DBCS characters to Unicode during the
	migration process from Lotus cc:Mail to Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 16-bit version of the
	cc:Mail Archive Importer.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
