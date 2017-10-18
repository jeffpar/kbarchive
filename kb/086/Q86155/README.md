---
layout: page
title: "Q86155: PROFS: What to Do When Communication with LAN Ceases"
permalink: kb/086/Q86155/
---

## Q86155: PROFS: What to Do When Communication with LAN Ceases

	Article: Q86155
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the VM side of the gateway appears to no longer be communicating with the LAN
	side, the administrator should use the Gateway PC to hot key to the host session
	to check the status.
	
	If the VM side of the gateway is "alive," either PROFS:IDLE or PROFS:READY should
	be displayed on the screen. If not, you can restart the VM side by typing:
	
	  " HX
	  IPL CMS " (without the quotation marks)
	
	Or, if you are already in CMS, type:
	
	  " PROFILE EXEC " (without the quotation marks)
	
	The gateway should eventually come up with the PROFS:IDLE or PROFS:READY prompt.
	Once this has happened, you should hot key back to MS-DOS and restart the
	HostDisp program.
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
