---
layout: page
title: "Q152877: XCON: Unexpected event ID's 1004, 1008, 1277, and 1198"
permalink: /kb/152/Q152877/
---

## Q152877: XCON: Unexpected event ID's 1004, 1008, 1277, and 1198

	Article: Q152877
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) might generate the
	following errors in the Windows NT application log:
	
	  MSExchangeMTAEvent ID 1004
	
	  An error occurred while processing an association 1 with
	  entity./O=organization/OU=site/CN=CONFIGURATION/CN=SERVERS /CN=MICROSOFT MTA.
	  The association will be terminated and restarted if necessary. [2 20 1 8
	  PLATFORM KERNEL 10] (14)
	
	  MSExchangeMTA Event ID 1008
	
	  An error occurred while processing an association with entity . The
	  association will be terminated and restarted if necessary. [2 26 PLATFORM
	  KERNEL ]
	
	  MSExchangeMTAEvent ID 1277
	
	  An interoperability error occurred. Session error: the remotely initiated
	  transport connection was refused. Control block index 6.
	  Type1[/O=Organization/OU=Site/CN=CONFIGURATION/CN=SERVERS/CN=
	  Servername/CN=MICROSOFT MTA PLATFORM KERNEL] (14)
	
	  MSExchangeMTAEvent ID 1198
	
	  An error occurred while processing an association to entity . Presentation
	  error: state check failure. Current state 0, service type 20, service flavor
	  2 Control block index 3. The association will be terminated and restarted if
	  necessary. [PLATFORM KERNEL 27 108] (14)
	
	MORE INFORMATION
	================
	
	These errors, either together or separately, can occur in situations where there
	are network related problems. (Net Storms, heavy net traffic, hardware related,
	and so forth).
	
	The Microsoft Exchange Server version 4.0 MTA can run into problems when the
	network connection between Microsoft Exchange Servers is cycling up and down.
	When associations between MTAs are established, kernel control blocks (KCBs) are
	created to enable mail flow. When the session closes on an Open Error, the KCB
	is not always returned to an idle state and some paths leading to the KCB are
	left in conflicting states.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: error hang crash mta slow
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
