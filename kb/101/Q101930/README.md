---
layout: page
title: "Q101930: Methods and Reasons for Renaming a Bid for a Boot Drive"
permalink: /kb/101/Q101930/
---

## Q101930: Methods and Reasons for Renaming a Bid for a Boot Drive

{% raw %}

	Article: Q101930
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	When your system is booting, it designates the first disk it finds as
	boot disk. If you have two SCSI controllers, LADDR by default boots
	from the one it finds first. If you want to boot from the other one,
	rename it BOOT.BID so that LADDR will find it first from then on.
	
	SPARE001.SYS was set up because any bid that is not registered in
	IOCFG01.SYS is not tried as the LADDR drivers are loaded. If you
	rename any new bid that comes out SPARE001.SYS, it will be tried as
	well. The other option is to include a "device = " line in the
	CONFIG.SYS file.
	
	Additional query words: boot 2.10 2.10a 2.20 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
