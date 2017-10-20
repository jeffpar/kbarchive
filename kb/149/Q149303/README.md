---
layout: page
title: "Q149303: TN3287 Support Added to the TN3270 Server"
permalink: /kb/149/Q149303/
---

## Q149303: TN3287 Support Added to the TN3270 Server

{% raw %}

	Article: Q149303
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Support for TN3287 clients has been added to Microsoft TN3270 Server.
	
	STATUS
	======
	
	Support for TN3287 has been added to the TN3270 Server as a hotfix to SNA Server
	2.11 Service Pack 1. This update is available on request from Microsoft.
	
	MORE INFORMATION
	================
	
	TN3287 provides a different protocol for accessing printer clients, but there
	are no changes to the TN3270 configuration. That is, if you have a TN3270 LU
	configured to support printer clients it will support both TN3270E and TN3287
	clients. So, when you configure the TN3270 Server, no special configuration is
	required for TN3287 clients
	
	RFC 1646 contains the following text on TN3287:
	
	  The purpose of the TN3287 protocol is to provide a general IBM 3270 host
	  printer communications facility. Its primary goal is to allow a method of
	  connecting printer devices and printer-oriented processes to each other. This
	  protocol will allow a TN3270 Client to process 3287 print data streams.
	
	  The TN3287 Client is a TN3270 client created specifically to print mainframe
	  3270 print data. The client emulates the IBM device type that it identifies
	  itself to the TN3270 server as, in this case, an IBM 3287 model 1 type
	  printer. The design of this printer protocol is aligned with the way printing
	  occurs in the IBM host and how 3270 printers function. These printer
	  extensions DO NOT support a 3270 printer client that cannot accept both types
	  LU1 and LU3 printer streams.
	
	Support for the TN3287 data stream requires that both sides:
	
	- Are able to exchange binary data.
	
	- Can establish the agreement between client and server on the terminal type
	  that will be used.
	
	- Agree to use the TELNET IAC EOR as a delimiter for inbound and outbound
	  TN3287 data streams
	
	This implementation requires the options: TERMINAL-TYPE and BINARY be
	successfully negotiated between the Client and Server before processing of any
	print data streams. The LU type is determined by the bind from the mainframe
	application. The server, when bound, must remember LU 1 or LU 3 type. The server
	will automatically unbind the session upon receipt of a TELNET CLOSE command.
	The printer will be reported to VTAM as powered down until a new TELNET
	connection is established.
	
	Additional query words: prodsna sp1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
