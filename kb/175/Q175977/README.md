---
layout: page
title: "Q175977: XADM: Install Exchange Server &amp; Client 5.0 w/ Citrix WinFrame"
permalink: /kb/175/Q175977/
---

## Q175977: XADM: Install Exchange Server &amp; Client 5.0 w/ Citrix WinFrame

	Article: Q175977
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Citrix WinFrame is a multi-user Windows application server based on Windows NT
	3.51 under license from Microsoft which supports enterprise application
	deployment using a thin client architecture. This network-centric approach
	includes Citrix ICA-based universal client software that works in conjunction
	with WinFrame application server software. Thin client architecture provides the
	high-performance and universal application access needed by users while the
	application server offers I/S professionals the economic benefits of
	single-point administration.
	
	ICA (Independent Computing Architecture) is a general-purpose presentation
	services protocol for Microsoft Windows, which allows an application's user
	interface to execute with minimal resource consumption on a client device, while
	the application logic executes on ICA-servers. With the appropriate ICA client
	software, users can access standard 16- and 32-bit Windows applications running
	on a remote ICA-based server by launching them from Web-based HTML pages or from
	Windows desktops over dial-up, LAN, WAN, or Internet connections.
	
	Both Microsoft Exchange Server and Microsoft Exchange Client can be run on a
	Citrix WinFrame server. In a standard configuration, Exchange Server is
	installed and runs as a service on primary domain controller (PDC), which can be
	a WinFrame server or a computer running Microsoft Windows NT 4.0. The Exchange
	Client is installed on all other WinFrame servers. Users connect to the WinFrame
	servers and run Exchange Client, which then accesses Exchange Server.
	
	Software requirements for running Exchange Server and Exchange Client on a
	WinFrame server are:
	
	- Winframe Version 1.6 with Service Pack 5 or WinFrame version 1.7
	
	- Microsoft Exchange Server and Client version 5.0
	
	MORE INFORMATION
	================
	
	For further instructions on installing and configuring Exchange Server and
	Exchange Client 5.0, see the application note, "Microsoft Exchange Server
	(Enterprise Edition) Version 5.0 and Microsoft Exchange Client Version 5.0" on
	the following Internet site:
	
	  http://www.citrix.com/technology/msexch50_wf16.htm
	
	For more information on Citrix Winframe, see the following articles in the
	Microsoft Knowledge Base or query on the word "Citrix."
	
	  Q159563 XCLN: Citrix WinFrame FAQ
	
	  Q155001 Description of Citrix ICA Client
	
	WinFrame is manufactured by Citrix, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
