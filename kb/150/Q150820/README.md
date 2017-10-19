---
layout: page
title: "Q150820: RAS Service Broadcasts Name Query Every Two Minutes"
permalink: /kb/150/Q150820/
---

## Q150820: RAS Service Broadcasts Name Query Every Two Minutes

	Article: Q150820
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remote Access Service (RAS) queries for the following name every two minutes
	by default:
	
	  JSPNRMPTGSBSSDIR
	
	If you have a RAS server configured to use Microsoft Windows Internet Naming
	Service or Domain Name Server (DNS) resolution, the queries may be sent across
	routers or dial-up lines.
	
	As A result, the following event may be written to the system log throughout the
	initial startup of your RAS set up to receive Transmission Control
	Protocol/Internet Protocol (TCP/IP) dial-in clients:
	
	  Event ID: 20026
	  Source: RemoteAccess
	  Type: Error
	  Description: Remote Access Server Security Failure. A network error has
	  occurred when trying to establish a session with the security agent on
	  LANA x. The error code is the data.
	
	NOTE: x is the LANA number of your network card.
	
	In some cases the Remote Access Server service fails to start.
	
	If you have Routing and Remote Access Serivce (RRAS) installed, the following
	event may be written to the system log during the initial startup if RRAS is set
	up to receive TCP/IP dial-in clients:
	
	Event ID: 20024
	Source: RemoteAccess
	Type: Error
	Description: Remote Access Server Security Failure. A network error has   occurred when trying to establish a session with the security agent on   LANA x. The error code is the data.
	
	NOTE: x is the LANA number of your network card.
	In some cases the RRAS service fails to start and will log the following event in
	the system log:
	
	Event ID: 7024
	Source: RemoteAccess
	Type: Error
	escription: The Routing And Remote Access Service service terminated with service-specific error 1058
	
	CAUSE
	=====
	
	The name JSPNRMPTGSBSSDIR is announced regularly and is a normal occurrence from
	a Windows NT Server or Workstation computer running the Windows NT Remote Access
	Service (RAS).
	
	WORKAROUND
	==========
	
	In some cases, a Windows Internet Naming Service or DNS server may be across a
	dial-up router on the network. This behavior may cause unnecessary traffic
	across these interfaces. A trace from Network Monitor may show queries for the
	name JSPNRMPTGSBSSDIR.
	
	Use one of the following methods to prevent this name query from being
	broadcast:
	
	- Create an LMHOSTS file with the following entry:
	
	  x.x.x.x JSPNRMPTGSBSSDIR #PRE
	
	  where x.x.x.x is an IP address associated with the RAS server's network
	  interface card.
	
	  -or-
	
	- If you are using DNS, create an A record for JSPNRMPTGSBSSDIR in the domain
	  for which the DNS server is authoritative.
	
	  NOTE: The client (resolver) must have the domain name field in
	  TCPIP/DNS/Domain name populated with the domain name that the A record is
	  created in on the DNS server. If there are entries listed in the domain
	  suffix search order of the client, this must be the first domain listed.
	
	MORE INFORMATION
	================
	
	Small Business Server version 4.5 creates an LMHosts file with the IP address of
	your server associated with the name JSPNRMPTGSBSSDIR. If you change the IP
	address of the server, then you must change the IP address in the LMHosts file
	as well.
	
	The following article describes how to change the default IP address of Small
	Business Server:
	
	  Q194562 Change the Default IP Address in Small Business Server
	
	"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :3.5,3.51,4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	
