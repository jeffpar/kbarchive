---
layout: page
title: "Q253442: XADM: Exchange 5.5 SP3 KMS on Windows 2000 Certificate Server"
permalink: /kb/253/Q253442/
---

## Q253442: XADM: Exchange 5.5 SP3 KMS on Windows 2000 Certificate Server

	Article: Q253442
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3kbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 2000 
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You need to perform certain steps if you want to use Microsoft Exchange Server
	version 5.5 Service Pack 3 Key Management server (KM server) with a Microsoft
	Windows 2000 certificate server.
	
	MORE INFORMATION
	================
	
	To use Exchange Server 5.5 Service Pack 3 KM server with a Windows 2000
	certificate server:
	
	1. Copy the Expolicy.dll file from the Server\Support\Kms\Expolicy\I386 folder
	  on the Exchange Server 5.5 Service Pack 3 CD to the Winnt\System32 folder on
	  the certificate server.
	
	2. From a command prompt on the certificate server, run the following command:
	
	  regsvr32 expolicy.dll
	
	3. From the Certification Authority Microsoft Management Console (MMC) snap-in,
	  you need to configure the Certificate Authority to use the Legacy policy
	  module instead of the default Enterprise and Stand-Alone policy module. To do
	  this:
	
	  a. In MMC, right-click the server name.
	
	  b. Open the server properties.
	
	  c. Click the Policy Module tab, and then click Select.
	
	  d. Click Legacy Policy Module, and then click OK. The properties for the
	     server are displayed.
	
	  e. Click OK.
	
	  The following message is displayed:
	
	  You must restart Certificate Services for the changes to take effect. Do you
	  want to restart the service now?
	
	  To immediately restart the service, click Yes. To restart the service later,
	  click No. After you restart the service, you can use this server to issue
	  X.509V3 certificates that are compatible with Exchange Server 5.5 Service
	  Pack 3.
	
	For additional information about how to set up X.509V3 support for Exchange
	Server 5.5, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q192044 XADM: Setting Up X509v3 Certificates on Exchange 5.5 SP1 KMS with
	  Local Certificate Server
	
	Additional query words: kms
	
	======================================================================
	Keywords          : exc55sp3 kbfaq
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : WINDOWS:; winnt:5.5 SP3
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
