---
layout: page
title: "Q87219: PROFS: Gateway Processes While Running"
permalink: /kb/087/Q87219/
---

## Q87219: PROFS: Gateway Processes While Running

	Article: Q87219
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HostDisp (or VMGATE) program works in conjunction with the mail system
	database and the host to send and receive mail. Here are the steps HostDisp
	performs, in order:
	
	1. Checks for LAN mail to be sent to the host.
	
	2. Periodically queries the gateway VM ID to see if there is mail to download
	  from the host.
	
	3. Receives mail from the host.
	
	4. Sends mail to host.
	
	5. Processes received mail on the local-area network (LAN).
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
