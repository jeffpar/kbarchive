---
layout: page
title: "Q189326: XADM: Verifying Basic IMAP Connectivity Using Telnet"
permalink: kb/189/Q189326/
---

## Q189326: XADM: Verifying Basic IMAP Connectivity Using Telnet

	Article: Q189326
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Follow the steps below to ensure that you have proper IMAP4 connectivity to a
	mailbox located on Microsoft Exchange.
	
	NOTE: Press ENTER after you type each line:
	
	Start a Telnet session using the following command:
	
	1. Telnet <IP address of Mail server (Exchange)> 143
	
	  If this works, you see the following response from the server:
	
	  +OK Microsoft Exchange IMAP4rev1 server version x.x.x (F.Q.D.N.) ready
	
	2. ? LOGIN <NTDOMAIN/NTACCOUNT/ALIAS> <PASSWORD>
	
	  This begins the communication by initiating a login to the mailbox. Do not
	  forget the "?" and space before the commands.
	
	  You will receive this response:
	
	  +OK LOGIN completed
	
	3. ? LIST "" "*"
	
	  This will provide a list of available folders.
	
	4. ? Select <Folder> (for example, Inbox or Deleted Items)
	
	  This selects the appropriate mailbox.
	
	  You will receive the following response (this varies, depending on the number
	  of messages in the mailbox):
	
	  * <#> EXISTS
	  * <#> RECENT
	  * FLAGS (\Seen \Answered \Flagged \Deleted \Draft)
	  * OK [PERMANENTFLAGS (\Seen \Answered \Flagged \Deleted \Draft)]
	  * OK [UNSEEN <#>] Is the first unseen message
	  * OK [UIDVALIDITY 73] UIDVALIDITY value.
	  ? OK [READ-WRITE] SELECT completed.
	
	5. ? FETCH <message number, [that is, 1, 2, 3, and so on]> <All,
	  Body>
	
	  This retrieves a message. You will see the message you selected with a
	  "message number" response:
	
	  * 1 FETCH (FLAGS ( )  INTERNALDATE "25-JUN-1998 10:57:38 -500"
	  RFC822.SIZE 417 ENVELOPE 9"Thu, 25 Jun 1998 10:57:33 -500" "Test"
	  (("Administrator" NIL "Administrator" "microsoft.com"))
	  (("Administrator" NIL "Administrator" "microsoft.com"))
	  (("Administrator" "microsoft".com")) NIL NIL NIL
	  "219876E11AFBD111A43F00C04F8FECCA33D4@mail2.dns.microsoft.com"))
	  * ? OK FETCH completed.
	
	6. ? LOGOUT
	
	This logs the user out of the IMAP session with the Exchange Server computer. You
	will receive a message similar to this one when you are successful:
	
	? LOGOUT
	* BYE Microsoft Exchange IMAP4rev1 server version 5.5.2654.50 signing off
	? OK LOGOUT completed.
	
	NOTE: The version number may vary depending upon the Exchange Server Service Pack
	installed. The example above is with Exchange Server version 5.4 SP4 applied.
	If you can complete the above steps without error, any IMAP4 client conforming to
	RFC 2060 should be able to connect to the mailbox on the Exchange Server
	computer.
	
	Additional query words: troubleshoot troubleshooting tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
