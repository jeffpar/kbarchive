---
layout: page
title: "Q102746: X400: Retry Times on Failures to Connect to MTA"
permalink: /kb/102/Q102746/
---

## Q102746: X400: Retry Times on Failures to Connect to MTA

	Article: Q102746
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 performs three mail exchange
	processes:
	
	- It receives inbound messages sent from X.400 systems to Microsoft Mail for PC
	  Networks postoffices, and it receives outbound messages sent from Microsoft
	  Mail postoffices to X.400 systems.
	
	- It routes messages and queues them for a specific X.400 message transfer
	  agent (MTA) or for a Microsoft Mail postoffice.
	
	- It transmits outbound messages to remote X.400 MTAs and delivers inbound
	  messages to Microsoft Mail postoffices.
	
	If the X.400 Gateway MTA fails to connect to another X.400 MTA, it continues
	trying to make the connection until it is successful or until the message
	time-out period expires. The interval between attempts grows exponentially to a
	maximum of 24 hours.
	
	Here is an example of exponential growth of the interval between attempts:
	
	  Failure Number      Time to Wait
	  -------------------------------------------------------------------
	
	        1               1 minute
	        2               5 minutes
	        3              15 minutes
	        4              60 minutes
	        5               2 hours
	        6               3 hours
	        7               6 hours
	        8              12 hours
	       ...             ...
	        N              24 hours
	
	MORE INFORMATION
	================
	
	If an incoming connection is established between the X.400 Gateway MTA and an
	external X.400 MTA it has been trying to connect to, the X.400 Gateway MTA
	attempts an outgoing connection immediately after processing the incoming mail.
	
	You can set the time-out period in the X.400 Administrator program (X400ADM.EXE)
	in the X.400 Profile section, under Message Timeout.
	
	Here are the default message time-out periods:
	
	  Microsoft         X.400            Default
	  Mail Priority     Mail Priority    Time-Out Period
	  -------------------------------------------------------------------
	  Normal            Normal           24 hours
	  Low               Non-urgent       36 hours
	  High              Urgent           45 minutes
	
	Additional query words: 3.20 timeout
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
