---
layout: page
title: "Q161116: XCLN: POP3 Supported Command Set for Exchange Server 5.0"
permalink: /kb/161/Q161116/
---

## Q161116: XCLN: POP3 Supported Command Set for Exchange Server 5.0

	Article: Q161116
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage exc5
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	POP3 is a very simple and limited protocol. It has a set of approximately 11
	commands, 10 of which are supported by Microsoft Exchange Server.
	
	To test a POP3 connection to a Server, the user may telnet to port 110 of the
	POP3 Microsoft Exchange Server computer and execute any of the following
	commands.
	
	MORE INFORMATION
	================
	
	Listed below are the commands along with the functionality that each command
	provides.
	
	- Command: USER
	
	  Description: Used to specify the name of the user you wish to logon as. For
	  TR1, it can be specified in the form of either:
	
	  USER <username> -or- USER <domain\username>
	
	  Additionally, if the mailbox name for the user logging on differs from that of
	  the username, the log on may be stated in the form of:
	
	  USER <domain\username/mailboxname>
	
	
	- Command: PASS
	
	  Description: This is the Windows NT domain password of the user who is logging
	  on.
	
	  Usage:
	
	  PASS <password>
	
	- Command: LIST
	
	  Description: Used to list messages and their combined size. For example,
	  invoking the LIST command with no parameters will return 2 +OK messages (320
	  octets). This means that there are two messages in the user's mail drop
	  taking a total of 320 octets of space. To see an individual message simply
	  type:
	
	  LIST <N>
	
	  Where <N> is a number between one and the number of messages originally
	  returned by the LIST command.
	
	- Command: QUIT
	
	  Description: Quits the current telnet session and deletes any messages marked
	  for deletion.
	
	- Command: UIDL
	
	  Description: Returns the Unique ID Listing for a message. This command invoked
	  in the form of either:
	
	  UIDL -or- UIDL <N>
	
	  Where <N> is the message number of the UIDL that the user wants to view.
	  Exchange Server determines this unique value in the following fashion:
	
	  The BASE64 value of the 64-bit Message ID and then the 128 GUID for that
	  message. If the command is invoked without arguments, a numerical listing of
	  all messages and their associated UIDLs is displayed.
	
	- Command: APOP
	
	  Description: Not Supported. APOP is an alternative method of authentication.
	  This is one of the optional POP3 commands.
	
	
	- Command: RETR
	
	  Description: Used to Retrieve a message from the server.
	
	  Usage:
	
	  "RETR <N>" (without the quotation marks)
	
	  Where <N> is a number between 1 and the last number returned by the LIST
	  command. This command may not be used to retrieve a message that has been
	  marked as deleted.
	
	- Command: STAT
	
	  Description: The STAT command is similar to the LIST command in that the
	  server will return the number of messages in the Mail drop along with the
	  total space (in octets) that those messages occupy. However, this is all the
	  information returned by this command. To display messages, either the RETR or
	  LIST commands must be invoked.
	
	- Command: DELE
	
	  Description: This command is used to delete a message. It does not actually
	  delete the message but simply sets a delete flag. The message is actually
	  deleted when the client gracefully breaks the connection to the server using
	  the QUIT command. In the case where there is a crash or immediate connection
	  termination by the client, the messages are not deleted.
	
	  Usage:
	
	  DELE <N>
	
	  Where <N> is the number of the message provided by the LIST command.
	
	- Command: NOOP
	
	  Description: A Null or NO OPeration. In this case, the server does nothing.
	
	- Command: RSET
	
	  Description: Used by the client to reset the state of messages marked for
	  deletion.
	
	- Command: TOP
	
	  Description: This command is used to display both the header for a message and
	  a given number of lines for that message. This command is used in the form
	  of:
	
	  TOP <X><Y>
	
	  Where <X> is the message number the user wants to view and <Y> is
	  the number of lines in that message to be displayed. The server should return
	  the headers for the message followed by a blank line and then the Y number of
	  lines for that message.
	
	- Command: AUTH
	
	  Description: This is an IMAP4 command that is part of the POP specification
	  from RFC1734. It allows for the use of alternative IMAP4 authorization
	  techniques.
	
	NOTE: A POP3 client uses standard SMTP to send messages. The POP3 command set
	listed in this article is to receive messages only.
	
	For more information on POP3, please refer to RFC 1725, RFC 1734 and RFC 1939.
	You can locate these and other RFCs at the following Web site:
	
	  http://www.pmg.lcs.mit.edu/rfc.html
	
	Additional query words: internet eudora inbox
	
	======================================================================
	Keywords          : kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
