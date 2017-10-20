---
layout: page
title: "Q229046: System Event 20 Logged When Printing with SNA Print Server"
permalink: /kb/229/Q229046/
---

## Q229046: System Event 20 Logged When Printing with SNA Print Server

{% raw %}

	Article: Q229046
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following System Event may be logged on the SNA Server computer when
	printing with the SnaPrint Service:
	
	  Event ID: 20
	  Source: Print
	
	  Description:
	  Printer Driver [printer driver name] was added or updated. Files: [list of
	  updated files]
	
	MORE INFORMATION
	================
	
	The Event 20 message could be caused by the following events that take place
	when printing with the SnaPrint Service:
	
	- If the drivers for a remote printer are not installed on the SNA Server
	  computer, the Windows NT spooler service will copy the drivers locally in
	  order to print.
	
	- If the drivers for the remote printer ARE installed on the SNA Server
	  computer, the spooler service still checks the remote printer server for
	  updated drivers. If the drivers are newer than the ones installed on SNA
	  Server, then the newer ones are temporarily copied locally to print the job.
	
	These events occur for every print job that is sent through an SNA Server print
	session. The message does not cause any problems with printing, and can be
	considered an informational message.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
