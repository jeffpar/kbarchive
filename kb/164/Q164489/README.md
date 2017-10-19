---
layout: page
title: "Q164489: XADM: MAPI Error While Generating Offline Address Book"
permalink: /kb/164/Q164489/
---

## Q164489: XADM: MAPI Error While Generating Offline Address Book

	Article: Q164489
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to generate the offline address book, the following error messages
	may be displayed:
	
	  Errors in Log
	
	  When attempting to generate the OAB from Generate Address Book Now.
	
	  Error 5004:
	
	  Generation of the offline Address Book is complete. Result: The MAPI
	  call failed.<<80004005>>.
	
	CAUSE
	=====
	
	The server that the offline address book is generated from does not contain all
	of the necessary files for multiple language support for Exchange Server.
	
	RESOLUTION
	==========
	
	Install the correct code pages, locales, and templates for all of the languages
	that you want Exchange Server to support.
	
	MORE INFORMATION
	================
	
	For additional information about adding code pages, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q151701 XADM: How to Manually Add Code Pages for Mixed Languages
	
	Refer to the International Issues (Section 14) of the Readme.wri file on the
	Microsoft Exchange Server CD-ROM for information on:
	
	- Installing CodePage Support - Section 14.2.
	
	- Installing Foreign Language Display Templates - Section 14.3.
	
	Additional query words: 5004 NLS
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
