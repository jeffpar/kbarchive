---
layout: page
title: "Q159166: XCON: MTA Stops Responding; Event ID 2110"
permalink: /kb/159/Q159166/
---

## Q159166: XCON: MTA Stops Responding; Event ID 2110

	Article: Q159166
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) may stop responding; the following event
	appears in the Event Viewer application log:
	
	  Event ID: 2110
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Internal Processing
	  Description: A fatal MTA database server error was encountered. A bad list
	  member length is on object 06000044. File offset: 0. Attribute ID: 4096.
	  Referenced object 00000000 (0=>N/A). Referenced object error: 0. (DB
	  Server XFER-IN 15 42](16).
	
	When this error occurs, the MTA stops responding because a bad message is being
	processed on the affected server. If you run MTACHECK, it reports no errors.
	Each time the MTA is restarted, the same error occurs with a different object
	(06######) referenced each time.
	
	RESOLUTION
	==========
	
	To troubleshoot this error, attempt to isolate the problem to a bad local DAT
	file in the Mtadata directory:
	
	1. Run MTACHECK.
	
	2. If MTACHECK does not correct the problem, try finding the referenced DAT file
	  (06######.DAT) in Mtadata. If it is there, move it to another directory or
	  rename it. Restart the MTA to confirm whether the event ID 2110 recurs.
	
	3. If this error still occurs after you try to troubleshoot the local MTA, find
	  out more information about the topology of the Microsoft Exchange
	  environment.
	
	  Find out whether there is any mail entering the Microsoft Exchange environment
	  through the Internet Mail Connector (IMC), a foreign X.400 system, or a
	  Microsoft Mail Connector. These servers will most likely be the source of the
	  bad message. Troubleshoot those servers that have these connectors installed,
	  and see whether there are actually problems originating on those servers:
	
	  a. Check the Event Viewer Application Logs, and verify that the MTA is
	     running fine on those servers.
	
	  b. Look in the MTA queue (on other adjacent servers) for mail destined for
	     the affected server (that is, the server that is not responding and is
	     experiencing Event ID 2110) with an old time/date stamp. If there is
	     anything suspicious there, try to delete the messages that appear to be
	     old or corrupt.
	
	  c. If the MTA appears to be running with no problems on those servers,
	     consider shutting down the MTAs (one at a time) and running MTACHECK on
	     each of the computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The portion of the event description in parentheses (DB Server XFER- IN 15 42)
	indicates which part of the MTA code was executing when the bad message was
	encountered.
	
	In the case where "(DB Server XFER-IN 15 42)" is shown, there is an increased
	possibility that the bad message can be found on an adjacent server that is
	trying to deliver the message to this local server.
	
	In the case where "(DB Server DISP FANOUT 22 42)"is shown, the bad message can
	probably be found on the local server in \MTADATA.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
