---
layout: page
title: "Q176240: XWEB: Cannot Log On to OWA If Alias Contains Double Quotes"
permalink: /kb/176/Q176240/
---

## Q176240: XWEB: Cannot Log On to OWA If Alias Contains Double Quotes

	Article: Q176240
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you are attempting to log on through Microsoft Outlook Web Access (OWA) to
	a Microsoft Exchange mailbox that contains double quote marks in the alias name,
	such as "James", you may receive one of the following error messages:
	
	  Failed to connect to the Microsoft Exchange Server, <servername>
	
	-or-
	
	  Internet Explorer cannot open the Internet site
	  http://<servername>/exchange/LogonFrm.asp?isnewwindow=0&mailbox=%22<user
	  name>%22.
	  The operation completed successfully.
	
	CAUSE
	=====
	
	It is possible to create a mailbox alias that contains double quotes using the
	Microsoft Exchange Administrator program. The Microsoft Exchange and Microsoft
	Outlook clients are capable of opening a mailbox with this type of alias.
	However, Outlook Web Access and Active Server Components do not support this and
	will fail with one of the errors stated above.
	
	Additional query words: 5.01
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	
	=============================================================================
	
