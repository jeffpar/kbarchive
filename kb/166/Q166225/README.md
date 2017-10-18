---
layout: page
title: "Q166225: XWEB: Err Msg: Requested Header Not Found"
permalink: kb/166/Q166225/
---

## Q166225: XWEB: Err Msg: Requested Header Not Found

	Article: Q166225
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a mailbox on a Microsoft Exchange Server computer by
	way of the Web, you may receive the following error message:
	
	  Internet Explorer cannot open the Internet site
	  http://<server>/exchange/LogonFrm.asp?Mailbox=<alias>.
	  The requested header was not found.
	
	NOTE: <server> is the name of the server running Internet Information
	Server (IIS) and the Active Server Components, and <alias> is the alias of
	the Exchange Server mailbox you are attempting to sign in from.
	
	CAUSE
	=====
	
	This error will occur if the only password authentication configured for IIS is
	Allow Anonymous.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- To log on to an Exchange mailbox, you must have either Basic (Clear Text)
	  and/or Windows NT Challenge/Response Authentication on the computer running
	  IIS. This is required in order to allow IIS to pass your user credentials on
	  to a computer running Exchange Server.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	
