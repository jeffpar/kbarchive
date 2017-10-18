---
layout: page
title: "Q169462: XFOR: Configuring POP3 Client for Remote Mail Configuration"
permalink: kb/169/Q169462/
---

## Q169462: XFOR: Configuring POP3 Client for Remote Mail Configuration

	Article: Q169462
	Product(s): Microsoft Exchange
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Service for Microsoft Exchange Server version 5.0 gives
	administrators the additional flexibility of using POP3 client software to
	connect to the Exchange Server computer. The Internet Mail Service does support
	POP3 as a server; however, there is currently no support for IMAP4 in Exchange
	Server 5.0.
	
	POST OFFICE PROTOCOL, REVISION 3 (POP3)
	
	The POP3 protocol uses the port 25 (SMTP) to send messages and port 110 (POP3) to
	download or retrieve messages from the server. In the default configuration in
	most POP3 clients available, POP3 downloads the messages to be stored locally
	and deletes them from the server. This was originally intended to reduce the
	amount of storage space needed on e-mail servers and to allow a light and fast
	e-mail client for the user.
	
	Although this reduces the amount of storage space necessary on the server, it may
	not be convenient for some users who may use multiple clients to connect to
	servers such as Exchange Server.
	
	For example, UserA uses the Exchange Server client in the office, but at home she
	uses the lighter, faster Internet Mail and News clients.
	
	INTERNET MAIL ACCESS PROTOCOL, REVISION 4 (IMAP4)
	
	Like POP3, the IMAP4 protocol uses port 25 (SMTP) to send messages, but an IMAP4
	server listens on port 143. Unlike POP3, IMAP4 allows the user to store messages
	by default on the server instead of downloading the messages locally.
	
	WORKAROUND
	==========
	
	For users of Exchange Server version 5.0 who want the convenience of IMAP4 with
	the storage located on the server, there is the following workaround.
	
	To allow storage of messages on the Exchange Server, you can configure the POP3
	client for a remote mail configuration. As part of the remote mail
	configuration, you also can configure the client to download copies of the
	message. This configuration allows you to read messages with the many Exchange
	clients and also to delete messages on the server when necessary.
	
	Most POP3 e-mail clients have this configuration option, including Outlook
	Express included with Internet Explorer 4; Internet Mail and News; Windows CE
	Inbox; The Internet Mail Service for Windows Messaging included with Plus! for
	Windows 95, Windows NT Server, and Windows NT Workstation version 4.0; Netscape
	Mail; Eudora Pro; and others.
	
	MORE INFORMATION
	================
	
	Additionally, the Internet Mail Service can be configured as a server for POP3
	clients, but it cannot be a client to POP3 servers. The Internet Mail Service
	uses the SMTP port on port 25 to send and receive Internet mail. Although a POP3
	account can send via SMTP on port 25, a POP3 account retreives mail on the POP3
	port of port 110. The Internet Mail Service does not support this functionality,
	because this violates the original intent of the POP3 protocol.
	
	For more information about configuring POP3 clients for a remote mail
	configuration, refer to the product documentation.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161116 : POP3 Supported Command Set for Exchange Server 5.0
	
	  Q161118 : Troubleshooting POP3 Connections to Internet Mail Server
	
	Additional query words: pop4 imc XCLN oe ie4 imn
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.00
	Issue type        : kbinfo
	
	=============================================================================
	
