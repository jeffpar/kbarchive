---
layout: page
title: "Q248468: Installing Microsoft SNA Server Data Providers for TCP/IP Only"
permalink: /kb/248/Q248468/
---

## Q248468: Installing Microsoft SNA Server Data Providers for TCP/IP Only

	Article: Q248468
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install these Microsoft data providers for use in
	a Transmission Control Protocol/Internet Protocol (TCP/IP)-only environment:
	
	- Microsoft ODBC Driver for DB2
	
	- Microsoft OLE DB Provider for DB2
	
	- Microsoft OLE DB Provider for AS/400 and VSAM
	
	MORE INFORMATION
	================
	
	These Microsoft data providers can all be configured to connect directly to a
	host system via TCP/IP. In this scenario, no SNA server services need to be
	running. However, these data providers can only be installed as part of the SNA
	server or SNA client installation process, and consequently the SNA services are
	always installed when running these Setup programs. Setup cannot be completed
	without configuring these SNA services.
	
	For users who require TCP/IP-only access through these Microsoft data providers,
	the following steps should be taken:
	
	1. Install the Microsoft SNA client software. When prompted, choose Select
	  Components and select the appropriate Microsoft data providers.
	
	2. When prompted to select a client/server protocol, select TCP/IP and click
	  Continue.
	
	3. When prompted to select a client mode, select Client locates server by name
	  and click Continue.
	
	4. When prompted to enter a remote server name, enter a fictitious server name
	  (for example, "far" (without the quotation marks)) and press Continue.
	
	5. In the Windows NT version, when prompted for server domain account
	  information, click OK. This will install the SNA services using the local
	  system account. When prompted to confirm this choice, click OK .
	
	6. When Setup finishes, restart Windows.
	
	7. The final step is to disable the SNA services. This step is necessary only
	  for the Windows NT client, not for the Windows 95 and Windows 98 clients.
	
	  For the Windows NT client, disable the SNA Base service using the Services
	  program in Control Panel.
	
	For additional information on configuring these Microsoft data providers, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q216428 Configuring Microsoft ODBC Driver for DB2
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  DB2
	
	  Q219077 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  AS/400 and VSAM
	
	NOTE: The Microsoft data providers referenced in this article are covered by the
	SNA server and SNA client End User License Agreements. A valid client license is
	required for each installation of the SNA client software.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	
	=============================================================================
	
