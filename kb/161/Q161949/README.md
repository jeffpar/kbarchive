---
layout: page
title: "Q161949: XCON: MTA Unable to Start on Invalid Object"
permalink: kb/161/Q161949/
---

## Q161949: XCON: MTA Unable to Start on Invalid Object

	Article: Q161949
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using MTAcheck to validate Exchsrvr\Mtadata, the Microsoft Exchange Server
	MTA service may not start, reporting an error on an invalid object.
	
	CAUSE
	=====
	
	MTAcheck incorrectly "awakens" invalid objects, due to a missing case statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In addition to resolving the invalid objects, this bug fix also added two
	command-line parameters to MTAcheck: /RD and /RP. These parameters are useful if
	you have inadvertently flooded the MTA with directory replication and public
	folder replication messages, preventing e-mail messages from being processed.
	Given time, the MTA will eventually work through all the messages.
	
	This circumstance may occur if you configure your replication connectors to
	replicate very frequently, or to resynchronize with all other servers several
	times during a short period of time. This circumstance may also occur if several
	servers are down and unable to accept messages.
	
	To permanently rectify this situation, reconfigure your replication connectors,
	and ensure that all servers are up. /RD removes any messages in Exchsrvr\Mtadata
	that are directory replication messages. /RP removes any messages in
	Exchsrvr\Mtadata that are public folder replication messages. Using these
	command-line parameters will affect the directories and public folders across
	your Microsoft Exchange Server organization.
	
	If the directory replication messages are removed, the directory thinks that
	updates have been sent when they actually were not. The next time servers ask
	for updates, each directory will realize that the previous updates did not get
	assimilated, and will send the earlier updates again. This may result in a flood
	of replication messages to the MTA again. To avoid this, reconfigure your
	replication connectors so that replication messages are staggered throughout the
	day or night.
	
	If public folder replication messages are removed, the other public folders will
	request backfill to bring all replicas to a consistent state. If there is a
	large amount of public folder replication messages to many replicas, this may
	again result in many messages going through the MTA. To avoid this, reconfigure
	you public folder replication schedule to selected times, to evenly distribute
	the load on the MTA.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
