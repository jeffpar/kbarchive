---
layout: page
title: "Q182966: XADM: Exchange 5.0 SP2 Upgrade Fails with No Mapping Error"
permalink: /kb/182/Q182966/
---

## Q182966: XADM: Exchange 5.0 SP2 Upgrade Fails with No Mapping Error

	Article: Q182966
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to upgrade to Service Pack 2 on Exchange 5.0, the upgrade fails
	with the following error message:
	
	  No mapping between account names and security IDs was done.
	
	  Microsoft Windows NT
	  ID no: 0xc0020534
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the service account is listed on all
	Exchange services instead of the system account. To check this, go to Control
	Panel / Services. Double-click each service and look at the Log On As box. "This
	Account" should be selected, and the Exchange service account should be entered
	in this field.
	
	The upgrade to Service Pack 2 should now complete successfully.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
