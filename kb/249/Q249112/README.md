---
layout: page
title: "Q249112: XFOR: Filter Rule Ignored by Directory Synchronization Process"
permalink: /kb/249/Q249112/
---

## Q249112: XFOR: Filter Rule Ignored by Directory Synchronization Process

{% raw %}

	Article: Q249112
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you set up a filter rule in the [LME-NOTES-DXANOTES] section of the
	Exchconn.ini file, the Microsoft Exchange Connector for Lotus Notes ignores the
	filter rule during directory synchronization (dirsync), and if a user's mail
	domain is empty in the Notes server Address Book, the Exchange Connector for
	Lotus Notes synchronizes the user to the Exchange Server directory.
	Additionally, all of the resource documents are synchronized to the Exchange
	Server directory.
	
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
	
	MORE INFORMATION
	================
	
	There is another INI parameter available, the ExportResources parameter, that
	you can use in the [LME-NOTES-DXANOTES] section of the Exchconn.ini file. You
	can set the ExportResources parameter to one of the following values, as
	applicable:
	
	- 0 - The Exchange Connector for Lotus Notes does not export Resource entries
	  from Notes at all.
	
	- 1 - The Exchange Connector for Lotus Notes exports Resource entries as before
	  filter rules.
	
	- 2 - The Exchange Connector for Lotus Notes conditionally exports Resource
	  Notes Address Book entries based on filter rules.
	
	Before you apply this fix, or if the ExportResources parameter is set to a value
	other than 2, filter rules (if any exist) are applied only to Notes Address Book
	entries of the Person type. This parameter defaults to 1 if no setting is found.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
