---
layout: page
title: "Q152164: TN3270/E Server Service Incorrectly Handles Courtesy Acks"
permalink: /kb/152/Q152164/
---

## Q152164: TN3270/E Server Service Incorrectly Handles Courtesy Acks

	Article: Q152164
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a client that supports TN3270/E, the client connection may drop
	abnormally.
	
	CAUSE
	=====
	
	The TN3270/E Service may improperly handle acknowledgments between SNA Server
	and a TN3270E client, causing the SNA Server to report an invalid sequence
	number error to the TN3270/E Service. This error results in a dropped TN3270E
	client session.
	
	RESOLUTION
	==========
	
	Made a change to the TN3270E Server Service to not treat the RUI_WRITE as an
	implicit acknowledgment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The Way TN3270 (Not TN3270E) Clients Get Acknowledged by the TN3270/E
	
	Server Service
	--------------
	
	RUI applications, such as the TN3270/E Server service, are required to send
	courtesy acknowledgments for RQE data, so that the node can clear out its
	internal correlation table.
	
	When the TN3270 Server is connected to a TN3270 client, the SNA Server Service
	issues a courtesy acknowledgment for each RU of data it receives from the SNA
	host just as soon as it has passed the data on to the TN3270 client.
	
	The Way TN3270/E Clients Get Acknowledged by the TN3270/E Server Service
	------------------------------------------------------------------------
	
	When the TN3270 Server is connected to a TN3270/E client, acknowledgments are
	done differently. In TN3270E (unlike TN3270), data is passed to the TN3270E
	client with a flag specifying whether the data is RQD or RQE. The TN3270E terms
	for these are ALWAYS-RESPONSE and ERROR-RESPONSE. In order to match up responses
	from the TN3270E client, there is also a sequence number on each data message
	between the server and the client. This sequence number does not match the SNA
	sequence number in the SNF field (as defined by the IBM SNA Formats Guide).
	
	Therefore, the effect of this is that the TN3270E Server cannot immediately send
	a courtesy acknowledgment for each RU of data it receives from the node, because
	the TN3270E client might, at some later time, send a negative response to the
	data, and the server is supposed to pass this negative response on to the SNA
	host. Therefore, the TN3270E Server has to keep its own correlation
	table---mapping TN3270E sequence numbers to SNA sequence numbers, just in case a
	TN3270E client decides to send a negative response to an ERROR-RESPONSE message.
	This correlation table has a fixed number of entries, and whenever this table
	begins to fill up the TN3270 Server clears out some of it (but only the oldest
	messages), and sends a courtesy acknowledgment at that point for the messages it
	is removing from the table.
	
	The following diagram illustrates the message flow of the problem:
	
	TN3270E client              TN3270E Service               SNA Server
	--------------------------------------------------------------------
	                                                         <- RUI_READ Data
	                                                         (RQE, SNF=001E)
	
	                           <- RUI_READ OK (Data,
	                           RQE, SNF=001E)
	
	                           <- Data (RQE, SNF=001E)
	
	RUI_WRITE (Courtesy ACK, ->
	SNF=001E). See Note 1.
	
	                           Data (ACK, SNF=001E) ->
	
	                           Implicit ACK (SNF=001E).   ->
	                           See Note 2.
	                                                         <- Error (Invalid
	                                                         Sequence Number)
	
	                           <- Error (Invalid Sequence Number)
	
	Notes:
	
	- This is an RUI_WRITE and is treated as a courtesy ack for the RUI_READ that
	  was received earlier. You can find out which data is being acknowledged by
	  looking at the snf field, and matching it up with the snf field for the
	  previous RUI_READ (001E).
	
	- The TN3270E Server's algorithm does not take a crucial fact into account.
	  This fact is that the node treats inbound data (that is, data from an TN3270E
	  emulator) as an implicit courtesy acknowledgment for any outbound data it has
	  previously passed to the emulator. In this case, there has been an exchange
	  of outbound and inbound data (from the TN3270E emulator), and by the time
	  that the TN3270E Server issues a courtesy acknowledgment to the SNA Server
	  Service then the message for which it is sending the acknowledgment has
	  already been implicitly acknowledged by some inbound data (RUI_WRITE). This
	  causes the error which causes the session to end.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
