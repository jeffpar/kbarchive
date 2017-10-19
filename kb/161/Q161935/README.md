---
layout: page
title: "Q161935: XADM: Message Tracking Error 5007 Caused by Missing &#42;.Arc Files"
permalink: /kb/161/Q161935/
---

## Q161935: XADM: Message Tracking Error 5007 Caused by Missing &#42;.Arc Files

	Article: Q161935
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server version 4.0 System attendant (SA) may rapidly
	generate many ASNxxxx.tmp files in the Exchsrvr\Tracking.log directory. At the
	same time, it will be reporting numerous events similar to the following in the
	Windows NT Event Viewer application log when message tracking has been enabled:
	
	  Event ID: 5007
	  Source: MSExchangeSA
	  Description: An error occurred during the message tracking decode operation.
	
	The SA processor utilization may be very high while the Microsoft Exchange
	Message Transfer Agent (MTA) throughput seems low.
	
	CAUSE
	=====
	
	There are several possible reasons for this behavior. The most likely cause is
	when one or more of the *.Arc files are missing or corrupt. In Microsoft
	Exchange Server version 4.0, the SA uses the *.Arc files to decode the message
	tracking log data passed to the SA by the MTA. The *.Arc files are a set of
	templates that describe the structure of ASN.1 encoding used in the logging data
	passed by the MTA to the SA. Without the *.Arc files, the SA is unable to
	proceed with the decoding of message tracking data, and thus logs the 5007
	events.
	
	RESOLUTION
	==========
	
	Verify that all eleven of the *.Arc files are present in the Exchsrvr\Bin
	directory. The file names are:
	
	  Directory of <drive>:\exchsrvr\bin
	
	  07/15/96  12:30a                40,900 ACSE.ARC
	  07/15/96  12:30a                 7,560 BIND.ARC
	  07/15/96  12:30a                 2,704 COMMON.ARC
	  07/15/96  12:30a                91,970 EAI.ARC
	  07/15/96  12:30a                17,577 P1.ARC
	  07/15/96  12:30a                24,005 P3.ARC
	  07/15/96  12:30a                43,795 P7.ARC
	  07/15/96  12:30a                20,979 RDI.ARC
	  07/15/96  12:30a                11,007 ROSE.ARC
	  07/15/96  12:30a                23,790 X400COM.ARC
	  07/15/96  12:30a                 1,301 X500DUM.ARC
	
	These files are static and should not change in size or date. If any of the files
	are missing, you can replace them by copying the necessary *.Arc files from
	another Microsoft Exchange Server. In addition, if any of the file sizes do not
	match, or the files appear to have become corrupted, they should be copied from
	a Server that is not logging the 5007 events.
	
	Another possible reason for this behavior is heap corruption caused by the SA.
	This was a problem in the original release of Microsoft Exchange Server version
	4.0 but has been fixed in the latest Microsoft Exchange Server 4.0 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
