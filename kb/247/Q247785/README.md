---
layout: page
title: "Q247785: XCON: Getting IMC, X.400, Site Conns. in Exchange 4.0, 5.0, 5.5"
permalink: kb/247/Q247785/
---

## Q247785: XCON: Getting IMC, X.400, Site Conns. in Exchange 4.0, 5.0, 5.5

	Article: Q247785
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server 4.0:
	
	Exchange Server version 4.0 Standard Edition does not come with the Internet Mail
	Connector (IMC), the X.400 Connector, or the Site Connector. To install any of
	these connectors you must first purchase or create the installation disks. If
	you plan to perform directory replication with other Exchange Server sites, you
	must install the Site Connector.
	
	NOTE: The Select May 1996 Complete Release Burgundy CD contains the Standard
	Edition. See the "More Information" section of this article.
	
	Exchange Server 5.0:
	
	Exchange Server version 5.0 Standard Edition does not come with the X.400
	Connector or the Site Connector. To install either of these connectors you must
	first purchase or create the installation disks. If you plan to perform
	directory replication with other Exchange Server sites, you must install the
	Site Connector. If you subscribed to Select CD, your CD may or may not have
	these connectors, depending on your customer subscription. Linkage Connectors
	are not included in the Exchange Server 5.0 Service Packs and are discontinued.
	Updates are on the Microsoft FTP site in the following directory:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/linkage
	
	Exchange Server 5.5:
	
	Exchange Server version 5.5 Standard Edition does not come with the X.400
	Connector, the Exchange Connector for IBM Office Vision/VM (PROFS), the Exchange
	Connector for SNADS, the Exchange Connector for Novell GroupWise, or the
	Calendar Connector.
	
	To install the X.400 Connector you must first purchase the X.400 Connector disk.
	If you subscribed to Select CD, your CD may or may not have the X.400 Connector,
	depending on your customer subscription.
	
	The Exchange Connector for IBM Office Vision/VM (PROFS) and the Exchange
	Connector for SNADS are not available for the Standard Edition; these connectors
	require that you upgrade to Exchange Server 5.5 Enterprise Edition. Updates are
	on the Exchange Server 5.5 Service Pack 3 CD in the
	Ex55sp3yk\Eng\Exchconn\Setup\I386 folder under the Ovvconn and Snaconn
	subfolders, respectively.
	
	The Exchange Connector for Novell GroupWise and the Calendar Connector are free
	on the Exchange Server 5.5 Service Pack 3 CD in the
	Ex55sp3yk\Eng\Exchconn\Setup\I386 folder under the Calcon and Gwxcon subfolders,
	respectively. These connectors require that you install Service Pack 1. These
	connectors can also be downloaded from the Microsoft FTP site in the following
	directory:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/exchg5.5/sp3
	
	MORE INFORMATION
	================
	
	For additional information about how to create connector disks from Select CDs,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q199141 XCON: Creating Connector Disks from Select CD Subscription
	
	  Q152730 XGEN: How to Make Disks From the Select CD
	
	For additional information about connectors included with Microsoft Exchange
	Server 5.5, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q199125 XCON: Connectors Included with Microsoft Exchange Server 5.5
	
	For additional information about the Exchange Connector for Lotus Notes, the
	Exchange Connector for IBM OfficeVision/VM (PROFS), and the Exchange Connector
	for SNADS, see the Readme file for the Exchange Connector for Lotus Notes, the
	Exchange Connector for IBM OfficeVision/VM (PROFS), and the Exchange Connector
	for SNADS on the Exchange Server Service Pack 3 CD in the
	Ex55sp3yk\Eng\Exchconn\Setup\I386\Ovvconn folder.
	
	For additional information about the Exchange Connector for Novell GroupWise, see
	the GroupWise Readme file on the Exchange Server Service Pack 3 CD in the
	Ex55sp3yk\Eng\Exchconn\Setup\I386\Gwxcon folder.
	
	For additional information about foreign connector updates in Service Pack 3,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q244473 XFOR: Foreign Connector Updates in Service Pack 3
	
	Additional query words: IBM Office Vision / VM, and SNADS Connectors Group Wise
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
