---
layout: page
title: "Q326089: HOW TO: Enable Kerberos on a Non-DC for IIS Web Applications"
permalink: /kb/326/Q326089/
---

## Q326089: HOW TO: Enable Kerberos on a Non-DC for IIS Web Applications

	Article: Q326089
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 02-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Enable Delegation on Domain Controllers
	   - Test FQDN Name Resolution on IIS
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to enable Kerberos on an Internet
	Information Services (IIS) computer that is not running as a domain controller.
	By default, domain controllers have Kerberos enabled to do many of the security
	functions in the Active Directory domains. However, IIS member servers are not
	enabled to communicate by using the faster, more secure Kerberos protocol.
	
	Enable Delegation on Domain Controllers
	---------------------------------------
	
	1. Click Start, point to Programs, click Administrative Tools, and then click
	  Active Directory Users and Computers.
	
	2. Under Computers Organizational Unit, click to select the name of the IIS
	  server.
	
	3. Right-click the server name, and then click Properties to open the computer
	  properties for the IIS computer.
	
	4. On the General tab, click to select Trust Computer for Delegation, and then
	  click Apply.
	
	NOTE: Enabling your IIS server for delegation does introduce possible security
	concerns, as noted in the warning on the General tab. This delegation permits
	services that run in the context of the system account to request information
	from remote services. This is enabled because Kerberos is a mutual
	authentication protocol, that is, it verifies the client and server
	credentials.
	
	Test FQDN Name Resolution on IIS
	--------------------------------
	
	For Kerberos to work, all communication must use a fully qualified domain name
	(FQDN). To make sure that IIS can be reached with an FQDN, follow these steps:
	
	1. On the domain controller, open a command prompt. To do this, click Start,
	  click Run, type "CMD" (without the quotation marks), and then click OK.
	
	2. At the command prompt, type "ping <fqdn>" (without the quotation
	  marks), and then press ENTER. For example:
	
	  ping webserver01.mydomain.ms.local
	
	If the operation is successful, the system replies with a readout that states
	that the system successfully communicated during all 5 attempts.
	
	If these steps do not work (that is, if the ping operation is unsuccessful), use
	the articles that are listed in the "References" section to troubleshoot network
	Domain Name System (DNS) issues. For Kerberos to work as designed, DNS
	resolution must be working correctly on your network.
	
	REFERENCES
	==========
	
	For additional information about DNS troubleshooting, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q300986 HOW TO: Diagnose and Test TCP/IP or NetBIOS Network Connections in
	  Windows 2000
	
	  Q316341 HOW TO: Troubleshoot DNS Name Resolution on the Internet in Windows
	  2000
	
	
	For additional information about Kerberos, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q287537 Using Basic Authentication to Generate Kerberos Tokens
	
	  Q283201 HOWTO: Use Delegation in Windows 2000 with COM+
	
	  Q266080 Answers to Frequently Asked Kerberos Questions
	
	  Q282189 Error 0x800706D5 from ASP When Calling OOP Component with Delegation
	  Security Level
	
	  Q314404 HOWTO: Use Kerberos with the ServerXMLHTTP Component in MSXML
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
