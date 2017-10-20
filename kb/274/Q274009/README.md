---
layout: page
title: "Q274009: XADM: Event ID 179  Message Is Logged During Automated Directory"
permalink: /kb/274/Q274009/
---

## Q274009: XADM: Event ID 179  Message Is Logged During Automated Directory

{% raw %}

	Article: Q274009
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an automated export of the Exchange Server directory, the
	following event ID message may be logged in the Application event log:
	
	  Event ID: 179
	  Source: MSExchangeDSExp
	  Description: Unable to initialize directory user agent (DUA) workspace.
	
	CAUSE
	=====
	
	This issue can occur because there is a resource limitation in Dapi.dll; the
	maximum number of directory operation sessions is 10.
	
	WORKAROUND
	==========
	
	To work around this issue, schedule exports to be run sequentially rather than
	simultaneously.
	
	MORE INFORMATION
	================
	
	For additional information about how to schedule batch files that export the
	directory, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	  Q177938 XADM: Using AT Command for Command-Line Import/Export
	
	For more information, refer to Microsoft Developer Network (MSDN) documentation
	on the DAPIStart in the Platform software development kit (SDK): Exchange
	Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
