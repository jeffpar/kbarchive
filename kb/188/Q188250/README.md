---
layout: page
title: "Q188250: XFOR: IRIX Netscape POP3/IMAP4 Client Cannot Submit SMTP Mail"
permalink: /kb/188/Q188250/
---

## Q188250: XFOR: IRIX Netscape POP3/IMAP4 Client Cannot Submit SMTP Mail

{% raw %}

	Article: Q188250
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IRIX(SGI) Netscape Post Office Protocol 3 (POP3) or Internet
	Mail Access Protocol 4 (IMAP4) client to submit a Simple Mail Transfer Protocol
	(SMTP) message to an Exchange Server computer, the message may be rejected or
	not leave the Outbox. This problem occurs only if one of the following client
	restrictions is enabled on the Connections tab of Internet Mail Server
	properties:
	
	- Clients can only submit if homed on this server
	
	- Clients can only submit if authentication account matches the SMTP submission
	  address
	
	Although the authenticated connections are accepted from the same client, and
	retrieval of messages through POP3 or IMAP4 may work, the application log of the
	Event Viewer may show the following error message:
	
	  Event ID: 4151
	  Source:  MSExchnageIMC
	  Category:  SMTP Interface Events
	  Description:
	  An inbound mail message was not accepted on <Exch.MyDomain.com>
	  because the authentication account did not have permission to use the
	  originator address on the message.
	
	CAUSE
	=====
	
	The problem occurs because the Netscape client adds the RFC-822 header "SENDER",
	populated by the user's logon name from the foreign system. This does not match
	the authentication account, which was in the format: Ntdomain\Ntaccount, and
	Exchange Server rejects the submission. This occurs if either or both of the
	above client restrictions are enabled.
	
	WORKAROUND
	==========
	
	To resolve this problem, edit the Preferences.js file located in the hidden
	directory ".netscape", in the user's home directory on the IRIX workstation.
	This is a Netscape preferences file that instructs the Netscape client whether
	to send the SENDER header information. Editing this file can suppress sending
	this header information.
	
	To edit this file, perform the following steps:
	
	1. Open the Preferences.js file using a plain text editor, and verify that the
	  following entry exists:
	
	        Pref("mail.suppress_sender_header", true);
	
	2. If the entry is set to "false", edit the entry so that it appears as in step
	  1 above.
	
	If you are not able to edit this file, there is an alternate workaround. (NOTE:
	This workaround retains the client restrictions for all hosts except those
	specified in the workaround):
	
	1. In Microsoft Exchange Administrator, view the Internet Mail Service
	  properties.
	
	2. Click the Connections tab, Click Accept connections, and then click Hosts.
	
	3. Click Add, and type the IP address and subnet mask of the IRIX host using
	  Netscape. If you want authentication, specify it here.
	
	4. Select the "This host is a relay server" check box.
	
	5. Stop and start the Internet Mail Service.
	
	This workaround must be performed for each IRIX host that will be submitting SMTP
	mail to the Exchange Server computer with the Netscape Communicator client.
	
	Note that setting the IRIX host as a relay server will override the security
	settings in the Connections property sheet.
	
	MORE INFORMATION
	================
	
	The SMTP protocol log shows successful authentication by the Exchange Server
	computer and proceeds through "354 Send data", at which point the Exchange
	Server computer will issue the following message:
	
	  554 Originator address does not match authentication credentials
	
	The session then terminates without accepting the message.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
