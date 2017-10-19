---
layout: page
title: "Q137043: SMTP: Benchmarking the SMTP Gateway"
permalink: /kb/137/Q137043/
---

## Q137043: SMTP: Benchmarking the SMTP Gateway

	Article: Q137043
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended to give you an idea of the volume of mail this gateway
	can theoretically move for inbound mail and outbound mail. This information will
	help you set the proper expectations of this gateway in high volume
	environments, or when a disproportionate amount of mail moves into, or out of,
	the postoffice.
	
	The tests were conducted with the following assumptions:
	
	- All messages are the same size (537 bytes) with no attachments.
	
	- There is no traffic on the Microsoft Mail for PC Networks postoffice (PO) or
	  the Smart Host---no file contention with users or other message transfer
	  agent (MTA), nor does the Connection Attempts Options (-q) come into play.
	
	- The MS-DOS workstation running the gateway does not experience any network
	  fluctuations.
	
	MORE INFORMATION
	================
	
	Outbound
	--------
	
	When you move mail from the Microsoft Mail environment to SMTP, there are three
	obvious variables: the Wait Option, the actual time it takes to send mail, and
	how many messages move per cycle. A cycle begins with a wait state and ends with
	a wait state. A limit of six messages is sent outbound during each cycle.
	
	Below are examples of how changing the Wait Option will increase or decrease the
	volume of mail moving out of the SMTP gateway. A large wait time will decrease
	the amount of time available for outgoing mail; thus, it limits the amount of
	outbound mail.
	
	Factors
	-------
	
	Wait Option (Sec)         120    (default)
	Time to send msg. (sec)      2.5
	Mail per cycle         6
	Wait time per cycle (sec)      105
	Active Time per cycle (sec)      15
	
	              Hours   Days
	
	Time period (Sec)           86,400    24   1
	
	Waiting for Inbound Mail (Sec)   75,600   21   87.5%
	Active gateway time (Sec)      10,800    3   12.5%
	
	           =======
	
	Messages Sent over 24 hour period   1,800
	
	Factors
	-------
	
	Wait Option (Sec)         15
	Time to send msg. (sec)      2.5
	Mail per cycle         6
	Wait time per cycle (sec)      0
	Active Time per cycle (sec)      15
	
	              Hours   Days
	
	Time period (Sec)           86,400    24   1
	
	Waiting for Inbound Mail (Sec)   0   0   0.0%
	Active gateway time (Sec)   86,400    24   100.0%
	
	           =======
	
	Messages Sent per Time period   14,400
	
	Factors
	-------
	
	Wait Option (Sec)         600
	Time to send msg. (sec)      2.5
	Mail per cycle         6
	Wait time per cycle (sec)      585
	Active Time per cycle (sec)      15
	
	              Hours   Days
	
	Time period (Sec)         86,400    24   1
	
	Waiting for Inbound Mail (Sec)   84240   23.4   97.5%
	Active gateway time (Sec)      2,160    0.6   2.5%
	
	           ====
	
	# Message Sent per Time period   360
	
	Per the factors above, if you change the -W option, it has a substantial impact
	on the volume of mail moved out of the gateway. Inversely, this will affect the
	availability of inbound messages. Depending on how much mail needs to be sent,
	or which way it needs to be sent, this option will determine how you configure
	your gateway.
	
	However, there is one more issue that should be addressed. Receiving mail, unlike
	sending mail, does not limit how many messages may be received during a cycle.
	(This is not possible to configure on the SMTP host.) In theory, once a
	connection is made messages will be received indefinitely. Therefore, the
	setting of the command-line options makes no difference.
	
	Inbound
	-------
	
	Below is a table showing the maximum volume of inbound messages based on the same
	size message.
	
	Factors
	-------
	
	Wait Option (Sec)            120   Default
	Time to receive msg. (sec)         2.5
	Messages per cycle         Unlimited
	Checking for mail per cycle (sec)      0
	Receive Mail per cycle (sec)                300
	
	                 Hours   Days
	
	Time period (Sec)              86,400    24   1
	
	Time spent checking for mail per day (Sec)   0   0   0.0%
	Time Spent Receive mail (Sec)        86,400    24   100.0%
	
	# Message received per Time period        34,560
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
