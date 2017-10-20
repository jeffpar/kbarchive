---
layout: page
title: "Q151228: XFOR: Microsoft Mail Connector and Duplicate Serial Numbers"
permalink: /kb/151/Q151228/
---

## Q151228: XFOR: Microsoft Mail Connector and Duplicate Serial Numbers

{% raw %}

	Article: Q151228
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install the Microsoft Mail Connector onto a Microsoft Exchange Server,
	it will create a compatible Microsoft Mail for PC Networks PostOffice database.
	The Serial Number for this PostOffice will be 22- 28798.
	
	MORE INFORMATION
	================
	
	If you attempt to connect two Microsoft Exchange Servers, using the Microsoft
	Mail Connector as your backbone, you will get the following error in the Event
	Viewer when starting the PC MTA Service:
	
	  The Microsoft PC MTA service returned service specific error 3
	
	The Event log will contain the following entries:
	
	  Event ID: 4188
	  Source : Microsoft PC MTA
	  Type : Error
	  Category: Session
	  Description:
	  The postoffice NET/PO on \\computername\sharename and the postoffice NET1/PO1
	  on \\computername1\sharename1 have the same postoffice serial number
	  [22-28798].
	
	  Make sure you do not have two drives pointing to the same postoffice.
	
	Where NET/PO is one Microsoft Exchange Server, NET1/PO1 is another Microsoft
	Exchange Server, and \\computername\sharename is the MAILDAT$ share for the
	Microsoft Exchange Server PC Mail database.
	
	Microsoft does not recommend using the Microsoft Mail Connector as a backbone for
	Microsoft Exchange Servers. Setting up the Microsoft Mail Connector is discussed
	in more detail in the Microsoft Exchange Server Administrator's Guide, Chapter
	9.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
