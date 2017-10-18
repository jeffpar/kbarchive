---
layout: page
title: "Q160153: XGEN: Directory Import Generates Unusable Random Password"
permalink: kb/160/Q160153/
---

## Q160153: XGEN: Directory Import Generates Unusable Random Password

	Article: Q160153
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are doing a Directory Import from the Microsoft Exchange Server
	Administrator program under Windows NT 4.0 to a computer running Microsoft
	Exchange server under Windows NT 3.51. If, on the Account Creation dialog box,
	you select the check boxes "Create Windows NT account" and "Generate random
	password," the password generated in the PSW file contains non-ASCII characters
	in the extended character set. This password is not useable.
	
	CAUSE
	=====
	
	Because Windows NT is not based on the ASCII character set, an extended
	character set is used to generate the random password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: admin Unicode
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
