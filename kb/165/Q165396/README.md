---
layout: page
title: "Q165396: XFOR: Err Msg: Message Contains Duplicate E-mail Address"
permalink: kb/165/Q165396/
---

## Q165396: XFOR: Err Msg: Message Contains Duplicate E-mail Address

	Article: Q165396
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Mail Connector from Microsoft Exchange Server, you
	may receive the following error message from the Microsoft Mail Connector
	Interchange (MSMI):
	
	  Event ID: 2117
	  Type: Warning
	  Source: MSExchangeMSMI
	  Category: NDR
	  Description:
	
	  Non delivery report generated.
	
	     From: <network>/<PO>/<User ID>
	     Subject: <Some Subject>
	
	     [030] Message contains duplicated Email address. Mail item
	     was not delivered to:
	     <network>/<PO>/<User ID>
	
	A non-delivery report (NDR) is generated and sent to the originator of the
	message.
	
	CAUSE
	=====
	
	The [030] message means the MSMI found duplicate e-mail addresses when it tried
	to match the address against the directory.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Check for the existence of duplicate addresses in the Exchange Server Global
	  Address List (GAL); to do this, on the Tools menu, click Find Recipients and
	  search in the Exchange GAL. Delete duplicate addresses.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
