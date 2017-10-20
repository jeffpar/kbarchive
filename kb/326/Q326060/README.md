---
layout: page
title: "Q326060: XADM: How to Move a Connection Agreement to Another Server"
permalink: /kb/326/Q326060/
---

## Q326060: XADM: How to Move a Connection Agreement to Another Server

{% raw %}

	Article: Q326060
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to change the name of the server to run a Connection Agreement, you
	have to provide a user ID and password. This article explains how to do this.
	
	MORE INFORMATION
	================
	
	To modify the properties of a Connection Agreement to make it run on another
	server, follow these steps:
	
	1. Click Start, click Programs, point to Administrative Tools, and then click
	  Active Directory Connector Management to open the Active Directory Connector
	  Management console.
	
	2. Click the Active Directory Connector for the server where the connection is
	  located, right-click the Connection Agreement that you want to modify, and
	  then click Properties.
	
	3. Click the General tab, click the server name to run the Connection Agreement
	  in the "Select a server to run the Connection Agreement", and then click OK.
	
	4. In the Connect as (Windows Server) box, type the Active Directory Connector
	  (ADC) Service account name and password, and then click OK.
	
	5. In the Connect as (Exchange Server) box, type the Exchange Service account
	  and password.
	
	For additional information about how to install Active Directory Connectors ,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q301036 HOW TO: Install and Configure Exchange Server 5.5 and the Active
	  Directory Connector in a Windows 2000 Domain
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
