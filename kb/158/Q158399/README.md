---
layout: page
title: "Q158399: XFOR: The Maximum Time for Delivering the Message Expired"
permalink: kb/158/Q158399/
---

## Q158399: XFOR: The Maximum Time for Delivering the Message Expired

	Article: Q158399
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Exchange Server receives mail another host or any connector,
	including the Microsoft Mail Connector, the following non-delivery report (NDR)
	may be sent back to the sender:
	
	  <<Message: Test message #1>>
	  Your message did not reach some or all of the intended recipients.
	
	  To: Joe User
	  Subject: Test message #5 reply
	  Sent: 10/28/96 18:40:13 PM
	
	  The following recipient(s) could not be reached:
	
	  Joe User on 10/28/86 18:40:53 PM
	  Reason:1
	  Diagnostic:5
	  The maximum time for delivering the message expired
	  MSEXCH:MSExchangeMTA:DOMAIN:SERVER
	
	  Original Message Follows
	
	MORE INFORMATION
	================
	
	The destination message transfer agent (MTA) will look at the time stamp given
	to the message by the receiving/initial MTA, interim MTA's, or the originating
	client. If there is more than seven days difference among the date/time of the
	destination MTA and the time/date stamp on the messages, messages will time out
	with this NDR. Messages can be sent from Exchange users on the destination MTA
	server with no apparent problems. Sending or telnetting messages will arrive in
	the system and can be verified in the logs, but will not be delivered. The above
	NDR will be sent to the originator. To resolve the problem:
	
	1. In Control Panel Date/Time, change the date and time to the correct date and
	  time.
	
	2. Verify that the date and time on any other Microsoft Exchange Server
	  computers in the Site are correct.
	
	3. Verify that the client computer originating the message has the correct date
	  and time.
	
	4. Verify that any interim Message Transfer Agents such as PCMail External.exe
	  and X.400 MTA's have the correct date and time.
	
	Additional query words: NDR failure internet mail connector IMC X400 error
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
