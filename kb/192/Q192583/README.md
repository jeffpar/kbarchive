---
layout: page
title: "Q192583: XADM: IMS Incorrectly Archives Message If ResolveP2 Is On"
permalink: kb/192/Q192583/
---

## Q192583: XADM: IMS Incorrectly Archives Message If ResolveP2 Is On

	Article: Q192583
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Internet Mail Service receives an inbound Internet message from a
	custom recipient whose alias is ambiguous, the Internet Mail Service fails to
	deliver the message. This can occur when the inbound Internet Mail Service
	server has the following registry value enabled:
	
	HKLM/System/CurrentControlSet/Services/MSExchangeIMC/Parameters/ResolveP2
	
	The message is then archived on the Internet Mail Service server. The following
	event logs are generated:
	
	NOTE: The file name will be different in each scenario and for each message.
	
	  Event: 12004
	  Source: MSExchangeIS
	  Description: Error 80004005-F0000000 occurred while processing message
	  <>. The archive filename is '3SW32JRP'.
	
	  Event: 4117
	  Source: MSExchangeIMC
	  Description: An error was returned from the messaging software the
	  Internet Mail Service uses to process messages on the Microsoft
	  Exchange Server. As a result, the message in spool file 3SW32JRP failed
	  to be delivered. The message has been moved to the IMCDATA\IN\ARCHIVE
	  directory.
	
	CAUSE
	=====
	
	When two sites have an identical custom recipient, directory replication between
	the sites creates duplicate entries in the global address list. For example, if
	someone@microsoft.com exists in site X and someone@microsoft.com exists in site
	Y, upon site replication between the sites, the global address list will have
	two identical entries, resulting in ambiguous names.
	
	When the Internet Mail Service submits the message to the Microsoft information
	store, and the ResolveP2 registry key is enabled, a directory lookup on the
	sender is submitted to the directory service. The directory service finds
	duplicate entries, and this creates an ambiguous condition because there is more
	than one address that meets the criteria. This error then is mapped as E_FAIL,
	resulting in the above error logs, and message is archived in the archive
	directory.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2398.0
	  Store.exe    5.5.2398.0
	  Mdbmsg.dll   5.5.2398.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
