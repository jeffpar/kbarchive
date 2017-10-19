---
layout: page
title: "Q160184: XADM: Header.exe Must Run on Exchange Server Computer"
permalink: /kb/160/Q160184/
---

## Q160184: XADM: Header.exe Must Run on Exchange Server Computer

	Article: Q160184
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Exchange Administrator attempts to run the Header.exe utility from the
	Microsoft Exchange Technical Resource Kit, the following error may occur:
	
	  Could not bind to the Microsoft Exchange Server <<machine name>>.
	  The Exchange server computer does not respond.
	
	RESOLUTION
	==========
	
	The Header.exe utility must run from the Exchange Server computer. It cannot run
	remotely from a Windows NT workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
