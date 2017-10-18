---
layout: page
title: "Q264341: XFOR: Unintelligible Characters in MS Mail Connector Queue"
permalink: kb/264/Q264341/
---

## Q264341: XFOR: Unintelligible Characters in MS Mail Connector Queue

	Article: Q264341
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.5; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft Mail Server and the Microsoft Mail Connecter with Exchange
	Server 5.5 on a computer that is running Windows 2000 Server Japanese Edition,
	when you look at the Sender and Subject fields in the Microsoft Mail Connector
	queue by using the Microsoft Exchange Server Administrator program, double-byte
	character set (DBCS) characters become unintelligible characters.
	
	CAUSE
	=====
	
	This issue can occur because of the Microsoft Mail Connector in Exchange Server
	5.5. The method of font management that Windows 2000 Server uses is different
	than the method that Microsoft Windows NT Server version 4.0 uses. Windows NT
	Server 4.0 and Exchange Server 5.5 use Microsoft Shell Dialog font, but Windows
	2000 Server uses the font that is registered in the registry instead of
	Microsoft Shell Dialog font. A potential issue in the Microsoft Mail Connector
	may be exposed, which causes the issue that is described in the "Symptoms"
	section of this article.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : WINDOWS:3.5; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
