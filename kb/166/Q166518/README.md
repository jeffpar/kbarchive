---
layout: page
title: "Q166518: XADM: New Public Folder Created by INS Defaults to US ASCII"
permalink: /kb/166/Q166518/
---

## Q166518: XADM: New Public Folder Created by INS Defaults to US ASCII

	Article: Q166518
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A new public folder created by an Internet News feed in Microsoft Exchange
	Server version 5.0, defaults to Character Set US ASCII, regardless of Windows NT
	locale setting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This does not affect existing stores and folders. After you apply Service Pack
	1, a new public store will determine the character set based on the Windows NT
	locale setting. If the root Internet Newsgroups public folder has the correct
	character set, new sub-folders that you create will inherit the character set
	value from the root.
	
	
	Additional query words: FRN:Europe de l'Ouest (ISO-8859-1)USA: Western European (ISO-8859-1) JPN:Japanese - JIS KOR:Korean (KSC5601)
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
