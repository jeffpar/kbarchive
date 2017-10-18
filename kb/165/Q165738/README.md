---
layout: page
title: "Q165738: XWEB: POP3 Clients Not Authenticated by Exchange Server"
permalink: kb/165/Q165738/
---

## Q165738: XWEB: POP3 Clients Not Authenticated by Exchange Server

	Article: Q165738
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you are using Microsoft Windows 95 and Microsoft
	Internet Explorer. When you start the Internet Explorer Internet Mail client,
	the Internet Mail inbox appears. When you click the Send and Receive icon, the
	authentication dialog box appears and requests your logon information. When you
	type the requested information, you are not logged on to Microsoft Exchange
	Server. However, you can telnet into port 110 of the Exchange Server and the
	following message appears:
	
	  +OK Welcome to NT Example POP3 server.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- On the computer running Microsoft Exchange Server, ensure that the following
	  services are not started in the Control Panel Services tool:
	
	   - POP3 Server services
	
	   - Local Mail Delivery Agent service
	
	   - SMTP Server services
	
	  If the above services are started, stop the services, set the services to
	  manual, and then restart the server.
	
	MORE INFORMATION
	================
	
	The above services are included with the Windows NT Server 4.0 Resource Kit as
	Mail Server (MailSrv) and are not part of Microsoft Exchange Server version 5.0
	or later. For more information on MailSrv, please refer to the "Windows NT
	Server Internet Guide" Chapter 7 Internet Tools pages 147-154 included with the
	Windows NT Server 4.0 Resource Kit.
	
	The POP3 Server Services service will claim port 110 on boot up if the service is
	set to automatically initialize. This in turn will not allow the Microsoft
	Exchange server to listen to port 110.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WinNT:5.0
	
	=============================================================================
	
