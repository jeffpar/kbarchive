---
layout: page
title: "Q87215: PROFS: Order for Starting Up the Two Sides of the Gateway"
permalink: /kb/087/Q87215/
---

## Q87215: PROFS: Order for Starting Up the Two Sides of the Gateway

	Article: Q87215
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
	
	The host side of the gateway must always be started first, in order for HostDisp
	(or VMGATE) to operate correctly.
	
	Once you start the host side of the gateway, "PROFS:IDLE" or "PROFS:READY"
	appears on the screen. HostDisp relies on this prompt when it "polls" the host
	to check if there is mail to download. If HostDisp does not see one of these two
	prompts, it exits to MS-DOS without attempting to upload or download any mail.
	
	For detailed instructions on how to start each side of the gateway, consult the
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide."
	
	
	Additional query words: 3.00 pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
