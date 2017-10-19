---
layout: page
title: "Q170473: XCON: MTA Error 2194, Usually After Recovery"
permalink: /kb/170/Q170473/
---

## Q170473: XCON: MTA Error 2194, Usually After Recovery

	Article: Q170473
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may generate the
	following error:
	
	  2194 An MTA database server error was encountered while getting the next
	  entry from a queue. Called from MTA. Procedure 162.
	  Database error code: ODXOINIU - Object does not exist.
	  Queue: 00000000. [DB Server OPERATOR 19 66] (14)
	
	and examining the MTA queues in the Microsoft Exchange Administrator program
	shows that messages are stuck.
	
	MORE INFORMATION
	================
	
	This error logged by itself usually occurs after a change to an exisiting
	connector or a Microsoft Exchange Server Directory or Information Store recovery
	process. The MTA queue in the Microsoft Exchange Administrator program will
	indicate there are messages waiting to be delivered, however, this is not the
	case. The MTA can become overburdened with processing to be done after a
	connector change or disaster recovery. Errors that would normally be considered
	fatal are actually normal and expected under severe stress. To verify that mail
	is indeed flowing; use the Windows NT Performance Monitor (PerfMon) to view the
	MTA WorkQ. To do this, follow these steps:
	
	1. Start the PerfMon program.
	
	2. On the Edit menu, click Add to Chart.
	
	3. Select the MSExchangeMTA object.
	
	4. Select the Work Queue Length counter.
	
	5. Click the Add button.
	
	If the queue is 0 or there are items in the queue but the number is descreasing,
	the MTA is processing messages. If the MTA is functioning, give the Microsoft
	Exchange Server 24 to 48 hours to clear out the rogue messages in the MTA
	queues.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbinfo
	
	=============================================================================
	
