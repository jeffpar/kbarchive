---
layout: page
title: "Q322825: XGEN: List of POP3 Commands Supported by Exchange Server 5.5"
permalink: /kb/322/Q322825/
---

## Q322825: XGEN: List of POP3 Commands Supported by Exchange Server 5.5

	Article: Q322825
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Post Office Protocol 3 (POP3) commands that are
	supported in Microsoft Exchange Server 5.5.
	
	Overview
	--------
	
	POP3 is a very simple and limited protocol, which includes a set of approximately
	11 commands. The following 10 are supported by Exchange Server 5.5:
	
	  list
	  uidl
	  retr
	  stat
	  dele
	  rset
	  noop
	  top
	  auth
	  quit
	
	NOTE: Exchange Server 5.5 does not support the apop command.
	
	
	To test a POP3 connection to an Exchange Server 5.5 computer, establish a telnet
	connection to port 110 of the server. To do this, type the following at a
	command prompt
	
	  telnet <ServerIPAddress> 110
	
	where <ServerIPAddress> is the IP address of the Exchange Server computer
	that you want to connect to. Log on to the mailbox that you want by using the
	user and pass commands, and then use any of the supported POP3 commands listed
	at the beginning of the "Summary" section of this article.
	
	NOTE: A POP3 client uses standard Simple Mail Transfer Protocol (SMTP) to send
	messages. The POP3 commands listed in this article function only to receive
	messages.
	
	POP3 Commands Supported in Exchange Server 5.5
	----------------------------------------------
	
	You can use the following POP3 commands with Exchange Server 5.5.
	
	User:
	
	Use the user command to specify the name of the user account that you use to log
	on. The user command takes the following syntax:
	
	  user <UserName>
	
	  -or-
	
	  user <Domain\UserName>
	
	  If the mailbox name is different from the user name, use the following
	  syntax:
	
	  user <Domain\UserName\MailboxName>
	
	
	Pass:
	
	Use the pass command to specify the password of the user account that you use to
	log on. The pass command uses the following syntax:
	
	  pass <Password>
	
	List:
	
	Use the list command to display the identifier number and the size (in bytes) of
	messages in the mailbox, or to display the number and size of a particular
	message. The list command uses the following syntax, where <n> is the
	message number that is returned by the list command:
	
	  list
	
	  -or-
	
	  list <n>
	
	Uidl:
	
	Use the uidl command to return a numeric listing of all messages in the mailbox
	and their associated unique IDs, or the unique ID for a particular message. The
	uidl command uses the following syntax, where <n> is the message number
	(as returned by the list command) of the uidl that you want to view:
	
	  uidl
	
	  -or-
	
	  uidl <n>
	
	Retr:
	
	Use the retr command to retrieve a message from the server. Note that you cannot
	use this command to retrieve a message that is marked as deleted. The retr
	command uses the following syntax, where <n> is the message number that is
	returned by the list command:
	
	  retr <n>
	
	Stat:
	
	The stat command returns the total number of messages in the mailbox and the
	total size (in bytes) of the messages. Note that you cannot use this command to
	display more information about individual messages. To do this, you must use the
	list or retr commands (as appropriate).
	
	Dele:
	
	Use the dele command to mark a message for deletion. When you mark a message for
	deletion, the message is deleted after you use the quit command to disconnect
	the client from the server. In a situation where the connection is cut off
	unexpectedly, the messages are not deleted. The dele command uses the following
	syntax, where <n> is the message number that is returned by the list
	command:
	
	  dele <n>
	
	Rset:
	
	Use the rset command to unmark all messages that are marked for deletion.
	
	Noop:
	
	The noop command refers to "no op"eration. Although this command does not perform
	any action, if the command is successful, the server replies with a positive
	response (OK+). You can use this command to test whether the server is online
	and receiving client requests.
	
	Top:
	
	Use the top command to display the message header and a particular number of
	lines of the message. The top command uses the following syntax, where <x>
	is the message number that you want to view, and <y> is the number of
	lines in the message that you want to display:
	
	  top <xy>
	
	When you use this command, the server returns the headers for the message,
	followed by a blank line, and then the first <y> number of lines of the
	message.
	
	Auth:
	
	The auth command is an Internet Message Access Protocol (IMAP) command that is
	part of the POP3 specification, as detailed in Internet Engineering Task Force
	(IETF) Request for Comments (RFC) 1734. It permits you to use alternative IMAP4
	authorization mechanisms.
	
	Quit:
	
	Use the quit command to quit the current telnet session and delete any messages
	that are marked for deletion.
	
	MORE INFORMATION
	================
	
	For additional information about how to test POP3 connectivity to an Exchange
	Server computer by using telnet, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q165186 XFOR: Verifying Basic POP3 Connectivity Using Telnet
	
	For more information about POP3, visit the following IETF Web site to see RFC
	1725, RFC 1734, and RFC 1939:
	
	  http://www.ietf.org/rfc
	
	Additional query words: internet eudora inbox
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
