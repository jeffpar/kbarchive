---
layout: page
title: "Q243187: XFOR: Dirsync Errors Between Exchange Server and Lotus Notes"
permalink: /kb/243/Q243187/
---

## Q243187: XFOR: Dirsync Errors Between Exchange Server and Lotus Notes

{% raw %}

	Article: Q243187
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory information is not propagated from Lotus Notes to Microsoft Exchange
	Server during directory synchronization (dirsync). The following errors are
	logged in the Microsoft Exchange Server Connectivity browser log:
	
	  1998/03/11 11:02:41- LME-NOTES-DXANOTES(017e) 4 60936:Determine if updates
	  should be sent to manager >> pcta(1349)
	  1998/03/11 11:02:41- LME-NOTES-DXANOTES(017e) 2 64161:Agent has timed out - it
	  will disable sending now >> lndxapo(2125)
	
	CAUSE
	=====
	
	The synchronization numbers for inbound and outbound transactions may be out of
	sequence.
	
	RESOLUTION
	==========
	
	Check the Pcta.tbl files in the Exchconn\Dxanotes and the Exchconn\Dxamex
	folders. The outboundseq parameter in the Exchconn\Dxanotes\Pcta.tbl file should
	match the inboundseq parameter in the Exchconn\Dxamex\Pcta.tbl file. If the
	numbers do not match, perform the following steps:
	
	1. On the Exchange Server computer, stop the Notes connector service.
	
	2. Change the outboundseq number in the Exchconn\Dxanotes\Pcta.tbl file to match
	  the inboundseq number in the Exchconn\Dxamex\Pcta.tbl file.
	
	3. In each Pcta.tbl file, set the sendcount parameter to zero if it is not
	  already zero.
	
	4. Restart the Notes connector service.
	
	5. Request a full immediate reload from Notes to Exchange Server.
	
	Additional query words: domino
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
