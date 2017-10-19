---
layout: page
title: "Q174078: XADM: Tracking Log Event Numbers for Exchange 4.0"
permalink: /kb/174/Q174078/
---

## Q174078: XADM: Tracking Log Event Numbers for Exchange 4.0

	Article: Q174078
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tracking logs are created when message tracking is enabled on a Microsoft
	Exchange component. These logs can be read and edited by any text editing
	program. The logs are tab delimited and can be loaded into spreadsheet programs
	such as Microsoft Excel. You can also write an application to interpret message
	tracking logs.
	
	MORE INFORMATION
	================
	
	Tracking logs are located in Exchsrvr\Tracking.log. Each daily log is named by
	the date on which it was created in yyyymmdd.log format. The file name date,
	like all time in the tracking log, is in Greenwich mean time (GMT).
	
	The following table defines the event numbers in the tracking logs.
	
	 Event#  Event Type             Description
	  ------  ---------------------  -------------------------------------
	
	  0       Message transfer in    The message was received from a server,
	                                 connector, or gateway.
	
	  2       Report transfer in     A delivery receipt or NDR was received
	                                 from a server, connector, or gateway.
	
	  4       Message submission     The message was sent by the client.
	
	  7       Message transfer out   The message was sent to a server,
	                                 connector, or gateway.
	
	  8       Report transfer out    A delivery receipt or NDR was sent to a
	                                 server, connector, or gateway.
	
	  9       Message delivered      The message was delivered to a mailbox or
	                                 public folder.
	
	  10      Report delivered       A delivery receipt or NDR was delivered
	                                 to a mailbox.
	
	  26      Distribution list      A recipient distribution list was
	          expansion              expanded so the message could be sent to
	                                 different addresses.
	
	  28      Message redirected     The message was sent to a mailbox other
	                                 than those of the recipients.
	
	  29      Message rerouted       The message was routed to an alternate
	                                 path.
	
	  33      Report absorption      The number of delivery receipts or NDRs
	                                 exceeded a threshold, and the reports
	                                 were deleted.
	
	  34      Report generation      A delivery receipt or NDR was created.
	
	  43      Unroutable report      A delivery receipt or NDR could not be
	          discarded              routed and was deleted from the queue.
	
	  50      Gateway deleted        The Administrator deleted an X.400
	          message                message queued for a gateway.
	
	  1000    Local Delivery         The sender and recipient are on the same
	                                 server.
	
	  1001    Backbone transfer in   Mail was received from another MAPI
	                                 system across a connector or gateway.
	
	  1002    Backbone transfer out  Mail was sent to another MAPI system
	                                 across a connector or gateway.
	
	  1003    Gateway transfer out   The message was sent through a gateway.
	
	  1004    Gateway transfer in    The message was received from a gateway.
	
	  1005    Gateway report         A delivery receipt or NDR was received
	          transfer in            from a gateway.
	
	  1006    Gateway report         A delivery receipt or NDR was sent
	          transfer out           through a gateway.
	
	  1007    Gateway report         A gateway generated an NDR for a message.
	          generation
	
	This information is available on page 591 of the "Microsoft Exchange Server 4.0
	Administrator's Guide."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
