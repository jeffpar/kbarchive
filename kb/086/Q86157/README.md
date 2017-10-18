---
layout: page
title: "Q86157: PROFS: How to Stop the Gateway If It Is &quot;Looping&quot;"
permalink: kb/086/Q86157/
---

## Q86157: PROFS: How to Stop the Gateway If It Is &quot;Looping&quot;

	Article: Q86157
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Microsoft Mail gateway appears to be in an infinite loop, and no mail is
	getting through in either direction, then you should stop and restart the
	gateway.
	
	The only way to stop the VM side of the gateway is by typing HX. This is short
	for Halt eXecution, and is used to stop any VM/CMS program. If the gateway is
	looping, you may have to type HX <CR> (type HX and press ENTER) several
	times before the gateway stops.
	
	At the CMS prompt, you should check the gateway VM ID's reader for any files that
	could not be processed and were causing the looping. These files should be
	deleted or returned to the originator.
	
	To restart the gateway, type IPL CMS and press ENTER.
	
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
