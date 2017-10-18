---
layout: page
title: "Q167195: 5250 Print Jobs Fail If Connection to Printer Lost/Recovered"
permalink: kb/167/Q167195/
---

## Q167195: 5250 Print Jobs Fail If Connection to Printer Lost/Recovered

	Article: Q167195
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	AS/400 print jobs fail to print. The 5250 print session configured in SNA Server
	Manager changes to a spooling state after the job is sent from the AS/400 and
	the Print Manager in Windows NT may also briefly show the print job as spooling.
	However, the job does not print.
	
	CAUSE
	=====
	
	This problem occurs after the network connection to the printer is lost and then
	reestablished. The 5250 print provider does not recognize that the connection to
	the printer was lost, therefore it does not reestablish its connection to the
	printer. Any print jobs sent to the printer by way of the 5250 print session
	fail to print after the connection drop.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Stop and restart the SNA Server Host Print service after any network
	  connection outage between the SNA Server and the network printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In the fix referenced above, the 5250 print provider has been updated to correct
	this problem. Whenever a new print job is started, the 5250 print provider
	checks to see if it still has a valid connection to the printer. If it does not
	have a valid connection to the printer, the 5250 print provider will close the
	current connection and will open a new one.
	
	Please refer to the following article in the Microsoft Knowledge Base for
	information on another problem with 5250 print sessions recovering after a
	connection outage between the SNA Server and the AS/400:
	
	  Q165310 5250 Print Sessions Don't Reconnect After Connection Outage
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
