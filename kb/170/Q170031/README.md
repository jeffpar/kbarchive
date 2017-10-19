---
layout: page
title: "Q170031: Sendmail Version 8 Configurable Timeouts"
permalink: /kb/170/Q170031/
---

## Q170031: Sendmail Version 8 Configurable Timeouts

	Article: Q170031
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the Sendmail version 8.0 timeouts that can be configured on
	the Sendmail host:
	
	  initial: the amount of time to wait for the initial greeting message.
	
	  mail: the amount of time the local Sendmail waits for acknowledgement of its
	  MAIL command.
	
	  rcpt: the amount of time the local Sendmail waits for acknowledgement of each
	  RCPT command.
	
	  datainit: the amount of time that the local Sendmail waits for
	  acknowledgement of its DATA command.
	
	  datablock: the amount of time the local Sendmail waits for acknowledgement of
	  receipt of each line.
	
	  datafinal: the amount of time the local Sendmail waits for acknowledgement
	  that the mail message was received.
	
	  rset: the amount of time the local Sendmail waits for acknowledgement of the
	  RSET command.
	
	  quit: the amount off time the local Sendmail waits for acknowledgement of the
	  QUIT command.
	
	  misc: the amount of time the local Sendmail waits for acknowledgement of
	  miscellaneous commands.
	
	  command: the amount of time the local Sendmail waits for commands.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
