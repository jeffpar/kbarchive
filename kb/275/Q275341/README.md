---
layout: page
title: "Q275341: XFOR: Lotus Notes Migration Fails with Event ID 181 and 10052"
permalink: /kb/275/Q275341/
---

## Q275341: XFOR: Lotus Notes Migration Fails with Event ID 181 and 10052

{% raw %}

	Article: Q275341
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate from Lotus Notes, the Migration Wizard may fail, and the
	following event ID messages may be logged:
	
	  Event ID: 181
	  Source:MSExchangeMigDS
	  Type: Error
	  Description: Could not bind to the Microsoft Exchange Directory server
	  <Server_name>.
	  The Microsoft Exchange Server computer does not respond.
	
	  -and-
	
	  Event ID: 10052
	  Source:MSExchangeMig
	  Type: Error
	  Description: Invalid Server specified or you do not have the permission
	  required to complete the operation.
	
	CAUSE
	=====
	
	This issue can occur if you specified an incorrect Exchange Server computer or
	if the server cannot be reached.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following troubleshooting procedure:
	
	1. Check that the directory service on the Exchange Server computer where you
	  are migrating to is running.
	
	2. If you are using a control file, ensure that the Home-Server keyword is
	  displayed.
	
	3. Check the spelling of the name of the server that is displayed in the control
	  file. To verify the correct name of the server, use the Microsoft Exchange
	  Server Administrator program to view the properties of the server.
	
	4. Run the following command to check for name resolution and connectivity to
	  the server:
	
	  "ping -a <ip_address>" (without the quotation marks)
	
	When you run this command, the name of the server is returned.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q198957 XFOR: Command Line Parameters for the Latest Migration Wizard
	
	Additional query words: mailmig exe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
