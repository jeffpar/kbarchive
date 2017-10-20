---
layout: page
title: "Q86114: PROFS: How to Prevent the Gateway VM ID from &quot;Going to Sleep&quot;"
permalink: /kb/086/Q86114/
---

## Q86114: PROFS: How to Prevent the Gateway VM ID from &quot;Going to Sleep&quot;

{% raw %}

	Article: Q86114
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Microsoft Mail gateway VM ID is logged off automatically, the LAN side
	will not be able to communicate and will subsequently exit to MS-DOS.
	
	The VM administrator should make sure that the gateway VM ID is not included on
	the list of IDs that will be automatically logged off of VM because of
	inactivity. Also, make sure the gateway VM ID does not load any "screen saver"
	software, which would blank the host session screen. This prevents the LAN side
	gateway program from "reading" the host session screen.
	
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
