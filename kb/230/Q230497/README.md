---
layout: page
title: "Q230497: XCON: MTA Sends NDR: Message Transfer Service Congestion"
permalink: kb/230/Q230497/
---

## Q230497: XCON: MTA Sends NDR: Message Transfer Service Congestion

	Article: Q230497
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article applies to Exchange Server organizations using X.400 Connectors to
	interconnect Exchange Server sites.
	
	Users are reporting receiving non-delivery reports (NDRs) when they send messages
	to certain Exchange Server sites. The NDR appears as follows:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: test 10:00
	  Sent: 4/29/99 10:02 AM
	
	  The following recipient(s) could not be reached:
	
	  Doe, John on 4/29/99 10:17 AM
	  The recipient could not be processed due to congestion in the message transfer
	  service. The MTS-ID of the original message is:
	  c=US;a=;p=DTF;l=NTMX17OA-990429140155Z-96516
	  MSEXCH:MSExchangeMTA:HSD:NTMX21BE
	
	The local Exchange Server bridgehead server may show the following events in the
	application event log in regards to the non-delivery of messages:
	
	  Event ID :290
	  A non-delivery report (reason code transfer-failure and diagnostic code
	  MTS-congestion) is being generated for message C=US;A=
	  ;P=UTC;L=HSMX30NT-990429133235Z-1108. It was originally destined for
	  DN:/o=UTC/ou=HSD/cn=Configuration/cn=Servers/cn=HSMX21NT/cn=Microsoft DSA
	  (recipient number 1), and was to be redirected to
	  DN:/o=UTC/ou=HSD/cn=CONFIGURATION/cn=SERVERS/cn=HSMX21NT/cn=MICROSOFT DSA
	  C=US;A= ;P=UTC;O=HSD;S=HSMX21NT-DSA;. [MTA DISP:RESULT 22 136] (12)
	
	CAUSE
	=====
	
	The message transfer service congestion NDR is sent when the user's local
	bridgehead server has had consistent difficulty reaching a remote message
	transfer agent (MTA) over an extended period of time. This can be caused by the
	known issue mentioned in the following Microsoft Knowledge Base articles:
	
	  Q193894 XCON: MTA Stops Processing Messages and Generates 9156 Events
	
	  Q229643 XCON: 9156 Errors Occur after Applying Exchange 5.5 Service Pack 2
	
	In brief, the Exchange Server MTA may run out of TCP/IP control blocks and then
	can no longer initiate or accept X.400 communications from other MTAs.
	
	RESOLUTION
	==========
	
	To verify whether an Exchange Server X.400 bridgehead server is out of TCP/IP
	control blocks, examine the application log for the following event:
	
	  Source: MSExchangeMTA
	  Category: Resource
	  Type: Warning:
	  A resource limit has been reached while attempting to open an association.
	  There are no free control blocks available for network type 1. The configured
	  count is 20. [BASE IL TCP/IP DRVR 8 282] (10)
	
	After the above event is logged in the application, the MTA cannot send or
	receive messages to other MTAs. Unless there is another valid route for the
	messages to be delivered to the remote Exchange Server site, the MTA is forced
	to send NDRs for those messages after a period of time.
	
	To immediately establish mail flow, the MTA logging the events needs to be
	re-started. However, the long-term resolution is listed in Microsoft Knowledge
	Base article Q229643.
	
	MORE INFORMATION
	================
	
	Some Exchange Server organizations use only one route between Exchange Server
	sites. In cases where that route is an X.400 Connector and the X.400 bridgehead
	server MTAs are logging the 9156 events, the Exchange Server Directory service
	cannot update the remote site's directory. The Directory service may log the
	following events as evidence of the mail flow problems:
	
	  Event ID: 1103
	  Source: MSExchangeDS
	  Category: Replication
	  Type: Warning
	  During intersite replication, the directory replication agent (DRA) received a
	  non-delivery report (NDR) for messages submitted for the directory at
	  Microsoft DSA. The diagnostic is 2. The reason is 0.
	
	After mail flow is reestablished over the X.400 Connectors connecting the two
	sites, the Exchange Server Directory service can send and receive directory
	updates and no longer logs the above event.
	
	Additional query words: mts
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
