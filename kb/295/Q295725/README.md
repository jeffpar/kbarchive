---
layout: page
title: "Q295725: Receiving Duplicate Inbound SMTP Messages"
permalink: kb/295/Q295725/
---

## Q295725: Receiving Duplicate Inbound SMTP Messages

	Article: Q295725
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user receives an exact copy of the same inbound message over and over. Each
	new duplicate message is received at a consistent interval. This continues for
	several hours and then stops suddenly. Several of these "runs" of duplicate
	messages can occur at the same time and can affect multiple users.
	
	CAUSE
	=====
	
	The Cisco PIX firewall appliance uses an SMTP protocol filtering feature called
	Mailguard. Mailguard blocks all Extended Simple Mail Transfer Protocol (ESMTP)
	commands and allows only seven basic SMTP commands to pass.
	
	The Mailguard feature is intended to help protect weakly secured mail servers. If
	a server is already well configured, and has the latest security patches and
	fixes from the SMTP vendor, Mailguard is not required.
	
	There is a known issue with Mailguard that causes duplicate inbound messages. To
	check for the presence of Mailguard, from a workstation on the internet open a
	telnet session to port 25 of the Exchange IMS. You should see something similar
	to the following:
	
	  220
	  *********0*****************************************************************
	  ************2*************
	
	Now issue the EHLO command. You may see the following:
	
	  ehlo
	  500 Unrecognized command
	
	In a typical SMTP session, a sending host marks the end of the DATA portion of
	the message with CRLF.CRLF on a line by itself. The receiving host acknowledges
	receipt of the message data by issuing a 250 OK response back to the sending
	host. The sending host replies with the QUIT command. The normal response from
	the receiving host would be 221 closing connection. Once the sending host
	receives this last response, the session is complete.
	
	If for any reason the CRLF.CRLF terminating string is broken into separate
	packets during transmission, Mailguard rejects it and does not pass it to the
	mail server. The connection eventually times out and the message queues for
	delivery on the receiving host. Because the sending host never receives
	confirmation of receipt, it assumes delivery failure. It re-queues the message
	for attempted delivery at a later time. This goes on repeatedly until the
	message time-out on the sending host is exhausted.
	
	Further testing with SMTP Protocol Logging can be used to pinpoint the failure in
	a message session. From a sample captured SMTP log below, observe the missing
	response of the receiving host to the CRLF.CRLF command.
	
	2/7/01 5:01:20 PM : A connection was accepted from mail.domain1.com
	2/7/01 5:01:21 PM : <<< HELO mail.domain1.com
	2/7/01 5:01:21 PM : >>> 250 OK
	2/7/01 5:01:21 PM : <<< MAIL From:<user@domain1.com>
	2/7/01 5:01:21 PM : >>> 250 OK - mail from <user@domain1.com>
	2/7/01 5:01:22 PM : <<< RCPT To:<user@domain2.com>
	2/7/01 5:01:22 PM : >>> 250 OK - Recipient <user@domain2.com>
	2/7/01 5:01:23 PM : <<< DATA
	2/7/01 5:01:23 PM : >>> 354 Send data. End with CRLF.CRLF
	2/7/01 5:05:44 PM : A connection was accepted from mail.domain3.com
	
	RESOLUTION
	==========
	
	To resolve this issue, turn off Mailguard.
	
	Cisco has corrected this issue in later software releases. Customers who do not
	want to turn off Mailguard must contact Cisco for the latest updates to the PIX
	operating system.
	
	Cisco has determined this to be an issue in certain versions of PIX operating
	software. This issue is linked to bug: CSCds90792. Registered users of Cisco
	Connection Online (CCO) have access to release notes for this bug in Cisco's
	Software Bug Toolkit: http://www.cisco.com/kobayashi/bugs/bugs.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	Mailguard allows connections to an e-mail host through Transport Control
	Protocol (TCP) port 25 only. It logs all Simple Mail Transfer Protocol (SMTP)
	activity and allows only the minimum SMTP server commands found in Request for
	Comments (RFC) 821, Section 4.5.1.
	
	PIX Firewalls are manufactured by Cisco, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
