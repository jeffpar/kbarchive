---
layout: page
title: "Q196343: XFOR: Extensions for Attachments Handled Incorrectly by SNADS"
permalink: /kb/196/Q196343/
---

## Q196343: XFOR: Extensions for Attachments Handled Incorrectly by SNADS

{% raw %}

	Article: Q196343
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a mail message containing long filenames with extensions goes through the
	Microsoft Exchange Connector for SNADS, they are not mapped correctly to 8.3
	MS-DOS format. Also, the mapping table Extmap.tbl, which specifies the
	extensions for various file types, is ignored altogether.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange SNADS Connector
	
	  File Name   Version
	  ----------------------
	  Lsxfm.dll   5.5.2506.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
