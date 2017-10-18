---
layout: page
title: "Q155256: IIS 2.0 on Windows NT 4.0 BDC Does Not Create IUSER"
permalink: kb/155/Q155256/
---

## Q155256: IIS 2.0 on Windows NT 4.0 BDC Does Not Create IUSER

	Article: Q155256
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up Internet Information Server (IIS) while you run the Microsoft
	Windows NT 4.0 Setup program on a new BDC (not an upgrade), the IUSER_<BDC
	Machine Name> is not created. Therefore, you cannot connect to any of the
	Internet services on that BDC.
	
	CAUSE
	=====
	
	The IIS Setup program creates the IUSER_<BDC Machine Name> account during
	its installation. Because the BDC does not have access to the domain user
	database until after the BDC is rebooted, the IUSER_<BDC Machine Name> is
	not created. The user will show up under the Internet Server Manager; however,
	because the account does not exist in the domain database, users cannot connect
	to the BDCs Internet services.
	
	NOTE: This only happens when you install IIS during Windows NT 4.0 Setup on a new
	BDC. This does not effect upgrades.
	
	WORKAROUND
	==========
	
	After you restart the BDC after you install IIS, remove IIS from the BDC and
	re-install it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 2.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis200
	Version           : 2.0
	
	=============================================================================
	
