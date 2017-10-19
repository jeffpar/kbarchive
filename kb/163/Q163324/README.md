---
layout: page
title: "Q163324: XCON: Application Protocol Data Unit (APDU) Logs (BF0.LOG)"
permalink: /kb/163/Q163324/
---

## Q163324: XCON: Application Protocol Data Unit (APDU) Logs (BF0.LOG)

	Article: Q163324
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Protocol Data Unit (APDU) text logs are binary representations of
	communication among Microsoft Exchange Message Transfer Agents (MTAs) in
	different Sites and between MTA and client applications within a Site. The log
	includes the fully-encoded ASN.1 envelope. This is useful for verifying when
	messages from remote MTAs are bad or invalidly formatted.
	
	MORE INFORMATION
	================
	
	Increasing Diagnostic Logging levels to Medium or higher for both the MTA's APDU
	and X.400 Service categories will generate BF*.LOG files in the exchsrvr\MTADATA
	directory. The current log is always named BF0.LOG. Prior logs are named BF#.LOG
	with the # increasing with the age of the log. When a log reaches 5 megabytes in
	size it is renamed and a new log is begun.
	
	NOTE: There is no difference between Medium and Maximum for the APDU category.
	However, in addition to its influence on APDU logs, the diagnostics logging
	level of the X.400 Service category determines which X.400 events are written to
	event logs.
	
	APDU logs can be instrumental in diagnosing problems with the MTA. However, they
	are valuable only to those familiar with ASCII translations of X.400 protocol.
	These logs can grow quite large very quickly and cause performance on the Server
	to suffer.
	
	An ASN.1 Parser can be used to decode the data in a BF0.LOG.
	
	
	Additional query words: whitepaper logging section
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
