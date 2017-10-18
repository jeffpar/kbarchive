---
layout: page
title: "Q157211: SMS: INVWIN32 Does Not Always Detect Network Card(s)"
permalink: kb/157/Q157211/
---

## Q157211: SMS: INVWIN32 Does Not Always Detect Network Card(s)

	Article: Q157211
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows NT inventory agent is sometimes unable to inventory the network
	card(s).
	
	CAUSE
	=====
	
	This problem arises when network cards are added and/or removed.
	
	To detect the installed network cards, the Windows NT inventory agent reads the
	following registry path:
	
	  HKEY_LOCAL_MACHINE\ 
	  Software\Microsoft\Windows NT\CurrentVersion\NetworkCards\<NIC number>
	
	However, the inventory agent expects to find the first NIC as NIC number "1".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Systems Management Server version 1.2. For information on obtaining
	the Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
