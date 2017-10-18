---
layout: page
title: "Q170005: XCON: MTA Fails to Start with WinNT Event ID 137"
permalink: kb/170/Q170005/
---

## Q170005: XCON: MTA Fails to Start with WinNT Event ID 137

	Article: Q170005
	Product(s): Microsoft Exchange
	Version(s): WinNT: 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may fail to
	start and the following event is logged in the Windows NT Application Log.
	
	  Event ID: 137
	  MSExchangeMTA A fatal directory error occurred. Change to the
	  maximum logging level for more details.
	  [MTA MAIN BASE 1 15] (16)
	
	Check to make sure the Microsoft Exchange directory service is started. The
	MTA relies on the directory service to properly initialize. This behavior
	is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT: 5.5
	Issue type        : kbprb
	
	=============================================================================
	
