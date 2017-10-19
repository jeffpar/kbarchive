---
layout: page
title: "Q190555: XFOR: Connector for cc:Mail Converts Messages Larger Than 20 KB"
permalink: /kb/190/Q190555/
---

## Q190555: XFOR: Connector for cc:Mail Converts Messages Larger Than 20 KB

	Article: Q190555
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Connector for Lotus cc:Mail has added functionality. This
	connector now takes a message body larger than 20 KB and converts it to an
	attachment with the name Unnamed.txt. This allows customers with large
	deployments to modify the server rather than reconfigure each desktop. Prior to
	the new functionality, the cc:Mail side converted the message body to an
	attachment, but the attachment did not have an association. This meant that
	users could not double-click the attachment and cause it to open automatically.
	This change primarily affects the Macintosh cc:Mail clients. Newer Windows
	versions of the cc:Mail clients correctly handle large message bodies.
	
	MORE INFORMATION
	================
	
	To obtain this feature, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component:
	
	  File Name   Version
	  ----------------------
	  Ccmc.exe    5.5.2358.0
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	
	Additional query words: ccmc attachment associate
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
