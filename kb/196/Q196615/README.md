---
layout: page
title: "Q196615: XFOR: PROFS and SNADS Connector Does Not Support Euro Symbol"
permalink: kb/196/Q196615/
---

## Q196615: XFOR: PROFS and SNADS Connector Does Not Support Euro Symbol

	Article: Q196615
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The PROFS or OV/VM connector does not support the Euro character when
	translating messages between Exchange Server and the host. For the Windows code
	page, 1252, the Euro maps to 'x80' (Alt-0128).
	
	CAUSE
	=====
	
	The PROFS and SNADS connector is not equipped to handle the translation of the
	Euro symbol between the new host code page 1182 to the Windows code page 1252
	(available in Windows NT 4.0 Service Pack 4 and Windows 98)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The PROFS and SNADS connector now correctly translates the Euro dollar symbol
	when transferring messages between Exchange Server and the host. Customers will
	need to update their IBM host software to the latest version in order to support
	this new code page.
	
	The new 1148 code page is simply the old 500 code page with a single character
	addition for the Euro symbol.
	
	Additional query words: code page, euro symbol
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
