---
layout: page
title: "Q83541: Mac Fax: FaxGate Gateway Error Messages"
permalink: /kb/083/Q83541/
---

## Q83541: Mac Fax: FaxGate Gateway Error Messages

{% raw %}

	Article: Q83541
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are error messages that can be sent to the Network Manager when
	using the Microsoft Mail for AppleTalk Networks Gateway to Fax:
	
	- 
	
	  Error encountered while trying to fetch and send FAXGATE log. Error: -1
	
	- 
	
	  Error encountered while writing to Outbox. Error: -1
	
	- 
	
	  FAXGATE encountered a "Connect Times..." schedule problem. Error: -1
	
	- 
	
	  Could not locate BackRas. Check to see that it is in your system folder.
	  Error: -1
	
	These errors can appear if Gateway Services, MS Mail GW, is loading on more than
	one Macintosh on the Mail system AND it is also selected via Chooser to the Mail
	server running the fax gateway. Gateway Services downloads and runs gateway code
	from the Mail server datafile. When the fax gateway code is downloaded and run
	on a Macintosh that does not have the fax gateway INITs and the BackFax Files
	folder are not present, the above errors can be generated. To correct this
	problem, remove the MS Mail GW from the Macintosh NOT running the fax gateway.
	Gateway Services should only be loaded on the Mail server running the fax
	gateway.
	
	Additional query words: 2.0 2.00 2.0a 2.00a 2.0b 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	

{% endraw %}
