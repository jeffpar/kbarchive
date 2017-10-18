---
layout: page
title: "Q262945: XFOR: Non-Delivery Report: 554 Mailbox Is Not Local"
permalink: kb/262/Q262945/
---

## Q262945: XFOR: Non-Delivery Report: 554 Mailbox Is Not Local

	Article: Q262945
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send a Simple Mail Transfer Protocol (SMTP) message to the Internet
	Mail Service in Microsoft Exchange Server, you may receive the following
	non-delivery report (NDR):
	
	  554 Mailbox is not local: sender's SMTP address
	
	MORE INFORMATION
	================
	
	The NDR can occur if the Exchange-based server only accepts secure connections
	and if the "Clients can only submit if homed on this server" check box on the
	Connections tab has been selected. If the "Only from clients using" option in
	the Accept Connections section on the Connections tab in the Internet Mail
	Service is selected, the server is configured for secure connections.
	
	If the "Clients can only submit if homed on this server" option is configured on
	the Connections tab in the Internet Mail Service, you must choose an option from
	the "Only from hosts using" box. Acceptable options include Authentication or
	"Authentication and Encrypt".
	
	If you enable SMTP Log logging on the server, the following events may be
	reported in the log file depending on which secure connection method between the
	two SMTP hosts is defined. The following example uses Windows NT
	Challenge/Response authentication and encryption:
	
	5/13/00 2:36:27 PM : A connection was accepted from SERVER1.
	5/13/00 2:36:27 PM : <<< EHLO server1.COMPANY1.COM
	5/13/00 2:36:27 PM : >>> 250-server2.COMPANY2.COM Hello [server2]
	250-XEXCH50
	250-HELP
	250-ETRN
	250-DSN
	250-SIZE 0
	250-AUTH LOGIN
	250 AUTH=LOGIN
	
	5/13/00 2:36:28 PM : <<< AUTH NTLM TlRMTVNTUAABAAAAt5IAQAcABwAgAAAAAAAAAAAAAABUSU1EVU1QAAAAAAAAAAA=
	5/13/00 2:36:28 PM : >>> 334 TlRMTVNTUAACAAAADgAOADAAAAC1ggFAkDTQvqfglJ8AAAAAAAAAAAAAAAA+AAAAVABJAE0ARABPAEYAVQA=
	
	5/13/00 2:36:28 PM : <<< TlRMTVNTUAADAAAAGAAYAHgAAAAYABgAkAAAAA4ADgBAAAAAGgAaAE4AAAAQABAAaAAAABAAEACoAAAAtYIBQFQASQBNAEQATwBGAFUAYQBkAG0AaQBuAGkAcwB0AHIAYQB0AG8AcgBUAEkATQBOAFQAUwAyADAAY2qLBIf9tVBTxY9/NJ02/bhh87MSMPu+qZyHMgS735h75FsyxOlmOLegHnkDN8VFbU99BoofZ3hP6D2cFwsbsQ==
	
	5/13/00 2:36:28 PM : >>> 235 ntlm authentication successful
	
	5/13/00 2:36:28 PM : <<< MAIL FROM:<JohnD@COMPANY1.com> SIZE=1460 RET=FULL
	5/13/00 2:36:28 PM : >>> 250 OK - mail from <JohnD@COMPANY1.com>; can accomodate 1460 bytes
	
	5/13/00 2:36:28 PM : <<< RCPT TO:<janed@company2.com> NOTIFY=FAILURE,DELAY
	5/13/00 2:36:28 PM : >>> 250 OK - Recipient <janed@company2.com>
	
	5/13/00 2:36:28 PM : <<< DATA
	5/13/00 2:36:28 PM : >>> 354 Send data.  End with CRLF.CRLF
	
	5/13/00 2:36:28 PM : >>> 554 Mailbox is not local: JohnD@COMPANY1.com
	
	5/13/00 2:36:28 PM : <<< QUIT
	5/13/00 2:36:29 PM : >>> 221 closing connection
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
