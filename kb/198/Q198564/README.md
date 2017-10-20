---
layout: page
title: "Q198564: Internet Security for POP3, IMAP4, LDAP, SMTP, &amp; NNTP"
permalink: /kb/198/Q198564/
---

## Q198564: Internet Security for POP3, IMAP4, LDAP, SMTP, &amp; NNTP

{% raw %}

	Article: Q198564
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to make a Secure Socket Layer (SSL) connection to an Exchange
	Server 5.0 or 5.5 computer through POP3, IMAP4, LDAP, SMTP, or NNTP, the
	following pop-up error message may be displayed on the mail client:
	
	  The server you are connected to is using a security certificate that does not
	  match its Internet address, do you want to continue using this server?
	  YES or NO
	
	CAUSE
	=====
	
	The client verifies that the server certificate is from a certifying authority
	and then uses the certificate to send a message to authenticate the server (to
	verify it is who it claims to be). If the server does not pass the
	authentication process, the client will typically inform the user the server is
	not who it claims to be.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Check the Internet Mail Server name within the Internet Mail properties of
	  the mail client.
	
	2. Check this name against the mail servers host name that is registered on the
	  Internet.
	
	3. After these two names have been verified and are consistent, type the Key
	  Manager applet on the Exchange server, and then select the certificate
	  assigned to the protocol being used. Notice the Common Name that has been
	  assigned on the right panel. This name MUST match its host name, which in
	  turn, will match its registered name on the Internet and the Internet Mail
	  Server name defined within the mail client's profile.
	
	If the two names do not match, then perform the following steps:
	
	1. Start the Key Manager applet.
	
	2. Select the appropriate protocol.
	
	3. Delete the previous certificate.
	
	4. Right-click on protocol, and then click Create New Key.
	
	5. Follow all the menus making certain that the Common Name is consistent
	  between its registered name, host name, and the name being referenced within
	  the mail client, (that is, mail.microsoft.com).
	
	6. After you complete the previous step, select Default as the Server
	  Connection.
	
	7. Select Computers in the upper left-hand corner and Commit Changes Now.
	
	MORE INFORMATION
	================
	
	When generating a certificate, the user must define a Common Name, which is the
	fully qualified domain name used for DNS lookups of the server (such as
	mail1.microsoft.com). This information is used by mail clients to identify an
	e-mail domain. If you change this name within a DNS server, then a new
	certificate must be created.
	
	For more information on protocol authentication, please see the following
	Microsoft Knowledge Base article:
	
	  Q175440 XFOR: Protocol Authentication on Exchange Server
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
