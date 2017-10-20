---
layout: page
title: "Q160572: XADM: Start and Stop Exchange Services from a Command Line"
permalink: /kb/160/Q160572/
---

## Q160572: XADM: Start and Stop Exchange Services from a Command Line

{% raw %}

	Article: Q160572
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can manually start and stop any service from the command prompt.
	
	- To start Microsoft Exchange services, at the command prompt, type "net start
	  <registry name>" (without the quotation marks). For example:
	
	  net start MSExchangeIS
	
	- To stop Microsoft Exchange services, at the command prompt, type "net stop
	  <registry name>" (without the quotation marks). For example:
	
	  net stop MSExchangeIS
	
	MORE INFORMATION
	================
	
	The registry names for the Microsoft Exchange services are:
	
	  MSExchangeSA for Microsoft Exchange System Attendant
	  MSExchangeIS for Microsoft Exchange Information Store
	  MSExchangeDS for Microsoft Exchange Directory
	  MSExchangeMTA for Microsoft Exchange Message Transfer Agent
	  MSExchangeMSMI for MS Mail Connector Interchange
	  MSExchangeDX for Microsoft Exchange Directory Synchronization
	  MSExchangeIMC for Microsoft Exchange Internet Mail Connector
	  MSExchangeFB for MS Schedule+ Free/Busy connector
	  MSExchangeES for Microsoft Exchange Event Service
	  MSPOP3Connector for Microsoft Exchange POP3 Connector (Small Business Server
	  version 4.5 Specific)
	
	NOTE: these commands to start and stop should not be used with the POP3
	connector.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q257689 'Net' Command Logs Event Viewer Message with Microsoft Exchange
	  Connector for POP3 Mailboxes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
