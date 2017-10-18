---
layout: page
title: "Q304897: XIMS: Microsoft SMTP Servers May Seem to Accept and Relay E-Mail"
permalink: kb/304/Q304897/
---

## Q304897: XIMS: Microsoft SMTP Servers May Seem to Accept and Relay E-Mail

	Article: Q304897
	Product(s): Microsoft Exchange
	Version(s): 2000,4.0,5.0,5.5,SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Enterprise Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows XP Professional SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use some third-party tests to test Microsoft Simple Mail Transfer
	Protocol (SMTP) servers for relay, the SMTP server may seem to fail the test and
	your Microsoft SMTP product may seem to be open for relay, even though it is
	not.
	
	Common tests exist that you can use to test SMTP servers for relay. You can use
	third-party Web sites and tools, for example:
	
	  http://www.abuse.net/relay.html
	
	  -and-
	
	  http://mail-abuse.net
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	At first, your SMTP server may seem to fail some of these tests, and your
	Microsoft SMTP product may seem to be open for relay. However, after you examine
	the server more closely, you see that your Microsoft SMTP product is not open
	for relay.
	
	CAUSE
	=====
	
	Every TO or FROM address in an SMTP protocol conversation contains two parts:
	the local part (or mailbox), and the domain part. If the domain part (in other
	words, the part immediately following the at sign [@]) is not specified, the
	e-mail message is assumed to be local. In fact, some Microsoft SMTP products
	append the local domain because some users configure their SMTP clients to use
	only a user name as the e-mail address. By adding the default local domain, the
	Microsoft server can add what is most likely to be the default to reduce the
	support cost.
	
	This behavior occurs because Microsoft SMTP products do not perform a directory
	lookup before accepting SMTP e-mail messages for delivery. Microsoft SMTP
	products only check the recipient's domain to see if it is a local or explicitly
	allowed domain. If the recipient's domain is not a local or allowed domain, the
	server responds with an error message that is similar to:
	
	  550 5.7.1 Relaying prohibited
	
	All that is required to prevent relay is a verification that the domain part of
	the TO address is local. Checking the mail server's directory to see if the
	recipient is valid is an option, but is not required. If a mail server accepts a
	message, and then later decides that it cannot deliver the message, the server
	must generate a non-delivery report (NDR). (See the Request for Comments [RFC]
	2821 document, section 3.7 and the RFC 1123 document, section 5.2.7.) The
	Microsoft SMTP products comply with this requirement. The Microsoft SMTP server
	seems to accept the message for relay, but later the server does not deliver the
	message and generates an NDR.
	
	MORE INFORMATION
	================
	
	If you must have the ability to perform directory lookups during the SMTP
	protocol conversation, you can write a Windows 2000 SMTP protocol event sink.
	
	For additional information, see the following MSDN Platform SDK SMTP Server
	Events Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/smtpevt/html/_smtpevt_protocol_event_interfaces.asp
	  (http://msdn.microsoft.com/library/default.asp?url=/library/en-us/smtpevt/html/_smtpevt_protocol_event_interfaces.asp)
	
	The recommended RFC-compliant response is a response that is similar to:
	
	  550 5.1.1 <user>@<northwindtraders>.com... User unknown
	
	Microsoft chose not to perform the directory lookups during the SMTP protocol
	conversation for the following reasons:
	
	- If you return a 5xx error to a fake user, a user who is sending bulk,
	  unsolicited commercial e-mail messages (spam or UCE) to your server knows
	  instantly which addresses are real and which are fake. If that user plays a
	  dictionary of names through the SMTP protocol, that user can easily harvest a
	  list of valid e-mail addresses. This may also be a security risk to your
	  local users because user names are often the same as e-mail addresses.
	
	- A malicious user can use the FROM address to gain unauthorized access into a
	  system (spoof), and then use the victim's server to send NDRs to the intended
	  recipient. This attack only hits this server with as much data as the
	  attacker sends to it. In other words, if the malicious user wants to send 1
	  megabyte (MB) of data to a third party, the malicious user must spend 1 MB of
	  his or her own bandwidth to send 1 MB of data to the SMTP server. Typically,
	  such a malicious user tries to send 1 MB of data, but still cause tens or
	  hundreds of MBs of data to hit a victim or set of victims throughout the
	  Internet. The best way to stop this behavior would be to validate FROM
	  addresses across all of the Internet. However, there is no standard to
	  validate FROM addresses across the Internet; therefore, the best way to deal
	  with this behavior is to look at message headers.
	
	- If a directory lookup is performed during the SMTP protocol conversation, the
	  SMTP protocol may be much slower. At the time of this article's publication,
	  Microsoft is operating under the premise that the SMTP server should be as
	  fast as possible to prevent blockages of SMTP messages on the Internet or on
	  desktop SMTP clients. If the directory is overloaded, the client may find
	  that the server is too slow and the client may receive an error message. In
	  some situations, the directory may also be unavailable or the relay of a
	  particular domain may be required, but a copy of the directory may not be
	  available (for example, in a ISP hosting environment).
	
	General Relay Information
	-------------------------
	
	Relay is a situation in which an SMTP client can use an SMTP server to forward
	e-mail messages to a remote (in other words, non-local) domain. Relay is not
	inherently bad, because SMTP was designed for this purpose (see the RFC 2821
	document, sections 2.1 and 3.7).
	
	However, if relay is not controlled (an uncontrolled host is known as an "open
	relay" host), a malicious user might potentially use relay to send bulk,
	unsolicited commercial e-mail messages (spam or UCE). By bouncing these
	unsolicited e-mail messages off the intermediate host, the malicious user
	obfuscates his or her identity. This also ties up resources on the relay host,
	which may keep the relay host from sending valid e-mail messages. In particular,
	most users who send such unsolicited e-mail messages can send a single message
	to an extraordinary number of recipients without using their own bandwidth to do
	so.
	
	Relay Test 1
	------------
	
	This is the standard test for SMTP relay. An SMTP client should not be allowed to
	relay in this fashion unless the administrator has specifically allowed it, or
	unless the client first authenticates:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<spamtest@contoso.net>
	  <<< 250 2.1.0 spamtest@contoso.net....Sender OK
	  >>> RCPT TO:<relaytest@contoso.net>
	  <<< 550 5.7.1 Unable to relay for relaytest@contoso.net
	
	Relay Test 2
	------------
	
	This is basically the same test, but the originator is a local user instead of a
	user in a remote domain. Because FROM addresses are commonly used to gain
	unauthorized access into a system (spoof), no server should be tricked by this:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<spamtest>
	  <<< 250 2.1.0 spamtest@northwindtraders.com....Sender OK
	  >>> RCPT TO:<relaytest@contoso.net>
	  <<< 550 5.7.1 Unable to relay for relaytest@contoso.net
	
	Relay Test 3
	------------
	
	This test is for a NULL or blank FROM envelope address. NDRs and other
	notifications have a NULL FROM envelope address. However, notifications should
	still not be passed through unless the domain in the TO address is a local
	domain:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<>
	  <<< 250 2.1.0 <>....Sender OK
	  >>> RCPT TO:<relaytest@contoso.net>
	  <<< 550 5.7.1 Unable to relay for relaytest@contoso.net
	
	Relay Test 4
	------------
	
	This test is the same as relay test 2, but the local domain is explicitly added
	by the client. An SMTP server should not be fooled by this:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<spamtest@northwindtraders.com>
	  <<< 250 2.1.0 spamtest@northwindtraders.com....Sender OK
	  >>> RCPT TO:<relaytest@contoso.net>
	  <<< 550 5.7.1 Unable to relay for relaytest@contoso.net
	
	Relay Test 5
	------------
	
	This test is also the same as relay test 2, but the local IP address of the
	server is added in an attempt to trick the server. Although this format of
	addressing is generally accepted, the server should not accept relay to a remote
	domain. In various other tests that try "localhost" or the Domain Name System
	(DNS) name of the server in the FROM address, the server should not be fooled by
	the FROM address:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<spamtest@[10.10.10.10]>
	  <<< 250 2.1.0 spamtest@[10.10.10.10]....Sender OK
	  >>> RCPT TO:<relaytest@contoso.net>
	  <<< 550 5.7.1 Unable to relay for relaytest@contoso.net
	
	Relay Test 6
	------------
	
	This test is specifically for older UNIX-based servers that route e-mail messages
	by appending the local domain and changing the at sign (@) symbol to a percent
	symbol (%). The server then relays the mail. This Microsoft product accepts the
	mail, and appears to fail the test. Because a percent symbol (%) is a valid
	character in the local-part, this product chooses to accept the message and send
	an NDR if the directory lookup fails. Microsoft SMTP products are not vulnerable
	to this type of relay because the message is not forwarded and an NDR is sent:
	
	  
	
	  >>> RSET
	  <<< 250 2.0.0 Resetting
	  >>> MAIL FROM:<spamtest>
	  <<< 250 2.1.0 spamtest@northwindtraders.com....Sender OK
	  >>> RCPT TO:<relaytest%contoso.net>
	  <<< 250 2.1.5 relaytest%contoso.net@northwindtraders.com
	
	Relay Test 7
	------------
	
	This is another variation of relay test 6. This Microsoft product accepts the
	mail and appears to fail the test. Because the quotation mark character (") is a
	valid character in the local part, this product chooses to accept the message
	and send an NDR if the directory lookup fails. Microsoft SMTP products are not
	vulnerable to this type of relay because the message is not forwarded and an NDR
	is sent.
	
	  
	
	  >>> mail from: <spamtest>
	  <<< 250 2.1.0 spamtest@northwindtraders....Sender OK
	  >>> rcpt to: <"nobody@mail-contoso.org">
	  <<< 250 2.1.5 "nobody@mail-contoso.org"@northwindtraders.com 
	
	If your SMTP server fails one or more of these tests, especially relay tests 6
	and 7, that may or may not mean that the server is an open relay. Some systems
	(including Microsoft Exchange and Microsoft Windows 2000 SMTP) seem to accept
	relay mail, but then reject the messages internally instead of delivering them.
	However, you cannot determine with certainty whether or not the server is really
	an open relay without sending a real test message.
	
	When you run relay tests 6 and 7 against an Exchange 2000 server, because the
	tests generate a message to an invalid recipient, NDRs that are similar to the
	following are received by the mailbox that is specified in Exchange System
	Manager, in the properties of the default SMTP virtual server on the Messages
	tab, in the "Forward all mail with unresolved recipients to host" box:
	
	  
	
	  Your message did not reach some or all of the intended recipients. 
	
	 Subject: Relay Test 6 
	 Sent: 3/22/2002 5:47 PM 
	
	  The following recipient(s) could not be reached: 
	
	 relaytest%contoso.net@northwindtraders.com on 3/12/2002 12:30 PM
	 The e-mail account does not exist at the organization this message was sent to. Check the e-mail address, or contact the recipient directly to find out the correct address.
	 <server.northwindtraders.com #5.1.1>
	
	  -or-
	
	  Your message did not reach some or all of the intended recipients. 
	
	 Subject: Relay Test 7 
	 Sent: 3/13/2002 12:30 PM 
	
	  The following recipient(s) could not be reached: 
	
	  "nobody@mail-contoso.org"@northwindtraders.com on 3/13/2002 12:30 PM
	  The e-mail account does not exist at the organization this message was sent to. Check the e-mail address, or contact the recipient directly to find out the correct address.
	  <server.northwindtraders.com #5.1.1>
	
	You can use these NDRs to prove that the messages are not relayed.
	
	For additional information about what to do if you are running Exchange Server
	5.5 and you have to secure your server against open relay, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q196626 XFOR: Restricting Routing in the Internet Mail Service
	
	If you are running Microsoft Exchange 2000, by default, relay requires
	authentication. For additional information, see the Exchange 2000 Help.
	
	
	Additional query words: abuse orbs look-up msn hotmail mail-abuse.org ordb.org osirusoft.com maps
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinXPPro kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbExchange2000Search kbWinAdvServSearch kbExchange2000EntServ kbWinXPProSearch kbWinXPSearch kbWinXPProSP1
	Version           : :2000,4.0,5.0,5.5,SP1
	Issue type        : kbprb
	
	=============================================================================
	
