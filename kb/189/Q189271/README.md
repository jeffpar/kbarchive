---
layout: page
title: "Q189271: List of Services Needed to Run a Secure IIS Computer"
permalink: /kb/189/Q189271/
---

## Q189271: List of Services Needed to Run a Secure IIS Computer

	Article: Q189271
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following list outlines which services are required, as well as those that
	are NOT required, and those that MAY be required, to run Internet Information
	Server (IIS) version 4.0 on a secure server. Your particular network or system
	configuration can change some of the parameters. For example, some intranets
	require WINS and DHCP.
	
	MORE INFORMATION
	================
	
	The more services running on a computer, the more entry points there may be
	available to malicious attack. A service is a potential entry point because it
	processes client requests. To help reduce this risk, you should disable
	unnecessary system services.
	
	NOTE: This is an abridged version of the contents of the security chapter from
	the Internet Information Server 4.0 Resource Kit.
	
	Required
	--------
	
	- Event Log
	
	- IIS Admin Service
	
	- License Logging Service
	
	- MSDTC
	
	- Protected Storage
	
	- Remote Procedure Call (RPC) Service
	
	- Server
	
	- Windows NT Server or Windows NT Workstation
	
	- Windows NTLM Security Support Provider
	
	- Workstation
	
	- World Wide Web Publishing Service
	
	May Be Required
	---------------
	
	- Certificate Authority (required to issue certificates)
	
	- Content Index (required if using Index Server)
	
	- FTP Publishing Service (required if using FTP service; it's highly
	  recommended that FTP and Web services run on different servers)
	
	- NNTP Service (required if using NNTP Service)
	
	- Plug and Play (recommended, but not required)
	
	- Remote Access Services (required if you use dial-up access)
	
	- RPC Locator (required if doing remote administration)
	
	- Server Service (can be disabled, but required to run User Manager)
	
	- SMTP Service (required if using SMTP Service)
	
	- Telephony Service (required if access is by dial-up connection)
	
	- Uninterruptible Power Supply (UPS) (optional; but it is recommended that you
	  use a UPS)
	
	- Workstation (optional; important if you have UNC virtual roots)
	
	Not Required by Most Installations
	----------------------------------
	
	- Alerter
	
	- ClipBook Server
	
	- Computer Browser
	
	- DHCP Client
	
	- Messenger
	
	- NetBIOS Interface
	
	- Net Logon
	
	- Network DDE & Network DDE DSDM
	
	- Network Monitor Agent
	
	- NWLink NetBIOS
	
	- NWLink IPX/SPX Compatible Transport (not required unless you don't have
	  TCP/IP or another transport)
	
	- Simple TCP/IP Services
	
	- Spooler
	
	- TCP/IP NetBIOS Helper
	
	- WINS Client (TCP/IP)
	
	Additional recommendation: Do not install application software or development
	tools on your server.
	
	Additional query words: safety protection safe hacks hack overview guide guidelines guideline minimum requirements suggested suggest suggestion attacks protected www
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
