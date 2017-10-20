---
layout: page
title: "Q201904: XFOR: Information Store Archiving a Message If ResolveP2 Enabled"
permalink: /kb/201/Q201904/
---

## Q201904: XFOR: Information Store Archiving a Message If ResolveP2 Enabled

{% raw %}

	Article: Q201904
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Inbound Internet mail from a custom recipient may not be delivered if the
	following registry key is enabled:
	
	  HKLM/System/CurrentControlSet/Services/MSExchangeIMC/Parameters/ResolveP2
	
	The incoming message is archived on an Internet Mail Service server and the
	following events are logged:
	
	  Event ID: 12004
	  Source: MSExchangeIS
	  Description:
	  Error 80004005-F0000000 occurred while processing message <>. The
	  archive filename is '3SW32JRP'.
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Description:
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. As a result, the
	  message in spool file 3SW32JRP failed to be delivered. The message has been
	  moved to the IMCDATA\IN\ARCHIVE directory.
	
	NOTE: The file name is different in each scenario and for each mail message.
	
	CAUSE
	=====
	
	This problem can occur if two sites have identical custom recipients, and
	directory replication between them creates duplicate entries in the global
	address list. For example, if someone@microsoft.com exists in site X and
	someone@microsoft.com exists in site Y, after site replication occurs between
	them, the global address list contains two identical entries for "someone,"
	which results in ambiguous names.
	
	The Internet Mail Service submits the message to the information store, which
	looks up the Directory service and finds an ambiguous name returned error. This
	error is mapped as E_FAIL, the error messages in the "Symptoms" section of this
	article is logged, and the message is archived.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.5.2398.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2398.0 | 
	+-------------------------+
	| Gapi32.dll | 5.5.2398.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
