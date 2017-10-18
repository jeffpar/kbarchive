---
layout: page
title: "Q241809: XWEB: Installing OWA Only Using Unattended Setup"
permalink: kb/241/Q241809/
---

## Q241809: XWEB: Installing OWA Only Using Unattended Setup

	Article: Q241809
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 01-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to install Active Server Components (Outlook Web Access
	Components) using unattended setup (setup /q [batchfile]), you may receive the
	following error message :
	
	  There is something wrong with the INI file. Make sure the command line
	  specifies a full path to a valid INI file.
	
	MORE INFORMATION
	================
	
	You receive the preceding error message when you attempt to install only Active
	Server Components using the Setup.ini file. The Setup.ini file you use may look
	similar to the one below:
	
	  ;To run this batch setup file, type SETUP /Q[path to this
	  file]\SETUP.INI.;ex. SETUP /QD:\SETUP1.INI
	  [Product ID]
	  ;Your product ID. This field is required, and batch setup will fail if it
	  ;is not included, unless this copy of Microsoft Exchange was received under
	  ;the Microsoft Select Agreement.
	  ;Product IDs are of the format: xxx-xxxxxxx
	  cdkey=123-4567890
	
	  [Paths]
	  ;Where the server will be installed.
	  ServerDest=c:\exchsrvr
	
	  ;Where Admin will be installed if selected.
	  ;AdminDest=c:\exchsrvr
	
	  [Components]
	  ;Whether to install the server services.
	  Services=FALSE
	
	  ;Whether to install Administrator program.
	  Administrator=FALSE
	
	  ;Whether to install MS Mail Connector.
	  MSMailConnector=FALSE
	
	  ;Whether to install the Connector for cc:Mail.
	  cc:Mail=FALSE
	
	  ;Whether to install the X.400 Connector.
	  X400=FALSE
	
	  ;Whether to install the Active Server Components.
	  Active Server Components=TRUE
	
	  ;Whether to install the Sample Applications.
	  Sample Applications=FALSE
	
	  ;Whether to install online documentation.
	  Books Online=FALSE
	
	  ;Whether to install the Event Service
	  Event Service=FALSE
	
	  [Site]
	  ;If the server is joining an existing Site, server in that Site.
	  ExistingServerName=UKMSGBE01
	
	  [ServiceAccount]
	  ;The service account password.
	  ;AccountPassword=password
	
	  [Licensing]
	  ;Whether to setup licensing on a Per Seat basis.
	  ;PerSeat=TRUE
	
	The option to install only Active Server Components on a Microsoft Internet
	Information Server (IIS) computer without installing the core Exchange Server
	services is not supported. Although you can specify "Existing Server Name" in
	the Setup.ini file, this parameter is only used by Setup when joining an
	existing site. It does not indicate the name of an Exchange Server computer to
	be used by Outlook Web Access.
	
	REFERENCES
	==========
	
	For additional information on installing Exchange Server in batch mode, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188625 XADM: Unattended Exchange Server 5.5 Setup
	
	Additional query words: OWA UNATTENDED INI
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchange550SP1 kbExchange550SP2
	Version           : WINDOWS:5.5; winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
