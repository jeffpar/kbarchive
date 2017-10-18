---
layout: page
title: "Q217388: XCON: IMAP4 Referral Support"
permalink: kb/217/Q217388/
---

## Q217388: XCON: IMAP4 Referral Support

	Article: Q217388
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains IMAP referral as it relates to Microsoft's current IMAP
	clients and Exchange Server, and future plans for these products.
	
	IMAP referral is the process where, initially, an IMAP client issues a logon
	command to an IMAP server that is not the IMAP client's home server. The IMAP
	server passes the client's logon command to another IMAP server that can
	authenticate the client. IMAP referrals happen behind the scenes and are
	transparent to the user.
	
	Exchange Server version 5.5 supports referrals, but not completely. You will be
	referred to the correct server, but you will not be able to retrieve mail. For
	automatic referrals to work properly, Exchange Server computers that will
	participate in this referral "scheme" must be configured to do directory
	replication amongst themselves. After the Exchange Server computers have
	replicated successfully, all IMAP logon requests will be "referred" to the
	appropriate IMAP server by means of a directory lookup.
	
	The long-term plan is to have Exchange Server be a "front-end" for the referral
	for non-supporting clients, meaning that a single properly configured Exchange
	Server computer would transparently handle the referral for the non-referral
	IMAP clients. At this time, front-end referral functionality is not available in
	Exchange Server 5.5 and earlier versions, but will be included in the next
	release of Exchange Server.
	
	Unfortunately, Post Office Protocol 3 (POP3) does not have the ability to do
	referral request and responses. Also, Outlook Express and other Microsoft IMAP
	clients do not support referrals and are not expected to support referrals in
	the future release.
	
	MORE INFORMATION
	================
	
	Below are some instructions on the protocol commands that you can use in a
	telnet session to see if the IMAP server supports referrals:
	
	1. In Windows NT 4.0, click Start, and then click Run.
	
	2. In the Open text box, type "telnet <SECOND> 143" (without the quotation
	  marks), and press ENTER.
	
	  NOTE: <SECOND> represents the name of the second server; do not include
	  the angle brackets (<>).
	
	  You should see a new window appear with a banner that looks similar to the
	  following:
	
	  * OK Microsoft Exchange IMAP4rev1 server version 5.5.1960.6 (reedlm4.com)
	  ready
	
	3. On the Terminal menu, click Preferences. Make sure the Local Echo check box
	  is enabled, and then click OK.
	
	4. At the prompt, type "? login <NTdomain>/<domain
	  userID>/<Exchange Alias> <password>" (without the quotation
	  marks), and press ENTER. For example, if your Windows NT domain is DOMname,
	  your domain user is UserN, your Exchange alias is AliasN, and your password
	  is PASSword, then you would type:
	
	  ? login DOMname/UserN/AliasN PASSword
	
	NOTE: The the direction of the slashes is very important; the question mark,
	followed by a space at the beginning of the line is also important. Backspacing
	is not allowed; if you make a mistake, you have to press ENTER, and start a new
	line.
	
	5. The response you will get will be something like:
	
	  ? OK [REFERRAL imap://redmond%2Freedl%2Fimapf;AUTH=*@reedlm1.reedlm1.com]
	  LOGIN completed
	
	6. At this point, you are logged onto the other IMAP server. When you issue any
	  commands, such as ? Select Inbox, to enter into your Inbox, you may receive
	  the following message:
	
	  NO There is no replica for that mailbox on this server.
	
	7. You can log out of the telnet connection by typing "? logout" (without the
	  quotation marks) at the command prompt, and pressing ENTER.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
