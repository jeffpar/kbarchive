---
layout: page
title: "Q101903: PC WRmt: Reducing Long Time-Outs with AT&amp;T Driver"
permalink: /kb/101/Q101903/
---

## Q101903: PC WRmt: Reducing Long Time-Outs with AT&amp;T Driver

	Article: Q101903
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using the AT&T driver for Mail Remote for Windows, you might
	experience what seems to be extraordinarily long time-outs upon interruption of
	service from the AT&T host.
	
	To shorten this time, use a serial communication cable between your modem and
	computer that supports Pin 8 for Carrier Detect, and select the Carrier Detect
	option in the Communications dialog box.
	
	MORE INFORMATION
	================
	
	By default, the Carrier Detect option is not selected for use with the AT&T
	driver. This can allow common serial printer cables to be used for modem
	connections, even though these cables should not be used for modem
	communication.
	
	If for any reason there is an interrupted connection, and the Carrier Detect
	check box is cleared (not selected), Mail may take several minutes to time-out.
	
	To make the time-out faster, make sure your modem cable has a data carrier detect
	pin. If it does not, and you select the Carrier Detect check box, the modem will
	not connect to the AT&T Mail Service.
	
	Once your have installed a serial communication cable that provides correct
	service of Pin 8 for Carrier Detection, select the Carrier Detect check box. To
	do this, choose Communications from the Mail menu, then choose the
	Communications button. The Communications dialog box appears with the Carrier
	Detect check box.
	
	For more information about the carrier detect option, see section F, "Carrier
	Detection and Serial Cables" in section 2, "Mail Remote Driver" of the
	README.TXT file installed with Microsoft Mail Remote for Windows.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
