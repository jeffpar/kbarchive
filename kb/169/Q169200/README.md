---
layout: page
title: "Q169200: XADM: Offline Address Book Does Not Contain all Users"
permalink: kb/169/Q169200/
---

## Q169200: XADM: Offline Address Book Does Not Contain all Users

	Article: Q169200
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Offline Address Book gets created successfully but it does not contain all
	the names from the Global Address List (GAL).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If you have all categories of the MSExchangeDS logging set to maximum, you
	should get the following event in the application log:
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Type: Error
	  Description: "Exception e0010004 has occured with parameters 1006 and 0
	  (Internal ID 10701ac). Please contact Microsoft Product Support Services
	  for assistance. "
	
	Additional query words: OAB missing
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
