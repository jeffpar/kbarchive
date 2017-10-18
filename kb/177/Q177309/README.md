---
layout: page
title: "Q177309: XADM: Setup Cannot Initialize the Key Management Database"
permalink: kb/177/Q177309/
---

## Q177309: XADM: Setup Cannot Initialize the Key Management Database

	Article: Q177309
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you use custom setup to add a Microsoft Exchange Server 5.5 computer to a
	site with an existing Exchange Server 4.0 computer, you may receive the
	following error while installing the Exchange Key Management Server:
	
	  Setup is unable to initialize the key management database
	
	  ID no. c103798c
	
	In the event log, you will see:
	
	  MSExchangeKMS 1004 KMServer was not able to verify the signature on the
	  crypto service provider.
	
	CAUSE
	=====
	
	This error can occur if you have the wrong version of Advapi32.dll. in the
	<winnt>\system32 directory.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
