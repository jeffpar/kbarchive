---
layout: page
title: "Q98421: Renaming a Bid for a Boot Drive"
permalink: /kb/098/Q98421/
---

## Q98421: Renaming a Bid for a Boot Drive

	Article: Q98421
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article explains the significance of renaming a new bid for a boot drive to
	spare001.sys or bootbid.bid.
	
	MORE INFORMATION
	================
	
	When you are booting your system, your machine designates the first disk it
	finds as boot disk. If you have two SCSI controllers, laddr boots from the one
	it finds first by default. If you want to boot from the other one, rename it
	boot.bid so that ddr will find it first from then on.
	
	SPARE001.SYS was set up because any bid that is not registered in IOCFG01.SYS is
	not tried as the laddr drivers are loaded. If you rename any new bid that comes
	out to SPARE001.SYS, it will be tried as well. The other option is to include a
	"device = " line in CONFIG.SYS.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
