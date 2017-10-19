---
layout: page
title: "Q192044: XADM: Setting Up X509v3 Certs on Exch 5.5 SP1 KMS Local Cert Srv"
permalink: /kb/192/Q192044/
---

## Q192044: XADM: Setting Up X509v3 Certs on Exch 5.5 SP1 KMS Local Cert Srv

	Article: Q192044
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details how to set up X.509 V3 certificate support on an Exchange
	Server 5.5 Service Pack 1 (SP1) Key Management Server (KMS) computer that also
	has Microsoft Certificate Server installed.
	
	Before you proceed with the KMS Setup, consult the following Microsoft Knowledge
	Base article, which details how to properly update Certificate Server to version
	5.00.1671.200.
	
	  Q184695 : Readme Notes for Certificate Server Update
	
	
	The updated files can be obtained from the following location:
	
	  ftp://ftp.microsoft.com/bussys/IIS/iis-public/fixes/usa/certserv/
	
	NOTE: It is important that the Microsoft Exchange Service account has at least
	READ-ONLY privileges on the shared CERT directory of the Microsoft Certificate
	server computer.
	
	If the KMS is not installed, please consult the README file on the Exchange
	Server 5.5 SP1 installation disk on how to install the service.
	
	NOTE: Once the KMS is installed, you will need to reapply SP1 for Exchange Server
	5.5 or you may experience problems gaining access to some of the CA Object's
	property pages, specifically the "Certificate Trust List".
	
	MORE INFORMATION
	================
	
	To enable X.509 V3 certificates on the Exchange Server 5.5 Service Pack 1 KMS,
	perform the following steps:
	
	1. The Expolicy.dll file must first be registered to the Certificate Server
	  computer. This file in located on the Exchange Server 5.5 SP1 installation
	  disk in the following location:
	
	  Server\Support\Kms\Expolicy\<Cputype>
	
	  To register this file, go to an MS-DOS command prompt, change to the above
	  directory, and then type the following:
	
	  REGSVR32 EXPOLICY.DLL
	
	2. After the notification that the DLL is registered is displayed, type the
	  following from a command prompt:
	
	  NET STOP CERTSVC
	
	3. After the service is stopped, type the following at a command prompt to
	  restart the Certificate server:
	
	  NET START CERTSVC
	
	4. Open the Microsoft Exchange Server Administrator program. Go to the Site
	  Configuration container, and select properties for the CA object. Click on
	  the Enrollment tab.
	
	5. In the Microsoft Exchange 4.0/5.0 compatibility section, there are three
	  choices. By default, the "Issue X.509 V1 certificates only" check box is
	  selected. Select either of the remaining options to issue X.509 V3
	  certificates (either "Issue both V1 and V3 certificates" or "Issue X.509 V3
	  certificates only").
	
	  A dialog box will then prompt you to select the Certificate Authority. Verify
	  that the local Certificate Server computer is selected and continue. The
	  Exchange Server KMS computer will now be properly configured to use the
	  locally installed Certificate Server.
	
	For more information on how to implement KMS in an Exchange Server organization,
	consult the Exchange Server 5.5 README file.
	
	Additional query words: security km server s/mime smime
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5,5.5 SP1
	Issue type        : kbhowto
	
	=============================================================================
	
