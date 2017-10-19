---
layout: page
title: "Q150554: Error: Thomas Conrad TC4145 Adapter Not Functioning"
permalink: /kb/150/Q150554/
---

## Q150554: Error: Thomas Conrad TC4145 Adapter Not Functioning

	Article: Q150554
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install a Thomas Conrad TC4145 Token Ring adapter on a computer
	running Windows NT, the following error is returned:
	
	  The TCC Token Ring Driver service failed to start due to the following
	  error:
	  The device attached to the system is not functioning.
	
	MORE INFORMATION
	================
	
	This problem occurs when you use the driver supplied by Thomas Conrad with the
	TC4145. This is a Plug and Play (PnP) adapter, and PnP must be turned off before
	the driver will work properly in Windows NT. Use the QSET4145 utility supplied
	with the adapter--specifically, the -B=D -T=1 switches. This will turn off the
	PnP boot active and the PnP functionality.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
