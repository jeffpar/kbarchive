---
layout: page
title: "Q193384: XGEN: Internet Security &amp; Exchange: Top 5-10 Issues &amp; Solutions"
permalink: kb/193/Q193384/
---

## Q193384: XGEN: Internet Security &amp; Exchange: Top 5-10 Issues &amp; Solutions

	Article: Q193384
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the top five to ten issues with setting up Internet
	Security and Exchange Server, along with references to Knowledge Base articles
	and other solutions.
	
	This article is part of an on-going process, and will be updated monthly to stay
	accurate. Feed back is welcome to Karelde@microsoft.com or
	Joerich@microsoft.com. Current as of 9/14/98
	
	MORE INFORMATION
	================
	
	- How to install Exchange Server 5.5 with support for V1 and V3 Certificates
	  for S/MIME and Public/Private Key encryption (Signing and Sealing Mail
	  Messages). Installation requires the use of Certificate Authority (CA) 1.0 in
	  Internet Information Server 4.0 that comes in the Windows NT 4.0 Option Pack.
	  Additionally, this version requires the updated CA Server. For additional
	  information, see the following articles in the Microsoft Knowledge Base.
	
	  Q192044 Setting Up X509v3 Certs on Exch 5.5 SP1 KMS with Local Cert Srv
	
	  Q184695 Readme Notes for Certificate Server Update
	
	- How to set up Secure Socket Layers (SSL)/Transport Layer Security (TLS)
	  between Exchange Server 5.0 or 5.5 and Internet e-mail clients, POP3, IMAP4,
	  NNTP, HTTP, SMTP. For additional information, see the following article in
	  the Microsoft Knowledge Base.
	
	  Q175439 : XFOR: Enabling SSL For Exchange Server
	
	- How to set up SSL/TLS between Exchange Server and other SMTP (non- Exchange
	  Server) host. This requires enabling SSL for the SMTP protocol first. For
	  instructions, see the following article in the Microsoft Knowledge Base, but
	  select SMTP as the Protocol to be used in Key Manager.
	
	  Q175439 : XFOR: Enabling SSL For Exchange Server
	
	  For additional information, see the following articles in the Microsoft
	  Knowledge Base.
	
	  Q174754 : XFOR: Connecting IMS to IMS with SASL
	
	- When you use Microsoft Outlook Express to connect to Microsoft Exchange
	  Server, version 5.0 with Service Pack 1 installed, the information store may
	  stop responding (crash). Fixed in the latest service pack. For additional
	  information, see the following article in the Microsoft Knowledge Base.
	
	  Q166627 : XCLN: Outlook Express Crashes Store When SSL Is Used
	
	
	- If you configure the Internet Mail Service on two Microsoft Exchange Server
	  computers to use Secure Sockets Layer (SSL) without authentication, you may
	  receive a non-delivery report (NDR) when you attempt to send mail from one
	  server to another through the Internet Mail Service. The text of the NDR
	  includes a 505 error, and indicates that authentication is required for the
	  message to be delivered. Fixed in the latest service pack for 5.5. For
	  additional information, see the following article in the Microsoft Knowledge
	  Base.
	
	  Q181481 : XFOR: Non-Delivery Report When Using SSL Without Authentication
	
	- On July 17, 1998, Microsoft released an updated version of Schannel.dll. This
	  latest version provides the following benefits: Updates the Schannel.dll used
	  by IIS and Exchange Server for encryption. For additional information, see
	  the following article in the Microsoft Knowledge Base.
	
	  Q148427 : Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
