---
layout: page
title: "Q277563: XADM: Can't Use Addr Templ Offline w/o Address Type Matching RDN"
permalink: kb/277/Q277563/
---

## Q277563: XADM: Can't Use Addr Templ Offline w/o Address Type Matching RDN

	Article: Q277563
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Exchange Server 5.5, clients can download address templates for offline
	use. However, offline use is limited to address templates with an address type
	that matches the relative distinguished name of the template. For additional
	information about how to create one-off address templates for Exchange Server,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q152436 XADM: How to Create Exchange Templates
	
	  Q216120 HOWTO: Create and Install a One-Off Address Template
	
	MORE INFORMATION
	================
	
	When the offline Address Book generator builds the template file, the offline
	Address Book generator writes only the directory name to the file, not the
	address type. The offline Address Book generator and client Address Book
	provider have the built-in assumption that the address type is always equal to
	the relative distinguished name of the one-off template. For example, when you
	install a one-off address template with TMPLINST as follows, the /NAME needs to
	equal /TYPE for offline use:
	
	  TMPLINST /SITEDN=/o=Organization/ou=Site /DISPLAY_NAME=Testtmpl /NAME=sdk
	  /TYPE=sdk /SYNTAX=c:test.oel /SERVER=Server
	  /MESSAGE_DT=c:\test.blt /RECIPIENT_DT=c:\test.blt /ADDRESS_DT=c:\test.blt
	  /LANGUAGE=409
	
	For additional information about how to install a one-off address template, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q216120 HOWTO: Create and Install a One-Off Address Template
	
	
	Additional query words: Offline template one-off addressing OAB RDN
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
