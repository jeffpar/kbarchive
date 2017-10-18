---
layout: page
title: "Q220976: XCON: Improve Network Performance in Poor Network Conditions"
permalink: kb/220/Q220976/
---

## Q220976: XCON: Improve Network Performance in Poor Network Conditions

	Article: Q220976
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are certain parameters that can be adjusted to improve connectivity
	between Exchange Server computers within a site over a Site Connector or over an
	X.400 Connector. These values are found in one of two places:
	
	- On the Messaging Defaults tab of the MTA Site Configuration Properties page.
	  The values found in this location affect all message transfer agents (MTAs)
	  in the site.
	
	- On the Override tab of the X.400 Connector Properties page. These values
	  affect only traffic over the X.400 Connector and override the values found on
	  the Messaging Defaults tab of the MTA Site Configuration Properties page.
	
	MORE INFORMATION
	================
	
	In either location, go to the RTS Values section.
	
	The Checkpoint Size (K) value is set to 30 by default. Checkpoint Size (K) sets
	the amount of data to be transferred before a checkpoint is inserted. A
	checkpoint consists of one synchronization point (session level) inside an IP
	packet, the length of which is 59 bytes. Inserting a checkpoint reduces
	transmission speed but increases the reliability of the connection. If an error
	occurs and the message must be transferred again, the process restarts from the
	most recent checkpoint.
	
	If 0 is specified, no checkpoint is set. A checkpoint size of 0 is not
	recommended. A checkpoint of 5 might help reliability over an unreliable
	network, but reduce transmission speed. A checkpoint of 1 requires every packet
	to be explicitly asked for before you can send the next one.
	
	Also, in the RTS section, go to the Window Size value. By default this is set to
	5. Window size is the number of checkpoints that can go unacknowledged before
	data transfer is suspended; the greater the window size, the greater the
	transfer rate and the lower the window size, the more reliable the transfer.
	Specify window size only if the checkpoint size is greater than zero.
	
	Now go to the Association Parameters section, "Disconnect (sec)" value on the
	same properties page. By default, this is set to 120 seconds, or two minutes.
	This means that the local MTA waits two minutes for an association to be
	re-established by either MTA before dropping the connection. Add this to the
	Lifetime value to determine how long the connection stays open after message
	transfer completes. Increasing this value should help network connectivity in
	poor network conditions.
	
	For example, consider the situation in which an X.400 Connector set up to a
	remote location, and the physical link is known to have problems because of the
	hardware limitations along the link. These conditions are verified by seeing a
	large number of retransmissions or resets in a network trace. It is only 64 Kbps
	and also used for data transfer in addition to carrying Exchange Server traffic.
	By lowering the Checkpoint Size value to 15, the Window Size value to 2, and
	increasing the Disconnect Time value to 600 seconds, the message transfer will
	be slowed somewhat but will become more reliable. Experimentation with these
	values is the best way to determine which ones work best for each environment.
	These values, if changed on an X.400 Connector, should be changed at both ends
	of the connector. If you are using a site connector between two sites, these
	changes should be made on the MTA Site Configuration Properties page in each
	site.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185934 XCON: Exchange Server MTA Always Uses RTSE Window Size 3
	
	In addition, the following TechNet article by Greg Dodge: "Configuring and Tuning
	the MS Exchange Server 5.5 MTA," is located at the following Web site:
	
	  http://www.microsoft.com/technet/default.asp
	
	Additional query words: RTS bandwidth
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
