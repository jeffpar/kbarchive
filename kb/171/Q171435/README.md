---
layout: page
title: "Q171435: XFOR: POP3 Logon Attempt Fails with Event 11202"
permalink: /kb/171/Q171435/
---

## Q171435: XFOR: POP3 Logon Attempt Fails with Event 11202

	Article: Q171435
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	POP3 users are unable to log on to a Microsoft Exchange Server computer. When
	the logon attempt fails, an event 11202 is logged in the application event log.
	
	CAUSE
	=====
	
	This problem occurs when the Microsoft Exchange Server service account does not
	have the <Act as part of the operating system> Windows NT user right. This
	only happens if the client tries to use basic (clear text) authentication.
	
	Below is an example of the type of event you will see in the Event Viewer:
	
	  Event ID: 11202
	  Source: MSExchangePOP3
	  Type: Failure Audit
	  Description: Logon attempt from to has failed: HrLookupCredentials()
	  call failed with error: A required privilege is not held by the client.
	
	You can use telnet to verify that the Microsoft Exchange Server service account
	is missing the <Act as part of the operating system> right. To test this
	with telnet, perform the following steps:
	
	1. On Windows NT or Windows 95, open a command prompt.
	
	2. At the command prompt, type <telnet [name of computer running Microsoft
	  Exchange Server] 110>.
	
	You will get a connection to the computer running Microsoft Exchange Server. The
	server will issue a greeting banner that may appear as:
	
	   +OK Microsoft Exchange POP3 Server version 5.0.1457.10 ready
	
	The sample telnet session below demonstrates how to verify that the Microsoft
	Exchange Server computer is missing the required right. In this sample, lines
	starting with S> are sent by the server and lines starting with C> were
	sent by the client (telnet).
	
	  S> +OK Microsoft Exchange POP3 Server version 5.0.1457.10 ready
	  C> USER <userid>
	  S> +OK
	  C> PASS <password>
	  S> -ERR A required privilege is not held by the client.
	
	If the Microsoft Exchange Server service account does not have the <Act as
	part of the operating system> user right, an error will be returned after the
	PASS command.
	
	RESOLUTION
	==========
	
	To grant the appropriate right to the Microsoft Exchange Server service account,
	perform the following steps:
	
	1. Start User Manager for Domains.
	
	2. From the Policies menu, select User Rights.
	
	3. Select the Show Advanced User Rights check box.
	
	4. From the list of rights, select Act as part of the operating system.
	
	5. Select Add.
	
	6. Select the Show Users button.
	
	7. Select the Exchange Server service account.
	
	8. Click Add.
	
	9. Click OK until you have completely exited all dialog boxes.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
