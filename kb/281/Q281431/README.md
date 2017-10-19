---
layout: page
title: "Q281431: XADM: Logon Failure Event ID 677"
permalink: /kb/281/Q281431/
---

## Q281431: XADM: Logon Failure Event ID 677

	Article: Q281431
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Active Directory Connector (ADC) with Microsoft Exchange Server
	5.5, a logon failure is reported every time the ADC is run. You can find the
	failure in the security event log if auditing for "audit account logon events"
	is enabled for "logon failure."
	
	The security event log shows the following event:
	
	  Event Type: Failure
	  Event Source: Security
	  Event Category: Account Logon
	  Event ID: 677
	  Date: 1/4/2001
	  Time: 1:01:30 PM
	  User: NT AUTHORITY\SYSTEM
	  Computer: ServerName
	  Description:
	
	  Service Ticket Request Failed:
	  User Name: Administrator
	  User Domain: DOMAIN.COM
	  Service Name: LDAP/ExchangeSrvName.domain.com
	  Ticket Options: 0x40810010
	  Failure Code: 7
	  Client Address: 127.0.0.1
	
	STATUS
	======
	
	This event can be safely ignored because this version of Exchange Server is not
	Kerberos-aware and does not register a Service Principal Name (SPN) with the
	Active Directory.
	
	MORE INFORMATION
	================
	
	The error is generated when the ADC attempts the contact the Lightweight
	Directory Access Protocol (LDAP) service on a member server running Exchange
	Server 5.5. The server running the ADC attempts to authenticate against Exchange
	service by requesting a Kerberos ticket for LDAP/myexhangesrv.mydomain.com.
	
	The Microsoft Windows 2000 Kerberos Key Distribution Center (KDC) attempts to
	resolve the Service Principal Name (SPN) to a Windows 2000 server. Exchange
	Server 5.5 is not Kerberos-aware and does not register an SPN with the Active
	Directory. Because an SPN that matches does not exist, the KDC returns an error
	that is logged as the 677 event. The server that is running the ADC falls back
	to NTLM and is able to connect to the LDAP service on the Exchange Server
	computer.
	
	Although it is possible to manually add an SPN for the LDAP server by using
	SETSPN from the Resource Kit, this will cause the ADC to fail.
	
	Manually adding an SPN will cause the 677 events to stop. However, the ADC will
	no longer be able to authenticate to the LDAP service on the Exchange Server
	computer. Because the SPN can be resolved to a server, the KDC will return a
	Kerberos ticket for the target server (the server with the LDAP SPN registered).
	The server that is running the ADC will attempt to use a Kerberos ticket to
	authenticate to the Exchange service. Because Exchange 5.5 is not
	Kerberos-aware, it is not able to validate the user. This occurs even if
	Exchange Server 5.5 is installed on a Windows 2000 member server.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
