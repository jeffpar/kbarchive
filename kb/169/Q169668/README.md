---
layout: page
title: "Q169668: XCON: X.25 Support for SAT Cards"
permalink: kb/169/Q169668/
---

## Q169668: XCON: X.25 Support for SAT Cards

	Article: Q169668
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server documentation states that the Eicon cards are the
	only X.25 cards supported by Microsoft Exchange Server. This is not true; in
	some cases X.25 cards manufactured by SAT are also supported.
	
	MORE INFORMATION
	================
	
	The statement that only Eicon cards are supported refers only to the
	installation of the X.25 protocol stack within the Microsoft Exchange Server
	Administrator program. Currently only Eicon cards can be used for an X.400
	connector using a native X.25 connection.
	
	There are, however, three ways to use an SAT X.25 board with a Microsoft Exchange
	Server computer.
	
	- One way is to configure a software PAD on top of both X.25 boards. Then a RAS
	  connector is configured between the two Microsoft Exchange Server computers.
	
	- The two other configurations require the XLAN-IP product to route the IP
	  protocol over the X.2 physical link. On the computer running Microsoft
	  Exchange Server, either configure a site connector
	
	- or add a TCP/IP stack and configure an X.400 connector. This solution has the
	  advantage of supporting both a site connector and an X.400 connector. On the
	  other hand, it produces more protocol overhead and is not suited to very slow
	  X.25 connections (less than 9,600 baud).
	
	REFERENCES
	==========
	
	SAT is an X.25 board manufacturer whose Atlantis X.25 for Windows NT and
	Atlantis X.25/ISDN PCI for Windows NT cards are supported by Microsoft Exchange
	Server on Windows NT versions 3.51 and 4.0. To contact SAT:
	
	  SAT - Atlantis
	  11, rue Watt
	  75626 Paris France
	  Tel: 33 1 55 75 14 32
	  http://www.atlantis.sagem.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
